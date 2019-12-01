import { Images } from '../../models';

export default {
    iclasses: async (parent) => {
        let allImages = await Images.find();
        let classes = [...new Set(allImages.map(image => image.class))];
        let quantity = {};
        let mainImages = {}
        for (let i = 0; i < classes.length; i++) {
            quantity[classes[i]] = 0;
            mainImages[classes[i]] = {likes: 0};
        }
        for (let i = 0; i < allImages.length; i++) {
            quantity[allImages[i].class] += 1;
            if (allImages[i].likes.length > mainImages[allImages[i].class].likes) {
                mainImages[allImages[i].class] = allImages[i];
            }
        }
        return classes.map(item => {
            return {
                emoji: item,
                quantity: quantity[item],
                mainImage: mainImages[item]
            };
        });
    }
};