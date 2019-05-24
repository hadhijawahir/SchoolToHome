const Parent = require("../models/Parent");
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");

exports.test = (req, res) => {
  res.json({ success: "Msg Succcess" });
  console.log("Success");
};

// register user
exports.register = (req, res) => {
  Parent.findOne({ email: req.body.email }).then(parent => {
    if (parent) {
      return res.status(400).json({ email: "Email already exits" });
    } else {
      const avatar = gravatar.url(req.body.email, {
        s: "200", //size
        r: "pg", //Rating
        d: "mm" //Default
      });

      const newParent = new Parent({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
        avatar,
        address: req.body.address,
        phoneno: req.body.phoneno
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newParent.password, salt, (err, hash) => {
          if (err) throw err;
          newParent.password = hash;
          newParent
          .save()
          .then(parent=>res.json(parent))
          .catch(err=> console.log(err))
        });
      });
    }
  });
};
