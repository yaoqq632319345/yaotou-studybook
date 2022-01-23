<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->

    <KTable :data="tableData">
      <k-table-column
        prop="date"
        label="日期"
      ></k-table-column>
      <k-table-column
        prop="name"
        label="姓名"
      ></k-table-column>
      <k-table-column
        prop="address"
        label="地址"
      ></k-table-column>
      <k-table-column label="操作">
        <template v-slot:default="scope">
          <button @click="handleEdit(scope.$index, scope.row)">编辑</button>
        </template>
      </k-table-column>
    </KTable>
  </div>
</template>
<script>
import KTable from '@/components/table'
import KTableColumn from '@/components/tableCol'
export default {
  components: {
    KTableColumn,
    KTable
  },
  data () {
    return {
      tableData: [...([1, 2, 3].map(x => {
        return {
          date: `2000-10-1${x}`,
          name: `王大锤${x}`,
          address: `地址1${x}`
        }
      }))]
    }
  },
  methods: {
    handleEdit () {

    }
  },
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
