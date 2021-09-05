// var createError = require('http-errors');
var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');
const { Sequelize } = require('sequelize');
var { graphqlHTTP } = require('express-graphql');
const { schema, rootValue } = require('./schema');

const sequelize = new Sequelize('my_admin', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});
sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');

}).catch(err => {
  console.error('Unable to connect to the database:', err);
})


var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: rootValue,
  graphiql: true,
}));

app.listen(4000);

module.exports = app;