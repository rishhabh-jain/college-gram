const GoogleStrategy = require('passport-google-oauth20').Strategy
const mongoose = require('mongoose')
const User = require('../models/Users')

module.exports = function (passport){
    passport.use(
        new GoogleStrategy(
            {
              clientID: '676159018096-17si6figtpljv74p0kme39orvrqf6dl5.apps.googleusercontent.com',
              clientSecret: 'Hdl9k0n9IBxtMjAuIC4PbL9G',
              callbackURL: '/auth/google/callback',
            },
            async (accessToken, refreshToken, profile, done) => {
                const newUser = {
                  googleId: profile.id,
                  displayName: profile.displayName,
                  firstName: profile.name.givenName,
                  lastName: profile.name.familyName,
                  image: profile.photos[0].value,
                }
                console.log(accessToken)
                try {
                  let user = await User.findOne({ googleId: profile.id })
        
                  if (user) {
                    done(null, user)
                  } else {
                    user = await User.create(newUser)
                    done(null, user)
                  }
                } catch (err) {
                  console.error(err)
                }
              }
        )
    )  
    passport.serializeUser((user, done) => {
        done(null, user.id)
    })
    
    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => done(err, user))
    })  
}









