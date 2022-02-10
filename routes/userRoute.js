import express from 'express'
import { createUser, findUser } from '../controllers/user.js'
import upload from '../middleware/imageCloudUpload.js'


const router = express.Router()

router.get("/:userid",findUser)
router.post("/",upload.array("documents"),createUser)

export default router