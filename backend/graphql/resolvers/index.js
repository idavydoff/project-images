import ImagesClassesResolvers from './imageClasses';
import ImagesResolvers from './images';
import UploadResolvers from './upload';
import LikesResolvers from './likes';
import { GraphQLUpload } from "graphql-upload";

export default {
    Query: {
        ...ImagesClassesResolvers,
        ...ImagesResolvers,
        ...LikesResolvers
    },

    Mutation: {
        ...UploadResolvers
    },
    
    Upload: GraphQLUpload
};