<template>
  <div class="default-layout">
    <u-header class="mb-4  border-bottom-1 border-black-alpha-10 py-2" />
    <nuxt />
  </div>
</template>

<script>

export default {
  name: 'DefaultLayout'
}
</script>

<style scoped>

.default-layout {
  max-width: 768px;
  margin: 0 auto;
}

</style>
