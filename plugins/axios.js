export default function ({ $axios }, inject) {
  const api = $axios.create()

  $axios.onResponse(({ data }) => {
    if (!data.status) {
      throw data.data
    }
    return data.data
  })

  $axios.onError((error) => {
    return new Error(error)
  })

  inject('api', api)
}
