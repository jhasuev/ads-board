<template>
  <div>
    <h1 class="text-center mb-3">
      {{ $route?.query?.msg }}
    </h1>
    <nuxt-link tag="span" to="/" class="block">
      <PButton
        label="Перейти на главную"
        class="w-full"
      />
    </nuxt-link>
  </div>
</template>

<script>
import PButton from 'primevue/button'
export default {
  name: 'AdSingle',
  components: {
    PButton
  },
  head () {
    return {
      title: this.title
    }
  }
}
</script>
