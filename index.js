"use strict";

const { graphql, buildSchema } = require("graphql");
const express = require("express");
const { graphqlHTTP } = require("express-graphql");

const app = express();
const port = process.env.port || 3000;

// define initial Schema
/**
 * Dentro de GraphQL contamos con distintos tipos de datos escalares:
    - String
    - Int
    - Float
    - Boolean
    - ID
 */

const schema = buildSchema(`
    type Query{
        hello: String,       
    }
`);

// setting the resolvers
const resolvers = {
  hello: () => {
    return "Hello world";
  },
};

// Execute the query hello in terminal
// graphql(schema, "{ greeting }", resolvers).then((data) => {
//   console.log(data);
// });

app.use(
  "/api",
  graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true,
  })
);

app.listen(port, () => {
  console.log(`server is listening at http://localhost:${port}`);
});
