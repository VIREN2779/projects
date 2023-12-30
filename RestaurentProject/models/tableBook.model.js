const mongoose = require("mongoose");

var tableBookSchema = new mongoose.Schema({
    day: {
        type : String
    },
    hours: {
        type : Number
    },
    fullName: {  
        type : String
    },
    phoneNumber: {
        type : Number
    },
    howManyPersons:{
        type : Number
    }
});

mongoose.model('tableBookDetail' , tableBookSchema);