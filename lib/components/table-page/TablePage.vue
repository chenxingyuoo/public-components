<!-- 该表格-Page 公共组件是针对后端有分页的接口 -->
<!-- 可以根据iView的Table和Page组件的API自行扩展完善公共组件功能-->
<template>
  <div class="table-page-container">
    <div class="table-wrap">
      <Table
        border
        :columns="columns"
        :data="tableData"
        :loading="tableLoading"
        ref="table-page"
        :no-data-text="tableTips"
        @on-selection-change="handleSelectChange"
        @on-sort-change="handleSort">
      </Table>
    </div>
    <div class="page-wrap">
      <Page
        :current.sync='pageNo'
        :total='pageTotal'
        :page-size='pageSize'
        show-total
        show-sizer
        show-elevator
        placement='top'
        @on-page-size-change='handlePageSizeChange'
        @on-change='handlePageChange'>
      </Page>
      <slot name="select-all-button"></slot>
      <slot name="batch-button"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'tablePage',
  /**
   * @prop {columns} 调用该组件需要传表格的各列数据的配置信息，
   * @prop {tableData} 表格需要的数据
   * @prop {query} 调用获取表格数据接口传给后端的查询参数对象
   * @prop {tableLoading} 表格的loading状态
   * @prop {tableTips} 表格的提示文本
   * @prop {pageTotal} 调用接口获取到的数据总数
   * @prop {resetPageNo} 重置页码字段（真假值无实际意义，只是为了watch其是否变化，变化则说明filter的query改变，pageNo重置为1）
   */
  props: {
    columns: {
      type: Array,
    },
    tableData: {
      type: Array,
    },
    query: {
      type: Object,
      default: () => {
        return {}
      }
    },
    tableLoading: {
      type: Boolean
    },
    tableTips: {
      type: String
    },
    pageTotal: {
      type: Number
    },
    resetPageNo: { // 起到同步页码的作用。当filter组件的query改变时，页码pageNo须置为1，
      type: Boolean
    }
  },
  data () {
    return {
      pageSize: 10,
      pageNo: 1,
    }
  },
  watch: {
    // filter的query条件改变，就会重置页码
    resetPageNo () {
      this.pageNo = 1
    }
  },
  created () {
  },
  methods: {
    // 页码改变
    handlePageChange (pageNo) {
      // 构造查询参数
      let params = Object.assign({}, this.query, { start: (pageNo - 1) * this.pageSize })

      // 通知父组件更新数据
      this.$emit('pageChange', params)
      this.pageNo = pageNo
    },
    // 显示每页数据数目改变
    handlePageSizeChange (pageSize) {
      // 构造查询参数
      let params = Object.assign({}, this.query, { start: 0, limit: pageSize })

      // 通知父组件更新数据
      this.$emit('pageChange', params)
      this.pageSize = pageSize
    },
    // 选中表格数据
    handleSelectChange (selections) {
      this.$emit('select', selections)
    },
    /**
     * @param {Object} obj iview内部调用排序函数后返回的对象
     * @param {Array} obj.column 当前列数据
     * @param {String} obj.key 排列依据关键字
     * @param {String} obj.order 排序的顺序，asc(升序) / desc(降序)
    */
    // 表格数据排序
    handleSort (obj) {
      this.$emit('sort', obj)
    },
  }
}
</script>

<style lang="scss" scoped>
.table-page-container {
  .page-wrap {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }
}
</style>
