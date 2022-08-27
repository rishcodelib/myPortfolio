const User = require('../model/userModel')
const asyncHandler = require('express-async-handler')



exports.createUser = asyncHandler(async (req, res) => {
  let { firstName, lastName, email, password, contact } = req.body
  firstName = firstName && firstName.toLowerCase()
  lastName = lastName && lastName.toLowerCase()
  console.log("Reached to tras point " + firstName + " " + lastName)

  const user = await User.create({
    firstName,
    lastName, email, password
    , contact
  })
  console.log("User is Created");
  res.send("User Added Success")

})

exports.getAllUsers = asyncHandler(async (_req, res) => {
  User.find()
  console.log("Get All Users Method");
  console.log(User)
  res.json(User.json)
})


