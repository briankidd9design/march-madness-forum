const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;
const mongoose = require("mongoose");
const Comment = mongoose.model("comment");
const Reply = mongoose.model("reply");
const CommentType = require("./comment_type");
const ReplyType = require("./reply_type");

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addComment: {
      type: CommentType,
      args: {
        title: { type: GraphQLString },
      },
      resolve(parentValue, { title }) {
        return new Comment({ title }).save();
      },
    },
    addReplyToComment: {
      type: CommentType,
      args: {
        content: { type: GraphQLString },
        commentId: { type: GraphQLID },
      },
      resolve(parentValue, { content, commentId }) {
        return Comment.addComment(commentId, content);
      },
    },
    likeReply: {
      type: ReplyType,
      args: { id: { type: GraphQLID } },
      resolve(parentValue, { id }) {
        return Reply.like(id);
      },
    },
  },
});

module.exports = mutation;
