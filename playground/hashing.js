// const {SHA256} = require('crypto-js');
// const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// START BCRYPT
var password = 'pass123';

// bcrypt.genSalt(10, password, (err, salt) => {
//   // hashing here
//   bcrypt.hash(password, salt, (err, hash) => {
//     console.log(hash);
//   });
// });

bcrypt.genSalt(10).then((salt) => {
  bcrypt.hash(password, salt).then((hash) => {
    console.log(hash)
  })
}).catch((e) => {

});

// Compare password and hashedPassword
var hashedPassword = '$2a$10$778iQ0xlH2UiNJH9GdJJ8umUAkJn472rc37gXcVFVT3mPQAUsz4Ha';

bcrypt.compare(password, hashedPassword, (err, res) => {
  // return true or false
  console.log(res);
});


// START CRYPTO-JS
// var message = 'I am number 4';
// var hash = SHA256(message).toString();

// // console.log(message)
// // console.log(hash);

// var data = {
//   id: 4
// };
// var token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// }

// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

// if (resultHash === token.hash) {
//   console.log('Data was not changed');
// } else {
//   console.log('Data was changed. Do not trust!');
// }


// START JWT
// var data = {
//   id: 10
// };

// var token = jwt.sign(data, '123abc');
// console.log(token);

// var decode = jwt.verify(token, '123abc');
// console.log('decode', decode);