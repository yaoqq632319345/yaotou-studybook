const Koa = require('koa')
const fs = require('fs')
const path = require('path')
const app = new Koa()

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
  const {request: {url}} = ctx
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
  }
})
app.listen(3000, () => console.log(`Example app listening on port port!`))