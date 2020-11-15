const FirstForm = require('../models/FirstForm')

const ensureNotFilled = async function (req, res, next)  {
  try{
   let user = await FirstForm.findOne({ user : req.user._id })
   if (!user) {
     return next()
   } else {
     res.redirect('/home')
   }
  }
  catch(err){
     console.log(err)
  }
}
module.exports = ensureNotFilled
// module.exports = {
//     ensureFilled: async function (req, res, next)  {
//        try{
//         let user = await FirstForm.findOne({ user : req.user._id })
//         if (user) {
//           return next()
//         } else {
//           res.redirect('/authentication/notdone')
//         }
//        }
//        catch(err){
//           console.log(err)
//        }
//     },
//     ensureNotFilled: function (req, res, next) {
//       let user = await FirstForm.findOne({ user : req.user._id })
//       if (!user) {
//         return next();
//       } else {
//         res.redirect('/authentication/done');
//       }
//     },
//   }