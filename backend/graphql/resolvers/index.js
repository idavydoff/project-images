import ImagesClassesResolvers from './imageClasses';
import ImagesResolvers from './images';
import MutationResolvers from './mutations';
import { GraphQLUpload } from "graphql-upload";

export default {
    Query: {
        ...ImagesClassesResolvers,
        ...ImagesResolvers
    },

    Mutation: {
        ...MutationResolvers
    },
    
    Upload: GraphQLUpload
};