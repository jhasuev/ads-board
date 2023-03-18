export default function ({ $axios }, inject) {
  const api = $axios.create()

  $axios.onResponse(({ data }) => {
    if (!data.status) {
      throw data.data
    }
    return data.data
  })

  $axios.onError((error) => {
    return Promise.reject(error)
  })

  $axios.onResponseError((error) => {
    return Promise.reject(error)
  })

  inject('api', api)
}
