import mongoose, { Schema } from 'mongoose';

const imageClassesSchema = new Schema({
    emoji: String
});

export const model = mongoose.model('ImageClasses', 'imageClassesSchema');