import mongoose, { Schema } from 'mongoose';

const { ObjectId } = Schema.Types;

const likesSchema = new Schema({
    ip: String,
    image: {
        type: ObjectId,
        ref: 'Images' 
    }
});

export default mongoose.model('Likes', likesSchema);