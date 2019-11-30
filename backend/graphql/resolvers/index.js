import ImagesClassesResolvers from './imageClasses';
import ImagesResolvers from './images';

export default {
    Query: {
        ...ImagesClassesResolvers,
        ...ImagesResolvers
    }
};