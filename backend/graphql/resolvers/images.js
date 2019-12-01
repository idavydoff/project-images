import { Images, Likes } from '../../models';

export default {
    images: async (parent, { input }) => {
        let { limit } = input;
        return limit ? await Images.find().populate('likes').limit(limit) : await Images.find().populate('likes');
    },
    
    image: async (parent, { input }) => {
        let { id } = input;
        return await Images.findById(id).populate('likes');
    }
};