const { createClient } = require('redis')
const ADS_NAME = 'users'

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
    return await this.client.LPUSH(ADS_NAME, add)
  }
}
