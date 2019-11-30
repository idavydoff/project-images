import mongoose, { Schema } from 'mongoose';

const imageClassesSchema = new Schema({
    emoji: String
});

export default mongoose.model('ImageClasses', imageClassesSchema);