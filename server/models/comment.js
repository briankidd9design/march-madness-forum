const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  title: { type: String },
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  replies: [
    {
      type: Schema.Types.ObjectId,
      ref: "reply",
    },
  ],
});

CommentSchema.statics.addComment = function (id, content) {
  const Reply = mongoose.model("reply");

  return this.findById(id).then((comment) => {
    const reply = new Reply({ content, comment });
    comment.replies.push(reply);
    return Promise.all([reply.save(), comment.save()]).then(
      ([reply, comment]) => comment
    );
  });
};

CommentSchema.statics.findComments = function (id) {
  return this.findById(id)
    .populate("replies")
    .then((comment) => comment.replies);
};

mongoose.model("comment", CommentSchema);
