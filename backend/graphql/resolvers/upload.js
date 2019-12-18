import { createWriteStream } from 'fs';
import { Images } from '../../models';
import path from 'path';
import uuidv4 from 'uuid/v4';

export default {
    uploadImage: async (parent, { input }) => {
        const { filename, createReadStream } = await input.image;
        let imgType = filename.split('.')[filename.split('.').length - 1];
        let newFileName = uuidv4() + '.' + imgType;
        return new Promise(async (resolve) => {
            createReadStream()
                .pipe(createWriteStream(__dirname + `/../../images/${newFileName}`))
                .on('finish', async () => {
                    const newImage = new Images({
                        path: path.join(__dirname, `/../../images/${newFileName}`),
                        class: input.class
                    })
                    await newImage.save()
                    resolve(true)
                })
                .on('error', () => resolve(false));
        });
    }
};