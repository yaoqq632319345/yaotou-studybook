export default {
  render(h) {
    this.$vnode.data.routerView = true
    let depth = 0

    let parent = this.$parent
    while (parent) {
      let vnodeData = parent.$vnode && parent.$vnode.data
      if (vnodeData && vnodeData.routerView) depth++

      parent = parent.$parent
    }
    // const { $RouterMap, current } = this.$router;
    // const component = $RouterMap[current] ? $RouterMap[current].component : null;
    let component = null
    let route = this.$router.matched[depth]
    if (route) {
      component = route.component
    }
    return h(component);
  },
};
