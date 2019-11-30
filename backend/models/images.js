import mongoose, { Schema } from 'mongoose';

const { ObjectId } = Schem.Types;

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

export const model = mongoose.model('Images', 'ImagesSchema');