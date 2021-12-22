import RouterLink from "./router-link";
import RouterView from "./router-view";
let Vue;
class VueRouter {
  constructor(options) {
    this.$options = options;

    const initial = window.location.hash.slice(1) || '/'
    // Vue.util.defineReactive(this, 'current', initial)
    this.current = initial
    Vue.util.defineReactive(this, 'matched', [])
    this.match()


    window.addEventListener('hashchange', this.onHashChange.bind(this))
    window.addEventListener('load', this.onHashChange.bind(this))

    // this.$RouterMap = {}
    // this.$options.routes.forEach(x => {
    //   this.$RouterMap[x.path] = x
    // })
  }
  match (routes) {
    routes = routes || this.$options.routes

    for (const route of routes) {
      if (route.path === '/' && this.current === '/') {
        this.matched.push(route)
        return
      }
      if (route.path !== '/' && this.current.includes(route.path)) {
        this.matched.push(route)
        if (route.children) this.match(route.children)
        return
      }
    }
  }
  onHashChange() { 
    this.current = window.location.hash.slice(1)

    this.matched = []
    this.match()
  }
}

VueRouter.install = function (_Vue) {
  Vue = _Vue;
  Vue.mixin({
    beforeCreate() {
      // 只有根组件拥有router选项
      if (this.$options.router) {
        // vm.$router
        Vue.prototype.$router = this.$options.router;
      }
    },
  });
  Vue.component("router-link", RouterLink);
  Vue.component("router-view", RouterView);
};

export default VueRouter;
