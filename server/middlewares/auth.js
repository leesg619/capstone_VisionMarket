const { User } = require('../models/User');

let auth = function (req, res, cb) {
    var token = req.cookies.w_auth;

    User.findByToken(token, (err, user) => {
        if (err) throw err;
        if (!user) {
            return res.json({
                isAuth: false,
                error: true
            })
        }
        req.token = token;
        req.user = user;
        cb();
    })
}

module.exports = { auth }