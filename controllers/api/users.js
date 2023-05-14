const User = require('../../models/user');
const jwt = require('jsonwebtoken');

// Be Sure to add the following
const bcrypt = require('bcrypt');

module.exports = {
  create,
  login,
  checkToken
};

async function create(req, res) {
    try {
        // 1) create the user
        console.log(req.body)
        const user = await User.create(req.body);
        // 2) create the jwt by passing in the user info for the jwt payload
        const token = createJWT(user); // creates a "JSON" webtoken
        // 3) send the new jwt to the client using res.json
        res.json(token);
    } catch (error) {
        // if error, we'll send the error to the client
        console.log(error)
        res.status(400).json(error);
    }
}

async function login(req, res) {
    try {
      console.log(req.body)
      const user = await User.findOne({ email: req.body.email });
      console.log(user)
      if (!user) throw new Error();
      const match = await bcrypt.compare(req.body.password, user.password);
      if (!match) throw new Error();
      res.json( createJWT(user) );
    } catch {
      res.status(400).json('Bad Credentials');
    }
}


function createJWT(user) {
    return jwt.sign({ user }, process.env.SECRET, {expiresIn: '24h'});
    // jwt.sign() is a special method that does two things:
    // 1) creates a json web token with the provided payload, server secret and optional settings
    // 2) crytographically signs the token with the provided secret so it can be validated later
}

function checkToken(req, res) {
    // req.user will always be ther for you when a token is sent!
    console.log('req.user ', req.user);
    res.json(req.exp);
}