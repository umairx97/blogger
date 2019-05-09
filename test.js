const mongoose = require("mongoose");
const { Post } = require("./DB/Models");

mongoose.connect("mongodb://localhost:27017/nodeBlog", {
  useNewUrlParser: true,
  useCreateIndex: true
});

Post.create({
  title: "Nodejs Post",

  description: "This is description about the post",

  content: "Lorem ipsum dolor sit amet, consectur"

}, (err, doc) => {
    console.log('err', err)
    console.log('doc', doc)

})

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


