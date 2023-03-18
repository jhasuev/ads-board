const Ads = require('#app/services/ads.js')
const ads = new Ads()

module.exports = async (req, res) => {
  const start = +req.query.start
  const end = +req.query.end

  if (!Number.isInteger(start) || !Number.isInteger(end)) {
    throw 'Не верные параметры'
  }

  const data = await ads.getAds(start, end)

  if (!data) {
    throw 'Данных нет'
  }

  try {
    res.json({ status: true, data })
  } catch (error) {
    res.json({ status: false, data: error.toString() })
  }
}
