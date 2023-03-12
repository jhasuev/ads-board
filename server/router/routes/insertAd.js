const Ads = require('#app/services/ads.js')
const ads = new Ads()

module.exports = async (req, res) => {
  try {
    res.json({ status: true, data: await ads.getAds() })
  } catch (error) {
    res.json({ status: false, data: error.toString() })
  }
}