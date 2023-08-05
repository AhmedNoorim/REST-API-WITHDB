const router = require("express").Router()

const { getAllUsers, createUser, getOneUser, deleteUser, updateUser } = require("../controllers/user.controller")

router.get("/", getAllUsers)
router.get("/:id", getOneUser)
router.post("/", createUser)
router.delete("/:id", deleteUser)
router.patch("/:id", updateUser)


module.exports = router

// api/users : GET
// api/users/:id : GET
// api/users/ : POST
// api/users/:id : POST
// api/users/:id : PATCH
// api/users/:id : DELETE