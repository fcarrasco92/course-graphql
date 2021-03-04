'use strict'

require('dotenv').config()
const { makeExecutableSchema } = require('graphql-tools')
const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const { readFileSync } = require('fs')
const { join } = require('path')
const resolvers = require('./lib/resolvers')

const app = express()
const port = process.env.port || 3000

// define initial Schema
/**
 * Dentro de GraphQL contamos con distintos tipos de datos escalares:
    - String
    - Int
    - Float
    - Boolean
    - ID
 */

const typeDefs = readFileSync(
  join(__dirname, 'lib', 'schema.graphql'),
  'utf-8'
)

const schema = makeExecutableSchema({ typeDefs, resolvers })

// Execute the query hello in terminal
// graphql(schema, "{ greeting }", resolvers).then((data) => {
//   console.log(data);
// });

app.use(
  '/api',
  graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true
  })
)

app.listen(port, () => {
  console.log(`server is listening at http://localhost:${port}`)
})
