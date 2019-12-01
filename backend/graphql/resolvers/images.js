import { Images, Likes } from '../../models';

export default {
    images: async (parent, { input }) => {
        let { limit } = input;
        let images = limit ? await Images.find().limit(limit) : await Images.find();
        return images.map(async image => {
            let imgLikes = image._doc.likes.map(async like => await Likes.findById(like));
            return {
                ...image._doc,
                likes: imgLikes
            };
        });
    }
};