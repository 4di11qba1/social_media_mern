import express from 'express'
import {registerUser} from '../Controllers/AuthenticController.js'
import { loginUser } from '../Controllers/AuthenticController.js'

const router = express.Router()

router.post('/register', registerUser)
router.post('/login', loginUser)

export default router