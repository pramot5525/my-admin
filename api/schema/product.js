var { Product, Category } = require('../models')

const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
  GraphQLList 
} = require("graphql");
const {
  GraphQLDateTime
} = require('graphql-iso-date');

const productType = new GraphQLObjectType({
  name: "Product",
  fields: () => {
    console.log('productType')
    return {
      id: {
        type: GraphQLInt
      },
      name: {
        type: GraphQLString
      },
      price: {
        type: GraphQLString
      },
      image: {
        type: GraphQLString
      },
      category: {
        type: categoryType,
        resolve(product, _) {
          return Category.findByPk(product.category_id)
        }
      },
      updatedAt: {
        type: GraphQLDateTime
      },
      createdAt: {
        type: GraphQLDateTime
      }
    }
  }
})

const categoryType = new GraphQLObjectType({
  name: "Category",
  fields: () => ({
    id: {
      type: GraphQLInt
    },
    name: {
      type: GraphQLString
    },
    updatedAt: {
      type: GraphQLString
    },
    createdAt: {
      type: GraphQLString
    }
  })
})

const getProductField = {
  type: productType,
  args: { id: { type: new GraphQLNonNull(GraphQLInt) } },
  resolve(_, { id }) {
      return Product.findByPk(id)
  }
}

const getProductsField = {
  type: new GraphQLList(productType),
  resolve(_, args){
    return Product.findAll()
  }
}

const addProductField = {
  type: productType,
  resolve(_, args){
    return null
  }
}


module.exports = {
  getProductField,
  getProductsField,
  addProductField
};