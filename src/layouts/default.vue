<template>
  <div class="container">
    <CommonHeader/>
    <div class="mx-3">
      <slot/>
    </div>
    <CommonFooter/>
  </div>
</template>

<script>
export default {
  name: "default"
}
</script>

<style scoped>

</style>