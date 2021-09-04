// var createError = require('http-errors');
var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');


const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('my_admin', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});
sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');

}).catch(err => {
  console.error('Unable to connect to the database:', err);
})


var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');
var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

var root = {
  hello: () => {
    return 'Hello world!';
  },
};


var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.use(passport.initialize());
app.use(passport.session());

app.listen(4000);

module.exports = app;
