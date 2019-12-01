import { Images, Likes } from '../../models';

export default {
    likes: async () => await Likes.find().populate('image'),
    
    like: async (parent, { input }) => {
        const { id } = input;
        return await Likes.findById(id).populate('image');
    }
};
