/**
 * 一.实现类
 *    1.设置参数及状态
 *    2.实现resolve reject (注意this问题)
 * 二.实现then
 *    1.校验参数
 *    2.设置异步
 *    3.添加pending判断，确保全部执行完毕之后then才执行,此时需要保存所有成功失败函数
 *    4.将resolve和reject 设置定时器，保证最后执行
 * 三.链式调用
 *    1.then方法必须返回一个promise对象
 *
 */
// promise 就是接受一个函数，并执行这个函数，然后将resolve 和 reject 成功和失败的两个关键函数交给这个函数，由这个函数来决定什么时候调用失败或者成功
// 然后通过then方法收集成功函数 catch方法收集失败函数
// 由于先调用的new promise传入的函数，后执行的then 和catch收集，所以需要保证resolve和reject是一个异步函数，当resolve和reject被调用时，保证收集到then和catch中函数

class MyPromise {
  static PENDING = "pending"; // 进行中
  static FULFILLED = "fulfilled"; // 成功
  static REJECTED = "rejected"; // 失败
  constructor(fn) {
    this.myState = MyPromise.PENDING;
    this.PromiseResult = null;

    // 二.3
    this.onFulfilledCallbacks = []; // 保存成功回调
    this.onRejectedCallbacks = []; // 保存失败回调

    // 因为抛出错误也要当做失败reject
    try {
      fn(this.resolve.bind(this), this.reject.bind(this));
    } catch (error) {
      this.reject(error);
    }
  }
  resolve(result) {
    // 只有pending状态才能转换
    if (this.myState === MyPromise.PENDING) {
      setTimeout(() => {
        this.myState = MyPromise.FULFILLED;
        this.PromiseResult = result;

        this.onFulfilledCallbacks.forEach((c) => {
          c(result);
        });
      });
    }
  }
  reject(reason) {
    if (this.myState === MyPromise.PENDING) {
      setTimeout(() => {
        this.myState = MyPromise.REJECTED;
        this.PromiseResult = reason;

        this.onRejectedCallbacks.forEach((c) => {
          c(reason);
        });
      });
    }
  }
  then(onFulFilled, onReject) {
    onFulFilled =
      typeof onFulFilled === "function" ? onFulFilled : (value) => value;
    onReject =
      typeof onReject === "function"
        ? onReject
        : (reason) => {
            throw new Error(reason);
          };
    let promise2 = new MyPromise((resolve, reject) => {
      // 二.3
      if (this.myState === MyPromise.PENDING) {
        this.onFulfilledCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onFulFilled(this.PromiseResult);
              // console.log("🚀 ~ file: promise.js ~ line 83 ~ MyPromise ~ setTimeout ~ x", x)
              resolvePromise(promise2, x, resolve, reject);
            } catch (e) {
              reject(e);
            }
          });
        });
        this.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onReject(this.PromiseResult);
              // console.log("🚀 ~ file: promise.js ~ line 94 ~ MyPromise ~ setTimeout ~ x", x)
              resolvePromise(promise2, x, resolve, reject);
            } catch (e) {
              reject(e);
            }
          });
        });
      }
      if (this.myState === MyPromise.FULFILLED) {
        setTimeout(() => {
          try {
            let x = onFulFilled(this.PromiseResult);
            resolve(promise2, x, resolve, reject);
          } catch (error) {
            reject(error);
          }
        });
      }
      if (this.myState === MyPromise.REJECTED) {
        setTimeout(() => {
          try {
            let x = onReject(this.PromiseResult);
            resolve(promise2, x, resolve, reject);
          } catch (error) {
            reject(error);
          }
        });
      }
    });

    // return this

    return promise2;
  }
}
/**
 * 对resolve()、reject() 进行改造增强 针对resolve()和reject()中不同值情况 进行处理
 * @param  {promise} promise2 promise1.then方法返回的新的promise对象
 * @param  {[type]} x         promise1中onFulfilled或onRejected的返回值
 * @param  {[type]} resolve   promise2的resolve方法
 * @param  {[type]} reject    promise2的reject方法
 */
function resolvePromise(promise2, x, resolve, reject) {
  if (x === promise2) {
    return reject(new TypeError("Chaining cycle detected for promise"));
  }

  // 2.3.2 如果 x 为 Promise ，则使 promise2 接受 x 的状态
  if (x instanceof MyPromise) {
    if (x.myState === MyPromise.PENDING) {
      /**
       * 2.3.2.1 如果 x 处于等待态， promise 需保持为等待态直至 x 被执行或拒绝
       *         注意"直至 x 被执行或拒绝"这句话，
       *         这句话的意思是：x 被执行x，如果执行的时候拿到一个y，还要继续解析y
       */
      x.then((y) => {
        // console.log('yyyyy', y);
        resolvePromise(promise2, y, resolve, reject);
      }, reject);
    } else if (x.myState === MyPromise.FULFILLED) {
      // 2.3.2.2 如果 x 处于执行态，用相同的值执行 promise
      resolve(x.PromiseResult);
    } else if (x.myState === MyPromise.REJECTED) {
      // 2.3.2.3 如果 x 处于拒绝态，用相同的据因拒绝 promise
      reject(x.PromiseResult);
    }
  } else if (x !== null && typeof x === "object" ) {
    var then = x.then;

    /**
     * 2.3.3.3
     * 如果 then 是函数，将 x 作为函数的作用域 this 调用之。
     * 传递两个回调函数作为参数，
     * 第一个参数叫做 `resolvePromise` ，第二个参数叫做 `rejectPromise`
     */
    if (typeof then === "function") {
      // 2.3.3.3.3 如果 resolvePromise 和 rejectPromise 均被调用，或者被同一参数调用了多次，则优先采用首次调用并忽略剩下的调用
      let called = false; // 避免多次调用
      try {
        then.call(
          x,
          // 2.3.3.3.1 如果 resolvePromise 以值 y 为参数被调用，则运行 [[Resolve]](promise, y)
          (y) => {
            if (called) return;
            called = true;
            resolvePromise(promise2, y, resolve, reject);
          },
          // 2.3.3.3.2 如果 rejectPromise 以据因 r 为参数被调用，则以据因 r 拒绝 promise
          (r) => {
            if (called) return;
            called = true;
            reject(r);
          }
        );
      } catch (e) {
        /**
         * 2.3.3.3.4 如果调用 then 方法抛出了异常 e
         * 2.3.3.3.4.1 如果 resolvePromise 或 rejectPromise 已经被调用，则忽略之
         */
        if (called) return;
        called = true;

        /**
         * 2.3.3.3.4.2 否则以 e 为据因拒绝 promise
         */
        reject(e);
      }
    } else {
      // 2.3.3.4 如果 then 不是函数，以 x 为参数执行 promise
      resolve(x);
    }
  } else {
    // 2.3.4 如果 x 不为对象或者函数，以 x 为参数执行 promise
    resolve(x);
  }
}

/* let p = new MyPromise((resolve, reject) => {
  throw new Error("错误消息：Error");
  resolve("成功消息：resolve");
  reject("失败消息：reject");
});

p.then(
  (res) => {
    console.log("🚀 ~ file: promise.js ~ line 52 ~ res", res);
  },
  (reason) => {
    console.log("🚀 ~ file: promise.js ~ line 56 ~ reason", reason);
  }
) */
/* const promise = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve("success");
  }, 1000);
});
promise
  .then((value) => {
    // console.log(1)
    // console.log('resolve', value)

    return new MyPromise((r) => {
      setTimeout(() => {
        console.log(1);
        r(1)
      }, 1000);
    })
  })
  .then((value) => {
    console.log(2);
    console.log("resolve", value);
  })
  .then((value) => {
    console.log(3);
    console.log("resolve", value);
  }); */
