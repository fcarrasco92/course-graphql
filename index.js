"use strict";

const { graphql, buildSchema } = require("graphql");

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
        greeting: String
    }
`);

// setting the resolvers
const resolvers = {
  hello: () => {
    return "Hello world";
  },
  greeting: () => {
    return "Hola a todos";
  },
};

// Execute the query hello
graphql(schema, "{ greeting }", resolvers).then((data) => {
  console.log(data);
});
