<template>
  <div>
    <div>
      <ad-card
        v-bind="{
          title: title,
          content: content,
          full: true,
        }"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdSingle',
  async asyncData ({ $axios, route, redirect }) {
    try {
      const result = await $axios.get('get-ad', {
        params: { id: route.params.ad }
      })
      return { ...result }
    } catch (error) {
      redirect('/error?msg=' + error)
      return {}
    }
  },
  data () {
    return {
      title: '',
      content: ''
    }
  },
  head () {
    return {
      title: this.title
    }
  }
}
</script>
