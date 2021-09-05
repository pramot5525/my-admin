const userType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: {
      type: GraphQLInt
    },
    first_name: {
      type: GraphQLString
    },
    last_name: {
      type: GraphQLString
    },
    email: {
      type: GraphQLString
    },
    uname: {
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