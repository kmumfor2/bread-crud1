const router = require('express').Router()
const Bread = require('../models/bread')

//Get ALL the bread
router.get('/', async (req, res) => {
    const bread = await Bread.find()
    res.render('index', {
        breads: bread
    })
})

router.get('/new', (req,res) => {
    res.render('new')
})

//Get SPECIFIC bread by index`
router.get('/:id',async (req, res) => {
    const { id } = req.params
    const bread = await Bread.findById(id)
    res.render('show',{
        bread
        

    })
    //res.send(Bread [index])
})

router.get('/:index/edit', (req,res) => {
    const { index } = req.params
    res.render('edit',{
        bread: Bread[index],
        index
    })
})

router.post('/', async (req,res) => {
    if (!req.body.image) req.body.image = undefined
    if(req.body.hasGluten === 'on') {
        req.body.hasGluten = true
    } else{
        req.body.hasGluten = false
    }

     await Bread.create(req.body)
    res.status(303).redirect('/breads')
})

router.delete('/:index',(req,res) => {
    const { index } = req.params
    Bread.splice(index,1)
    res.status(303).redirect('/breads')
}
)

router.put('/:index', (req,res) => {

    const { index } = req.params
    
    //if (!req.body.image) req.body.image = 'https://thumbs.dreamstime.com/b/bread-cut-14027607.jpg'
    if(req.body.hasGluten === 'on') {
        req.body.hasGluten = true
    } else{
        req.body.hasGluten = false
    }

    Bread[index] = req.body
    res.status(303).redirect(`/breads/${index}`)
})

module.exports = router
