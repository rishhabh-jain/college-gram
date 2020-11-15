const express = require("express")
const { ensureAuth ,ensureGuest} = require('../middleware/auth.js')
const ensureFilled = require('../middleware/form.js')
const router = express.Router()

router.get('/' , (req, res)=>{
    if (req.user === undefined) {
        // The user is not logged in
        res.json({});
    } else {
        res.json({
            username: req.user
        });
    }
})
module.exports = router