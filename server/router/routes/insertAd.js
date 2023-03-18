const Ads = require('#app/services/ads.js')
const ads = new Ads()

module.exports = async (req, res) => {
  try {
    const title = String(req.body.title ?? '')
    const content = String(req.body.content ?? '')

    if (!title || !content) {
      throw 'Не все поля заполнены'
    }

    const data = await ads.insertAd({ title, content })

    if (!data) {
      throw 'Что-то пошло не так'
    }

    res.json({ status: true, data })
  } catch (error) {
    res.json({ status: false, data: error.toString() })
  }
}
