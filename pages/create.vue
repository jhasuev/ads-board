<template>
  <form @submit.prevent="onSubmit">
    <div class="field">
      <div class="text-sm mb-2">Название объявлении</div>
      <InputText v-model="title" class="w-full" />
    </div>
    <div class="field">
      <div class="text-sm mb-2">Текст объявлении</div>
      <PTextarea v-model="content" rows="4" auto-resize full class="w-full" />
    </div>
    <div v-if="!valid" class="field">
      <InlineMessage severity="error">Заполните все поля</InlineMessage>
    </div>
    <div class="field">
      <PButton
        type="submit"
        class="p-button-primary"
        label="Добавить"
      />
    </div>
  </form>
</template>

<script>
import InputText from 'primevue/inputtext'
import PTextarea from 'primevue/textarea'
import InlineMessage from 'primevue/inlinemessage'
import PButton from 'primevue/button'

export default {
  name: 'CreatePage',
  components: {
    InputText,
    PTextarea,
    InlineMessage,
    PButton
  },
  data () {
    return {
      title: 'sasdasdsad',
      content: 'content11111111111',
      valid: true
    }
  },
  head () {
    return {
      title: 'Добавить объявление'
    }
  },
  methods: {
    async onSubmit () {
      const ad = {
        title: this.title,
        content: this.content
      }

      this.valid = ad.title.trim() && ad.content.trim()

      if (!this.valid) {
        return null
      }

      const result = await this.$axios.post('insert-ad', ad)

      if (result) {
        this.$router.push('ads/' + result)
      }
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
