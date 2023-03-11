<template>
  <Card>
    <template #title>
      {{ title }}
    </template>
    <template #content>
      <div :class="{ 'short-text': !full }">
        {{ content }}
      </div>
    </template>
    <template v-if="!full" #footer>
      <div class="flex">
        <nuxt-link
          :to="'ads/' + id"
          tag="span"
          class="ml-auto"
        >
          <PButton label="Read more" class="p-button-link" />
        </nuxt-link>
      </div>
    </template>
  </Card>
</template>

<script>
import Card from 'primevue/card'
import PButton from 'primevue/button'

export default {
  name: 'AdCard',
  components: {
    Card,
    PButton
  },
  props: {
    title: { type: String, default: '' },
    content: { type: String, default: '' },
    full: { type: Boolean, default: false },
    id: { type: [String, Number], default: -1 }
  }
}
</script>

<style scoped>
.short-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
