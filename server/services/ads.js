const { createClient } = require('redis')
const ADS_NAME = 'ADS'

module.exports = class Ads {
  constructor () {
    this.client = createClient()
    this.client.connect()
  }

  async getAds (start = 0, stop = -1) {
    let list = await this.client.LRANGE(ADS_NAME, start, stop)

    list = await Promise.all(
      list.map(id => this.client.get(this.getAdKey(id)))
    )

    return {
      list: list.map(json => JSON.parse(json)),
      count: await this.getAdsCount()
    }
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
    return await this.client.RPUSH(ADS_NAME, String(id))
  }
}
