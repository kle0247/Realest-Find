// const express = require('express');
// const router = express.Router();
// const User = require('../db/User');
// const { isLoggedIn } = require('./middleware');



// router.post("/", async (req, res, next) => {
//     try {
//         const credentials = {
//             username: req.body.username,
//             password: req.body.password,
//         };

//         res.send({ token: await User.authenticate(credentials) });
//     } catch (ex) {
//         next(ex);
//     }
// });

// router.get('/', isLoggedIn, (req, res, next) => {
//     try {
//         res.send(req.user);
//     }
//     catch (ex) {
//         next(ex);
//     }
// });

// module.exports = router;