const bcrypt = require("bcrypt");

module.exports = (req, res, next) => {

  if (req.body.password.length > 0) {

    bcrypt.hash(req.body.password, 10, (err, encPass) => {
      if(err){ 
        console.log(err)
      }
      
      req.body.password = encPass;
      next();

    });
  }

  next();
};
