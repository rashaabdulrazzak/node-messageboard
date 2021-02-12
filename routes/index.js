var express = require("express");
var router = express.Router();
const messages = [
  {
    text: "Hi there!",
    user: "Rasha",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];
/* GET home page. */
router.get("/", function (req, res, next) {
  console.log("hey");
  res.render("index", { title: "Mini Messageboard", messages: messages });
});
router.get("/new", function (req, res, next) {
  res.render("form", { title: "Add new mesage" });
});

router.post("/new", function (req, res, next) {
  console.log("hey");
  messages.push({
    text: req.body.messageText,
    user: req.body.messageUser,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = router;
