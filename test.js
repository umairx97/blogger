const mongoose = require("mongoose");
const { Post } = require("./DB/Models");

mongoose.connect("mongodb://localhost:27017/nodeBlog", {
  useNewUrlParser: true,
  useCreateIndex: true
});

/**
|========================================
| CREATE A TEST POST 
|========================================
*/

Post.create(
  {
    username: "umairx97",

    title: "How to become a MERN developer in 6 Months",

    subtitle: "Learning fast and learning good",

    content:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",

    image: "/uploads/1.png"

    // Date will be added automatically when the post is sent to server
  },
  (err, doc) => {
    console.log("err", err);
    console.log("doc", doc);
  }
);

/**
|========================================
| GET POSTS FROM DATABASE
|========================================
*/

// const getData = async () => {
//   try {
//     const data = await Post.find({});
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// };

// getData();

// Post.findById('5cd46a1ab4238a1b0adf9b73', (err, doc) => {
//     if(err){
//         console.log(err)
//     }

//     console.log(doc)
// })
