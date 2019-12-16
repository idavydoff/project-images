import { observable, action } from 'mobx';
import axios from "axios";

class Store {
    @observable mostLiked = [];
    @observable recentlyAdded = [];
    @observable iClassesList = [];

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
        this.mostLiked = every.sort((a, b) => b.likes.length - a.likes.length).slice(0, 3);
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
        this.recentlyAdded = every.sort((a, b) => b.date - a.date).slice(0, 3);
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
}

export default new Store();