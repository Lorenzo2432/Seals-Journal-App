const mongoose = require('monsgoose')

const Profile = new mongoose.Schema({
firstname: {type:String, trim:true, default:''}, // 'bob, 'bob ', ' bob'
subtype: {type:String, trim:true, default:''},
level: {type:Number, default:0},
attribute: {type:String, trim:true, default:''},
type: {type:String, trim:true, default:''}

})

module.exports = mongoose.model('Profile', Profile)