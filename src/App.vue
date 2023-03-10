<template>
  <router-view/>
</template>

<script setup>
  import {useRouter} from "vue-router";
  import {isMobile} from "./utils/isMobile";

  const router = useRouter()
  if (isMobile()) {
    router.replace ("/mobile")
  }
  else {
    router.replace ("/")
  }
</script>

<script>
export default {
  name: "App"
}
</script>

<style scoped lang="less">

</style>