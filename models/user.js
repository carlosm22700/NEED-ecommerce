const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const SALT_ROUNDS = 6;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        required: true,
        trim: true
    },
    password: {
        type: String,
        trim: true,
        minLength: 3,
        required: true
    }
}, { 
    timestamps: true,
    toJSON: {
        transform: function(doc, ret) {
            delete ret.password;
            return ret;
        }
    } 
});

userSchema.pre('save', async function(next) {
    if(!this.isModified('password')) return next(); // get us outta here; don't hash the password again!
    this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
    return next(); // return the modified version of the document with the hashed/salted password to be saved to the database
});



module.exports = mongoose.model('User', userSchema);