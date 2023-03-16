const { createClient } = require('redis')
const ADS_NAME = 'ads'

module.exports = class Ads {
  constructor () {
    this.client = createClient()
    this.client.connect()
  }

  async getAds (start = 0, stop = -1) {
    return {
      list: await this.client.LRANGE(ADS_NAME, start, stop),
      count: await this.getAdsCount()
    }
  }

  async getAdsCount () {
    return await this.client.LLEN(ADS_NAME)
  }

  async insertAd (add) {
    const id = await this.getAdsCount() + 1
    return await this.client.LSET(ADS_NAME, id, { ...add, id })
  }
}
