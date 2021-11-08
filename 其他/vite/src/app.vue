<template>
  <div>
    <h1 @click="add">{{count}}</h1>
  </div>
</template>

<script>

export default {
  data () {
    return {
      count: 1
    }
  },
  methods: {
    add () {
      this.count ++
    }
  },
}
</script>
