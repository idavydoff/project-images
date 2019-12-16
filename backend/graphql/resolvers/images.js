import { Images, Likes } from '../../models';

export default {
    images: async (parent, { input }) => {
        let limit;
        if (input) {
            limit = input.limit;
        }
        else {
            limit = null;
        }
        return limit ? await Images.find().populate('likes').limit(limit) : await Images.find().populate('likes');
    },
    
    image: async (parent, { input }) => {
        let { id } = input;
        return await Images.findById(id).populate('likes');
    }
};