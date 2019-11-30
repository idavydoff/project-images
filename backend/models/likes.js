import mongoose, { Schema } from 'mongoose';

const { ObjectId } = Schem.Types;

const likesSchema = new Schema({
    ip: String,
    image: {
        type: ObjectId,
        ref: 'Images' 
    }
});

export const model = mongoose.model('Likes', 'likesSchema');