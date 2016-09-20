var express = require ("express");
var router = express.Router();
var postsControllers = require("../controller/posts")

router.route("/")
  .get(postsControllers.index)
  .post(postsControllers.create);

router.route("/:id")
  .get(postsControllers.show)
  .put(postsControllers.update)
  .delete(postsControllers.delete);

router.route("/new")
  .get(postsControllers.new);

router.route("/:id/edit")
  .get(postsControllers.edit);



//export it
module.exports = router;
