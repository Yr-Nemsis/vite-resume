<template>
  <el-container>
    <el-main>

      <el-row>
        <home-intro></home-intro>
      </el-row>

      <el-row>
        <home-hero></home-hero>
      </el-row>

    </el-main>
  </el-container>
</template>

<script setup>

import HomeHero from "../components/home-hero.vue";
import HomeIntro from "../components/home-intro.vue";
</script>

<script>
export default {
  name: "Home"
}
</script>

<style scoped lang="less">

</style>