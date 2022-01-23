/* <table>
    <thead>
      <tr>
        <td
          v-for="item in thead"
          :key="item.label"
        >
          {{item.label}}
        </td>
      </tr>
    </thead>

    <tbody>
      <tr
        v-for="(row, i) in data"
        :key="i"
      >
        <td
          v-for="col, j in thead"
          :key="j"
        >
          {{row[col.prop]}}
        </td>
      </tr>
    </tbody>
  </table>
*/

<script>
export default {
  name: 'KTable',
  props: {
    data: {
      type: Array,
      default () {
        return []
      }
    }
  },
  computed: {
    tableData () {
      return this.data
    },
    thead () {
      // console.log(this.$slots);
      const children = this.$slots.default

      return children.map(x => {
        const { attrs, scopedSlots } = x.data
        const col = {...attrs}
        if (scopedSlots) {
          col.renderCol = (row, $index) => <div>{ scopedSlots.default({ row, $index }) }</div>
        }
        return col
      })
    }
  },
  render () {
    console.log(this.$slots);
    return (
      <table>
        <thead>
          <tr>
            {
              this.thead.map(x => (
                <td key={x.label}>
                  {x.label}
                </td>
              ))
            }
          </tr>
        </thead>

        <tbody>
          {
            this.tableData.map((x, i) => (
              <tr key={i}>
                {
                  this.thead.map((k, j) => (
                    <td key={j}>
                      { k.renderCol ? k.renderCol() : x[k.prop] }
                    </td>
                  ))
                }
              </tr>
            ))
          }
        </tbody>
      </table>
    )
  }
}
</script>

<style lang="scss" scoped>
</style>