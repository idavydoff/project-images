import { observable, action } from 'mobx';
import axios from "axios";

class Store {
    @observable mostLiked = [];
    @observable recentlyAdded = [];
    @observable byEmojiList = [];
    @observable canLoad = true;
    @observable iClassesList = [];
    @observable imageUploadData = "";
    @observable imageData = null;
    @observable setLikeData = false;

    @action clearAll() {
        this.mostLiked = [];
        this.recentlyAdded = [];
        this.byEmojiList = [];
        this.canLoad = true;
    }

    @action async getMostLiked(isHome, page) {
        const data = await axios.post("/graphql", {
            query: `
                query{
                    images (input: {state: "ML", page: ${page}}){
                        _id
                        path
                        likes
                    }
                }
            `
          }
        );
        let every = data.data.data.images;
        if (every.length == 0) this.canLoad = false;
        this.mostLiked = isHome ? every.slice(0, 6) : [...this.mostLiked, ...every];
    }

    @action async getRecentlyAdded(isHome, page) {
        const data = await axios.post("/graphql", {
            query: `
                query{
                    images (input: {state: "RA", page: ${page}}){
                        _id
                        path
                        likes
                        date
                    }
                }
            `
          }
        );
        let every = data.data.data.images;
        if (every.length == 0) this.canLoad = false;
        this.recentlyAdded = isHome ? every.slice(0, 6) : [...this.recentlyAdded, ...every];
    }

    @action async getImagesByEmoji(emoji, page) {
        const data = await axios.post("/graphql", {
            query: `
                query{
                    images (input: {state: "BC", page: ${page}, classEmoji: "${emoji}"}){
                        _id
                        path
                        likes
                        date
                    }
                }
            `
        });
        let every = data.data.data.images;
        if (every.length == 0) this.canLoad = false;
        this.byEmojiList = [...this.byEmojiList, ...every];
    }

    @action async getIClassesList() {
        const data = await axios.post("/graphql", {
            query: `
                query{
                    iclasses {
                        emoji
                        quantity
                    }
                }
            `
          }
        );
        this.iClassesList = data.data.data.iclasses.sort((a, b) => b.quantity - a.quantity);
    }

    @action async getImage(id) {
        this.setLikeData = false;
        const data = await axios.post("/graphql", {
            query: `
                query{
                    image (input: {id: "${id}"}) {
                        path
                        class
                        likes
                        date
                    }
                }
              
            `
          }
        );
        this.imageData = data.data.data.image;
    }

    @action async setLike(id) {
        const data = await axios.post("/graphql", {
            query: `
                mutation{
                    setLike (input: {id: "${id}"})
                }
            `
          }
        );
        this.setLikeData = data.data.data.setLike;
    }

    @action async uploadImage(image, emoji) {
        var bodyFormData = new FormData();
        const ops = {
            query: "mutation ($image: Upload!, $class: String!) {uploadImage(input: {image: $image, class: $class})}",
            variables: {image: null, class: emoji}
        }
        bodyFormData.append("operations", JSON.stringify(ops));
        bodyFormData.append("map", '{"0": ["variables.image"]}');
        bodyFormData.append("0", image);
        const data = await axios({
            method: "post",
            url: "/graphql",
            data: bodyFormData,
            headers: {"Content-Type": "multipart/form-data" }
        })
        this.imageUploadData = "Loading";
        if (data.data.data.uploadImage == true) {
            this.imageUploadData = "Success";
        }
        else {
            this.imageUploadData = "Error";
        }
    }
}

export default new Store();