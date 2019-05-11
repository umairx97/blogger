const { User } = require("../DB/Models");

module.exports = (req, res) => {
  User.create(req.body, (err, user) => {
    if(err){ 
      return res.redirect('/auth/register')
    }
    res.redirect("/");
  });
};
