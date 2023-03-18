const { createClient } = require('redis')
const ADS_NAME = 'ADS'
const AD_ID_NAME = 'AD_ID'

module.exports = class Ads {
  constructor () {
    this.client = createClient()
    this.client.connect().then(() => {
      this.init()
    })
  }

  async init () {
    const hasAlreadyId = await this.client.get(AD_ID_NAME)
    if (!hasAlreadyId) {
      await this.client.set(AD_ID_NAME, 100)
    }
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

  async getAdId () {
    return await this.client.incr(AD_ID_NAME)
  }

  async insertAd (ad) {
    const id = await this.getAdId()
    await this.client.set(this.getAdKey(id), JSON.stringify({ ...ad, id }))
    await this.client.LPUSH(ADS_NAME, String(id))

    return id
  }
}
