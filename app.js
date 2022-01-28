const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { schema } = require('./Scehems/DrugScheme')
const cors = require('cors');
const path  = require('path');
require('dotenv').config({path: './.env'});


const app = express();


// CORS
app.use(cors())

// Graphql root schema
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

// main route servers react production build app.

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './client/web/dist/index.html'))
})

// All other routes.
app.get('*', (req,res) => {
  res.status(404).send('Page Not Found')
})

// serves static files from web app

app.use(express.static(path.join(__dirname, './client/web/dist')))

app.listen(process.env.PORT || 4000, () => {
    console.log(`Running a GraphQL API server at http://localhost:${process.env.PORT}/graphql`);
});
