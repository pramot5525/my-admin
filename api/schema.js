var { buildSchema } = require('graphql');
var models = require('./models')
 
const schema = buildSchema(`
type Query {
  hello: String
  getProduct(id: Int): Product
  getProducts: [Product]
}
type Mutation {
  addProduct(name: String, price: Float, image: String, category_id: Int): Product
  updateProduct(id: Int, name: String, price: Float, image: String, category_id: Int): Product
  deleteProduct(id: Int): Product
}
type Product {
  id: Int
  name: String
  price: Float
  image: String
  category: String
  updatedAt: String
  createdAt: String
}
type Category {
  id: Int
  name: String
  updatedAt: String
  createdAt: String
}
type User {
  id: Int
  first_name: String
  last_name: String
  email: String
  uname: String
  updatedAt: String
  createdAt: String
}
`);

const root = {
  Query: {
    hello: () => 'Hello World!',
    getProduct: ({ id }) =>  models.Product.findByPk(id),
    getProducts: () => models.Product.findAll()
  },
};
const rootValue = {
  hello: root.Query.hello,
  getProduct: (q) => root.Query.getProduct(q),
  getProducts: root.Query.getProducts
};

module.exports = {
  schema,
  root,
  rootValue
};
