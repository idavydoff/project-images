import { Images, ImageClasses, Likes } from '../../models';

export default {
    images: async (parent, args) => {
        let { limit } = args.input;
        let images = limit ? await Images.find().limit(limit) : await Images.find();
        return images.map(async image => {
            let thisClass = await ImageClasses.findById(image.class);
            let likes = image._doc.likes.map(async like => {
                return await Likes.findById(like);
            });
            return {
                ...image._doc,
                class: thisClass,
                likes: likes
            };
        });
    }
};