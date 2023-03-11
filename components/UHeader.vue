<template>
  <div class="flex justify-content-end gap-3">
    <nuxt-link
      v-for="link in links"
      v-slot="{ isExactActive, href, navigate }"
      :key="link.to"
      :to="link.to"
    >
      <PButton
        :class="isExactActive ? 'p-button-primary' : 'p-button-link'"
        :disabled="isExactActive"
        v-bind="link"
        @click="navigate(href)"
      />
    </nuxt-link>
  </div>
</template>

<script>
import PButton from 'primevue/button'
export default {
  name: 'TopMenu',
  components: {
    PButton
  },
  data () {
    return {
      links: [
        { to: '/', label: 'Все объявления' },
        { to: '/create', label: 'Добавить объявление' }
      ]
    }
  }
}
</script>
