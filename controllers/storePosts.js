const path = require("path");
const { Post } = require("../DB/Models");

module.exports = (req, res) => {
  const { image } = req.files;

  // Moves the post image uploaded to public/posts directory
  image.mv(
    path.resolve(__dirname, "..", `public/uploads/${image.name}`),
    err => {
      // If error in saving file
      if (err) {
        return res.status(500).send(err);
      }

      // Saving data in DB and appending the path of image
      Post.create(
        { ...req.body, image: `/uploads/${image.name}` },
        (err, post) => {
          if (err) {
            console.log(err);
          }
          res.redirect("/");
        }
      );
    }
  );
};
