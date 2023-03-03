<template>
  <el-container>
    <el-header style="text-align:center">
      <TheHeader></TheHeader>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
    <el-footer>
      <TheFooter></TheFooter>
    </el-footer>
  </el-container>
</template>

<script setup>

import TheHeader from "../components/the-header.vue";
import TheFooter from "../components/the-footer.vue";
</script>

<script>
export default {
  name: "Index"
}
</script>

<style scoped lang="less">

</style>