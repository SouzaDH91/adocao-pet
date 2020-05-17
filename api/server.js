const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config({ path: 'variables.env' });
const Pet = require('./models/Pet');
const User = require('./models/User');

// Faz acessar o GraphQL-Express Middleware
const { graphiqlExpress, graphqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');

const { typeDefs } = require('./schema');
const { resolvers } = require('./resolvers');

// Cria o schema
const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

// Conecta ao DB
mongoose
    .connect(process.env.MONGO_URI,{ useNewUrlParser: true })
    .then(() => console.log('DB connected'))
    .catch(err => console.error(err));

//Inicializa aplicação
const app = express();

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true
};
app.use(cors(corsOptions));

// Cria aplicação GraphiQL
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

// Conecta schemas com GraphQL
app.use('/graphql', 
    bodyParser.json(),
    graphqlExpress({
    schema,
    context: {
        Pet,
        User
    }
}));

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`);
});