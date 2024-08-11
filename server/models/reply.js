const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReplySchema = new Schema({
  song: {
    type: Schema.Types.ObjectId,
    ref: "comment",
  },
  likes: { type: Number, default: 0 },
  content: { type: String },
});

ReplySchema.statics.like = function (id) {
  const Reply = mongoose.model("reply");

  return Reply.findById(id).then((reply) => {
    ++reply.likes;
    return reply.save();
  });
};

mongoose.model("reply", ReplySchema);
