const Koa = require('koa')
const fs = require('fs')
const path = require('path')
const app = new Koa()
const compilerSfc = require('@vue/compiler-sfc')
const compilerDom = require('@vue/compiler-dom')

function rewriteImport (content) {
  return content.replace(/ from ['|"]([^'"]+)['|"]/g, function (s0, s1) {
    // console.log(s0, s1);
    if (s1[1] !== '.' && s1[1] !== '/') {
      return ` from '/@module/${s1}'`
    } else {
      return s0
    }
  })
}

app.use(async (ctx) => {
  const {request: {url, query}} = ctx
  if (url ==='/') {
    ctx.type = 'text/html'
    const content = fs.readFileSync('./index.html', 'utf-8')
    ctx.body = content.replace('<script ', `
      <script>
        window.process = {
          env: {
            NODE_ENV: 'develop'
          }
        }
      </script>
      <script 
    `)
  } else if (url.endsWith('.js')) {
    const p = path.resolve(__dirname, url.slice(1))
    ctx.type = 'application/javascript'
    const content = fs.readFileSync(p, 'utf-8')
    ctx.body = rewriteImport(content)
  } else if (url.startsWith('/@module/')) {
    const prefix = path.resolve(__dirname, 'node_modules', url.replace('/@module/', ''))
    console.log(prefix);
    const module = require(prefix+'/package.json').module
    const p = path.resolve(prefix, module)
    const content = fs.readFileSync(p, 'utf-8')
    ctx.type = 'application/javascript'
    ctx.body = rewriteImport(content)
  } else if (url.indexOf('.vue') > -1) {
    const p = path.resolve(__dirname, url.split('?')[0].slice(1))
    const {descriptor} = compilerSfc.parse(fs.readFileSync(p, 'utf-8'))
    
    if (!query.type) {
      ctx.type = 'application/javascript'
      ctx.body = `${rewriteImport(
        descriptor.script.content.replace('export default', 'const __script = ')
      )}
      import {render as __render} from "${url}?type=template"
      __script.render = __render
      export default __script
      `
    } else {
      const render = compilerDom.compile(descriptor.template.content, {mode: 'module'}).code
      ctx.type = 'application/javascript'
      ctx.body = rewriteImport(render)
    }
    
  } else if (url.endsWith('.css')) {
    const p = path.resolve(__dirname, url.slice(1))

    const file = fs.readFileSync(p, 'utf-8')

    const content = `
      const css = "${file.replace(/\r|\n/g, '')}"

      const link = document.createElement('style')
      link.setAttribute('type', 'text/css')
      document.head.appendChild(link)
      link.innerHTML = css
      export default css
      

    `

    ctx.type = 'application/javascript'
    ctx.body = content
  }
})
app.listen(3000, () => console.log(`Example app listening on port port!`))