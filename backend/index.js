import express from 'express';
import path from 'path';
import mongoose  from 'mongoose';
import bodyParser  from 'body-parser';
import graphql  from 'express-graphql';
import { importSchema } from 'graphql-import';
import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './graphql/resolvers';
require('dotenv').config();

const app = express();
app.use(bodyParser.json());
const typeDefs = importSchema('./graphql/Schema.graphql');

app.use('/graphql', graphql({
    schema: makeExecutableSchema({ typeDefs, resolvers }),
    graphiql: true
}));

app.listen(3000, () => {
    mongoose.connect('mongodb://localhost:27017/projectImages', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    error => {
        if (error) throw error;
        console.log('MongoDb is running');
    })
    console.log('App is working');
});