import ImagesClassesResolvers from './imageClasses';
import ImagesResolvers from './images';
import UploadResolvers from './upload';
import { GraphQLUpload } from "graphql-upload";

export default {
    Query: {
        ...ImagesClassesResolvers,
        ...ImagesResolvers,
    },
    Mutation: {
        ...UploadResolvers
    },
    Upload: GraphQLUpload
};