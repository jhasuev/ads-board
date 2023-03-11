<template>
  <div>
    <div class="field">
      <div class="text-sm mb-2">Название объявлении</div>
      <InputText v-model="title" class="w-full" />
    </div>
    <div class="field">
      <div class="text-sm mb-2">Текст объявлении</div>
      <PTextarea v-model="content" rows="4" auto-resize full class="w-full" />
    </div>
  </div>
</template>

<script>
import InputText from 'primevue/inputtext'
import PTextarea from 'primevue/textarea'

export default {
  name: 'CreatePage',
  components: {
    InputText,
    PTextarea
  },
  data () {
    return {
      title: '',
      content: ''
    }
  },
  head () {
    return {
      title: 'Добавить объявление'
    }
  }
}
</script>

<style scoped>

.field {
  margin-bottom: 15px;
}

.field:last-child {
  margin-bottom: 0;
}

</style>
