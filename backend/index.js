import express from 'express';
import bodyParser  from 'body-parser';
import graphql  from 'express-graphql';
import mongoose  from 'mongoose';
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

// app.use('/graphql', graphql({
//   // schema: graphQLSchema,
//   // rootValue : resolvers,
//   graphiql:true
// }));

app.listen(3000, () => {
    mongoose.connect('mongodb://localhost:27017/projectImages', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    (error) => {
        if (error) throw error;
        console.log('MongoDb is running');
    })
    console.log('App is working');
});