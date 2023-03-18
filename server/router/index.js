const router = require('express').Router()

router.get('/api/get-ads', require('./routes/getAds'))
router.get('/api/get-ad', require('./routes/getAd'))
router.post('/api/insert-ad', require('./routes/insertAd'))

module.exports = router
