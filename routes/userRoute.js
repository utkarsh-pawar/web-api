import express from 'express'
import { createUser, findAll, findUser } from '../controllers/user.js'
import upload from '../middleware/imageCloudUpload.js'


const router = express.Router()

router.get("/",findAll)

router.get("/:userid",findUser)
router.post("/",upload.array("documents"),createUser)

export default router