const express = require("express")
const { ensureAuth ,ensureGuest} = require('../middleware/auth.js')
const ensureNotFilled = require('../middleware/form.js')
const FirstForm = require('../models/FirstForm')
const router = express.Router()

router.get('/' , ensureNotFilled , ensureAuth ,  (req , res) => {
  res.render('firstform');
})


router.post('/post' , async (req, res) => {
    try {
        //   
        //req.body.user = req.user.id
        await FirstForm.create(req.body)
          res.redirect('/firstform')
        } catch (err) {
          console.error(err)
        //   res.render('error/500')
        }
} )
module.exports = router