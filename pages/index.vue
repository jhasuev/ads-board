<template>
  <div>
    ads: {{ ads }}
    <div v-for="ad, i in ads" :key="i" class="mb-3 shadow-1">
      <ad-card v-bind="ad" />
    </div>

    <paginator :rows="10" :total-records="1000" />
  </div>
</template>

<script>
import Paginator from 'primevue/paginator'
export default {
  name: 'IndexPage',
  components: {
    Paginator
  },
  async asyncData ({ $axios }) {
    const result = await $axios.get('get-ads', {})
    console.log('result', result)

    return { ads: result.list }
  },
  data () {
    return {
      ads: [
        { title: 'Куплю диски для игры PS1', content: 'Куплю диски для игры PS1 (vigilante 8, syphon filter, Tekken 3)'.repeat(2) },
        { title: 'Продам диски для игры PS1', content: 'Продам диски для игры PS1 (vigilante 8, syphon filter, Tekken 3)'.repeat(2) },
        { title: 'Ищу работу программистом в Чехословаки', content: 'Я миддл front-end разработчик на VueJS...'.repeat(3) },
        { title: 'Ищем разработчика VueJS в Чехословаки', content: 'Мы - супер-пупер компашка, которая оплачивает работу деньгами...'.repeat(2) }
      ]
    }
  },
  head () {
    return {
      title: 'Все объявления'
    }
  }
}
</script>
