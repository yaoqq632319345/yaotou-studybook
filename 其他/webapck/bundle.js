// require cjs
(function (modules) {
  function require(filename) {
    // filename -> "./foo.js" -> fooModule
    // TODO需要通过 filename 找到执行的 fnModule
    const fn = modules[filename];

    const module = { exports: {} };

    fn(require, module, module.exports);

    return module.exports;
  }

  require("./main.js");
})({
  "./main.js": function (require, module, exports) {
    const { foo } = require("./foo.js");
    console.log("main.js");
    foo();
  },
  "./foo.js": function (require, module, exports) {
    exports.foo = function foo() {
      console.log("foo");
    };
  },
  
});
