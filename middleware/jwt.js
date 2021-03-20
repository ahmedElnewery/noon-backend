// const expressJwt = require('express-jwt');
// const userService = require('../services/userService');
// const {pathToRegexp} = require('path-to-regexp');

// module.exports = jwt;

// function jwt() {
//     const secret = process.env.secret;

//     return expressJwt({ secret, algorithms: ['HS256'], isRevoked }).unless({
//         path: [
//             // routes dont share in auth ( such home page )
//             '/api/products',
//             '/api/users/authenticate',
//             '/api/users/register',
//             '/api/filter/category',
//             pathToRegexp('/api/products/:id'),
//             // pathToRegexp('/api/products/:id/reviews'),
//             pathToRegexp('/api/products/bycategory/:category'),
//             pathToRegexp('/api/products/bysubcategory/:subcategory'),
//              pathToRegexp( '/api/filter/subcategory/:cateid')

//         ]
//     });
// }

// async function isRevoked(req, payload, done) {
//     const user = await userService.getById(payload.sub);

//     // revoke token if user no longer exists
//     if (!user) {
//         return done(null, true);
//     }

//     done();
// };