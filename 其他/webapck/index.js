// asset -> createAsset
const fs = require("fs");
const path = require("path");
const ejs = require("ejs");
const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const { transformFromAst } = require("babel-core");
let id = 1;

function createAsset(filename) {
  //1. 获取当前模块的内容 code
  let source = fs.readFileSync(filename, "utf-8");
  const loaderContext = {
    callback() {
      console.log("callback-------------");
    },
  };

  //initLoader
  const loaders = globalConfig.module.rules;
  loaders.forEach((loaderConfig) => {
    // use -> string | array | function
    const { test, use } = loaderConfig;

    // /.md$/
    if (test.test(filename)) {
      source = use.call(loaderContext, source);
    }
  });

  //   console.log(source);
  const ast = parser.parse(source, {
    sourceType: "module",
  });

  const deps = [];

  traverse(ast, {
    ImportDeclaration({ node }) {
      deps.push(node.source.value);
    },
  });

  const { code } = transformFromAst(ast, null, {
    // es6+-> es5
    presets: ["env"],
  });

  return {
    id: id++,
    code,
    deps,
    filename,
    mapping: {},
  };

  //2. 获取模块的依赖关系
  // import -> ???
  // 1. 正则
  // 2. ast -> 抽象语法树
}

function createGraph() {
  // 入口
  const filename = "./example/main.js";
  const mainAsset = createAsset(filename);

  //广度优先搜索
  const queue = [mainAsset];

  // TODO 如何去解决一个 asset 被重复查找的问题(循环问题)
  for (const asset of queue) {
    // 找到asset的依赖
    asset.deps.forEach((relativePath) => {
      const child = createAsset(path.resolve("./example", relativePath));
      asset.mapping[relativePath] = child.id;
      queue.push(child);
    });
  }

  return queue;
}

function build(graph) {
  function createModules() {
    const modules = {};

    graph.forEach((asset) => {
      modules[asset.id] = [asset.code, asset.mapping];
    });

    return modules;
  }

  function emitFile(context) {
    fs.writeFileSync("./example/dist/bundle.js", context);
  }

  function createContext() {
    const bundleTemplate = fs.readFileSync("./bundle.ejs", "utf-8");

    const modules = createModules();
    console.log(modules);

    return ejs.render(bundleTemplate, {
      modules,
    });
  }

  const context = createContext();
  emitFile(context);
}

function mdLoader(source) {
  // .md -> html

  //   return `export default '<p>this is a doc</p>
  //   '`;

  console.log("mdLoader", this.callback());

  return 'export default "this is a doc"';
}

const globalConfig = {
  module: {
    rules: [{ test: /\.md$/, use: mdLoader }],
  },
};


/**
 * 一、 createGraph 从入口文件开始 广度优先搜索收集依赖 得到所有资源数组
 *    内部逐个处理资源 createAsset
 *      createAsset 
 *        1.读取单个文件内容
 *        2.根据文件后缀调用不同loader
 *        3.转换ast
 *        4.ast中收集依赖 // deps 和文件名id映射  // mapping 
 *        5.es6 -> es5 // code
 *        6.return {
 *          id: id++,
            code,
            deps,
            filename,
            mapping: {}
          }
 * 二、构建 build(graph)
          1.使用ejs模板
          2.将依赖数组转成 {}
          3.填入模板
          4.生成文件
 * */ 

const graph = createGraph();


build(graph);

// ejs
