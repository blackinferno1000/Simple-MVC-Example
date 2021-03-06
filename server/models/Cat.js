const mongoose = require('mongoose');

let CatModel = {};

const catSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    bedsOwned: {
        type: Number,
        min: 0,
        required: true,
    },
    createdDate: {
        type: Date,
        default: Date.now,
    }
});

catSchema.statics.findByName = (name, callback) => {
    return CatModel.findOne({name}, callback);
};

CatModel = mongoose.model('Cat', catSchema);

module.exports = {
    CatModel,
    catSchema
}

