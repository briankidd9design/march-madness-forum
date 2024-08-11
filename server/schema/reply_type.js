const mongoose = require("mongoose");
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLInt, GraphQLString } =
  graphql;
const Reply = mongoose.model("reply");

const ReplyType = new GraphQLObjectType({
  name: "ReplyType",
  fields: () => ({
    id: { type: GraphQLID },
    likes: { type: GraphQLInt },
    content: { type: GraphQLString },
    comment: {
      type: require("./comment_type"),
      resolve(parentValue) {
        return Reply.findById(parentValue)
          .populate("comment")
          .then((reply) => {
            console.log(reply);
            return reply.comment;
          });
      },
    },
  }),
});

module.exports = ReplyType;
