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
        hello: String
    }
`);

// Execute the query hello
graphql(schema, "{ hello }").then((data) => {
  console.log(data);
});
