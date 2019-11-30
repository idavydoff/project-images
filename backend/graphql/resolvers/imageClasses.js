import { ImageClasses } from '../../models';

export default {
    iclasses: async (parent, args) => {
        let { limit } = args.input;
        return await limit ? ImageClasses.find().limit(limit) : ImageClasses.find();
    }
};