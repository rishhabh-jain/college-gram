const express = require("express")
const { ensureAuth ,ensureGuest} = require('../middleware/auth.js')
const ensureFilled = require('../middleware/ensureFilled.js')
const router = express.Router()

router.get('/' , ensureAuth , ensureFilled,  (req, res)=>{
    res.send('home page ');
})

module.exports = router