const express= require('express');
const passport = require('passport')
const router = express.Router()
const { ensureAuth ,ensureGuest} = require('../middleware/auth.js')
const ensureFilled = require('../middleware/form.js')

router.get('/google' , passport.authenticate('google', { scope: ['profile'] }))

router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/auth/login/failed' }),
    (req, res) => {
      res.redirect('http://localhost:3000/')
    }  
)
router.get("/login/success", (req, res) => {
  if (req.user) {
    res.json({
      success: true,
      message: "user has successfully authenticated",
      user: req.user
    });
  }
  else{
    res.send('not authenticated')
  }
});

router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "user failed to authenticate."
  });
});

router.get('/logout', (req, res) => {
    req.logout()
    res.redirect('http://localhost:3000');
})
  
module.exports = router