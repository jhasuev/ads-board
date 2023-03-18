const { createClient } = require('redis')
const ADS_NAME = 'ADS'

module.exports = class Ads {
  constructor () {
    this.client = createClient()
    this.client.connect()
  }

  async getAds (start = 0, end = -1) {
    let list = await this.client.LRANGE(ADS_NAME, start, end)

    list = await Promise.all(
      list.map(id => this.getAd(id))
    )

    return {
      list,
      count: await this.getAdsCount()
    }
  }

  async getAd (id) {
    const ad = await this.client.get(this.getAdKey(id))

    if (ad) {
      return JSON.parse(ad)
    }

    return null
  }

  async getAdsCount () {
    return await this.client.LLEN(ADS_NAME)
  }

  getAdKey (id) {
    return `${ADS_NAME}:${id}`
  }

  async insertAd (ad) {
    const id = await this.getAdsCount() + 1
    await this.client.set(this.getAdKey(id), JSON.stringify({ ...ad, id }))
    // TODO заменить RPUSH на LPUSH ?
    return await this.client.RPUSH(ADS_NAME, String(id))
  }
}
