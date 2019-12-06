import express from 'express';
import mongoose  from 'mongoose';
import bodyParser  from 'body-parser';
import graphql  from 'express-graphql';
import { importSchema } from 'graphql-import';
import { makeExecutableSchema } from 'graphql-tools';
import { graphqlUploadExpress } from 'graphql-upload';
import resolvers from './graphql/resolvers';
require('dotenv').config();

const app = express();

app.use(bodyParser.json({limit: '50mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.use('/images', express.static('images'));

const typeDefs = importSchema('./graphql/Schema.graphql');
app.use('/graphql',
    graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 2 }), 
    graphql({
        schema: makeExecutableSchema({ typeDefs, resolvers }),
        graphiql: true
    })
);

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