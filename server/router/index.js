const router = require('express').Router()

router.get('/api/get-ads', require('./routes/getAds'))
router.post('/api/insert-ad', require('./routes/insertAd'))

module.exports = router
