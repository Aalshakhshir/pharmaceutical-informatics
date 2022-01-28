const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { schema } = require('./Scehems/DrugScheme')
const cors = require('cors');
const path  = require('path');
require('dotenv').config({path: './.env'});


const app = express();

app.use(cors())
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './client/web/dist/index.html'))
})

app.use(express.static(path.join(__dirname, './client/web/dist')))

app.listen(process.env.PORT || 4000, () => {
    console.log(`Running a GraphQL API server at http://localhost:${process.env.PORT}/graphql`);
});
