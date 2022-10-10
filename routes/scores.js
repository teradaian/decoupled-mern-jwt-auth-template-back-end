import { Router } from 'express'
import * as scoresCtrl from '../controllers/scores.js'

const router = Router()

/*---------- Public Routes ----------*/

router.get('/', scoresCtrl.index)
router.put('/increment/:id', scoresCtrl.update)
router.put('/decrement/:id', scoresCtrl.updateDown)

/*---------- Protected Routes ----------*/
router.get('/add', scoresCtrl.add)


export { router }
