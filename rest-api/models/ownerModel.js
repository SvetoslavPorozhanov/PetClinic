const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const ownerSchema = new mongoose.Schema({
    tel: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    fullName: {
        type: String,
        required: true,
        unique: true,
        minlength: [5, 'Fullname should be at least 5 characters'],
        validate: {
            validator: function (v) {
                return /[a-zA-Z0-9]+/g.test(v);
            },
            message: props => `${props.value} must contains only latin letters and digits!`
        },
    },
    imageUrl: {
        type: String,
        required: true,
        unique: true
    },
    pets: [{
        type: ObjectId,
        ref: "Pet"
    }]
}, { timestamps: { createdAt: 'created_at' } });

module.exports = mongoose.model('Owner', ownerSchema);
