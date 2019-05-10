const { Post } = require("../DB/Models");

module.exports = async (req, res) => {
  const posts = await Post.find({});
  res.render("index", {
    posts
  });
};
