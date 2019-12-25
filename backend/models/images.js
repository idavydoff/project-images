import mongoose, { Schema } from 'mongoose';

const { ObjectId } = Schema.Types;

const ImagesSchema = new Schema({
    path: String,
    likes: {
        type: Number,
        default: 0
    },
    class: String,
    date: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model('Images', ImagesSchema);