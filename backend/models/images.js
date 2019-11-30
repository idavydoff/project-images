import mongoose, { Schema } from 'mongoose';

const { ObjectId } = Schema.Types;

const ImagesSchema = new Schema({
    path: String,
    likes: [{ type: ObjectId, ref: 'Likes' }],
    class: {
        type: ObjectId,
        ref: 'ImageClasses'
    },
    date: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model('Images', ImagesSchema);