import { observable, action } from 'mobx';
import axios from "axios";

class Store {
    @observable mostLiked = [];
    @observable recentlyAdded = [];
    @observable iClassesList = [];
    @observable imageUploadData = "";

    @action async getMostLiked() {
        const data = await axios.post("/graphql", {
            query: `
                query{
                    images {
                        _id
                        path
                        class
                        likes {
                            _id
                        }
                    }
                }
            `
          }
        );
        let every = data.data.data.images;
        this.mostLiked = every.sort((a, b) => b.likes.length - a.likes.length).slice(0, 6);
    }

    @action async getRecentlyAdded() {
        const data = await axios.post("/graphql", {
            query: `
                query{
                    images {
                        _id
                        path
                        class
                        likes {
                            _id
                        }
                        date
                    }
                }
            `
          }
        );
        let every = data.data.data.images;
        this.recentlyAdded = every.sort((a, b) => b.date - a.date).slice(0, 6);
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
        console.log(data.data.data); 
        if (data.data.data.uploadImage == true) {
            this.imageUploadData = "Success";
        }
        else {
            this.imageUploadData = "Error";
        }
    }
}

export default new Store();