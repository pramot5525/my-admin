// var { buildSchema } = require('graphql');
var models = require('../models')

// const schema = buildSchema(`
// type Mutation {
//   addProduct(name: String, price: Float, image: String, category_id: Int): Product
//   updateProduct(id: Int, name: String, price: Float, image: String, category_id: Int): Product
//   deleteProduct(id: Int): Product
// }

const {
  GraphQLObjectType,
  GraphQLSchema,
} = require("graphql");

const { getProductField, getProductsField, addProductField } = require('./product')

const rootQuery = new GraphQLObjectType({
  name: "RouteQuery",
  fields: {
    getProduct: getProductField,
    getProducts: getProductsField
  }
});

const rootMutation = new GraphQLObjectType({
  name: "RouteMutation",
  fields: {
    addProduct: addProductField
  }
});

const schema = new GraphQLSchema({
  query: rootQuery,
  mutation: rootMutation
});


module.exports = {
  schema
};
