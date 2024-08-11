const mongoose = require("mongoose");
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull } = graphql;
const CommentType = require("./comment_type");
const ReplyType = require("./reply_type");
const Reply = mongoose.model("reply");
const Comment = mongoose.model("comment");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: () => ({
    comments: {
      type: new GraphQLList(CommentType),
      resolve() {
        return Comment.find({});
      },
    },
    comment: {
      type: CommentType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentValue, { id }) {
        return Comment.findById(id);
      },
    },
    reply: {
      type: ReplyType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parnetValue, { id }) {
        return Reply.findById(id);
      },
    },
  }),
});

module.exports = RootQuery;
