const mongoose = require("mongoose");
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } = graphql;
const ReplyType = require("./reply_type");
const Comment = mongoose.model("comment");

const CommentType = new GraphQLObjectType({
  name: "CommentType",
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    replies: {
      type: new GraphQLList(ReplyType),
      resolve(parentValue) {
        return Comment.findComments(parentValue.id);
      },
    },
  }),
});

module.exports = CommentType;
