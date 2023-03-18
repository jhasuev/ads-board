<template>
  <div>
    <template v-if="ads.length">
      <div v-for="ad, i in ads" :key="i" class="mb-3 shadow-1">
        <ad-card v-bind="ad" />
      </div>
    </template>
    <template v-else-if="count">
      <h3 class="text-center">Нет такой страницы</h3>
    </template>

    <paginator :first="first" :rows="limit" :total-records="count" @page="onPage" />
  </div>
</template>

<script>
import Paginator from 'primevue/paginator'
const limit = 3
const getPageParam = (page) => {
  const start = (page - 1) * limit
  return { start, end: start + limit - 1 }
}

export default {
  name: 'IndexPage',
  components: {
    Paginator
  },
  async asyncData ({ $axios, route }) {
    const params = getPageParam(route?.query?.page ?? 1)

    try {
      const result = await $axios.get('get-ads', { params })

      return { ads: result.list, count: result.count }
    } catch (e) {
      return { ads: [], count: 0 }
    }
  },
  data () {
    return {
      ads: [
        // { title: 'Куплю диски для игры PS1', content: 'Куплю диски для игры PS1 (vigilante 8, syphon filter, Tekken 3)'.repeat(2) },
        // { title: 'Продам диски для игры PS1', content: 'Продам диски для игры PS1 (vigilante 8, syphon filter, Tekken 3)'.repeat(2) },
        // { title: 'Ищу работу программистом в Чехословаки', content: 'Я миддл front-end разработчик на VueJS...'.repeat(3) },
        // { title: 'Ищем разработчика VueJS в Чехословаки', content: 'Мы - супер-пупер компашка, которая оплачивает работу деньгами...'.repeat(2) }
      ],
      first: 0,
      limit
    }
  },
  head () {
    return {
      title: 'Все объявления'
    }
  },
  mounted () {
    this.first = ((this.$route?.query?.page ?? 1) - 1) * this.limit
  },
  methods: {
    onPage (page) {
      this.$router.replace({ query: { page: page.page + 1 } }).then(() => {
        this.$nuxt.refresh()
      })
    }
  }
}
</script>
