<template>
  <div>
    <JsonTable
      :searchColumns="searchColumns"
      :tableColumns="tableColumns"
      :service="localService"
      :options="tabOptions"
      @onformchange="handlechange"
      @rowselectchange="handleRowSelectChange"
    >
      <template v-slot:under-search-slot>
        <div>
          <el-button size="mini" type="primary">刷新</el-button>
        </div>
      </template>
      <template v-slot:op="scope">
<!--        <el-button type="danger" size="mini" @click="handleDelete(scope)">删除</el-button>-->
        <el-button type="primary" size="mini" @click="handleCheck(scope)">修改</el-button>
      </template>
    </JsonTable>
  </div>
</template>

<script>
import {getCurrentInstance, reactive} from "vue";
import {localService, options, searchColumns, tableColumns} from "@/components/JsonTable/storeProConfig";
import JsonTable from "@/components/JsonTable";
import request from "@/request/index";
export default {
  name: "ProStore",
  setup(props, {emit}) {
    let {ctx} = getCurrentInstance();
    let tabOptions = reactive(options);
    function handlechange(params) {
      console.log(params);
    }
    function handleCheck(val) {
      console.log(val, 'check');
    }
    function handleDelete(val) {
      console.log(val, 'delete');
      ctx.$confirm('此操作将永久删除该文件, 是否继续? 确定删除后更新列表', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        tabOptions.startUpdate = Date.now(); // 更新列表
        ctx.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(() => {
        ctx.$message({
          type: 'info',
          message: '已取消删除'
        });
      });

    }
    function handleRowSelectChange(val) {
      console.log(val, 'selectList');
    }
    return {
      searchColumns,
      tableColumns,
      handlechange,
      localService,
      tabOptions,
      handleCheck,
      handleDelete,
      handleRowSelectChange
    };
  },
  components: {
    JsonTable
  }
};
</script>

<style scoped>

</style>
