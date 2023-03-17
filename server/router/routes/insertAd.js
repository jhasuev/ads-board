const Ads = require('#app/services/ads.js')
const ads = new Ads()

module.exports = async (req, res) => {
  try {
    const title = String(req.body.title ?? '')
    const content = String(req.body.content ?? '')

    if (!title || !content) {
      throw new Error('не все поля заполнены')
    }

    res.json({ status: true, data: await ads.insertAd({ title, content }) })
  } catch (error) {
    res.json({ status: false, data: error.toString() })
  }
}
