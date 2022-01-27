const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { schema } = require('./models/DrugScheme')
const cors = require('cors')
require('dotenv').config({path: './.env'});


const app = express();
app.use(cors())
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

app.listen(process.env.PORT || 4000, () => {
    console.log(`Running a GraphQL API server at http://localhost:${process.env.PORT}/graphql`);
});
