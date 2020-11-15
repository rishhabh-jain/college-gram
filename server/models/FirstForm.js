const mongoose = require('mongoose')

const FirstForm = new mongoose.Schema({
    user: {
        type: String,
        required : true ,
    },
    college : {
        type : String , 
        required : true 
    },
    course : {
        type : String , 
        enum : [ 'BCA' , 'BBA' , 'MCA', 'BJMC' , 'BTECH']
    },
    skills: {
        type : String 
    },
    intrested : {
        type : String, 
        required : true 
    },
    known : {
        type : String 
    }
})

module.exports = mongoose.model('FirstForm', FirstForm)