import mongoose from 'mongoose'

const  Schema = mongoose.Schema;
export const ContactsSchema = new Schema({
    firstName: {
        type: String,
        required: 'Enter First Name'
    },
    lastName: {
        type: String,
        required: 'Enter Last Name'
    },
    email: {
        type: String,
    },
    Company: {
        type: String,
    },
    phone: {
        type: Number
    },
    created_date: {
        type: Date,
        default: Date.now
    }

});