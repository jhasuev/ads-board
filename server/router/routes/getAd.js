const Ads = require('#app/services/ads.js')
const ads = new Ads()

module.exports = async (req, res) => {
  try {
    const id = req.query.id

    if (!+id) {
      throw 'Неверный ID'
    }

    const data = await ads.getAd(id)

    if (!data) {
      throw 'Нет данных'
    }

    res.json({ status: true, data })
  } catch (error) {
    res.json({ status: false, data: error.toString() })
  }
}
