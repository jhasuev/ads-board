<template>
  <div>
    <div>
      <ad-card
        v-bind="{
          title: 'Куплю диски для игры PS1',
          content: 'Куплю диски для игры PS1 (vigilante 8, syphon filter, Tekken 3)'.repeat(10),
          full: true,
        }"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdSingle',
  head () {
    return {
      title: 'Куплю диски для игры PS1'
    }
  }
}
</script>
