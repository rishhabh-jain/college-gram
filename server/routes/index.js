const express = require("express")
const { ensureAuth ,ensureGuest} = require('../middleware/auth.js')
const ensureFilled = require('../middleware/form.js')
const router = express.Router()

router.get('/' , ensureGuest  , (req, res) => {
    res.render('index');
})

router.get('/welcome' , ensureAuth ,  (req , res )=>{
    res.send('Welcome without the login system')
})

module.exports = router