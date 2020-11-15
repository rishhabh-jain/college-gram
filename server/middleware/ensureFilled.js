const FirstForm = require('../models/FirstForm')

const ensureFilled = async function (req, res, next)  {
  try{
   let user = await FirstForm.findOne({ user : req.user._id })
   if (user) {
     return next()
   } else {
     res.redirect('https://www.google.com')
   }
  }
  catch(err){
     console.log(err)
  }
}
module.exports = ensureFilled