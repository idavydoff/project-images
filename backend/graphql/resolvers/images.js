import { Images, Likes } from '../../models';
import likes from '../../models/likes';

export default {
    images: async (parent, { input }) => {
        if (input) {
            let { state, page } = input;
            let images = await Images.find();

            let itemsPerPage = 12;

            let pageLimit = itemsPerPage * page;
            let pageOffset = pageLimit - itemsPerPage;
            
            // ML = Most Liked; RA = Recently Added; BC = By Class
            if (state == "ML") {
                return await Images.find().sort({likes: -1}).limit(itemsPerPage).skip(pageOffset);
            }
            else if (state == "RA") {
                return await Images.find().sort({date: -1}).limit(itemsPerPage).skip(pageOffset);
            }
            else if (state == "BC") {
                return await Images.find({class: input.classEmoji}).limit(itemsPerPage).skip(pageOffset);
            }
        }
        else return await Images.find().populate('likes');
    },
    
    image: async (parent, { input }) => {
        let { id } = input;
        return await Images.findById(id).populate('likes');
    }
};