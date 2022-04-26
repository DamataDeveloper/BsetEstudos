import { Router, Request, Response } from "express";

const router = Router();



router.get('/',(req: Request , res: Response)=>{    
    let user: string = "marcelo mata"
    res.status(200).render('home', {
        user
    })
})
router.get('/teste', (req: Request, res: Response)=>{
    res.status(200).render('teste')
})


export default router;