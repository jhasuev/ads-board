<template>
  <Card>
    <template #title>
      <div class="title">
        {{ full ? title : title.substring(0, 100) }}
      </div>
    </template>
    <template #content>
      <div
        :class="{
          'short-text': !full,
          'full-text': full
        }"
      >{{ content }}</div>
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

.title {
  overflow-wrap: break-word;
}

.full-text {
  white-space: pre-line;
  overflow-wrap: break-word;
}

.short-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

</style>
