const router = require('express').Router()
const Bread = require('../models/bread')

//Get ALL the bread
router.get('/',(req, res) => {
    res.render('index', {
        breads: Bread
    })
})

router.get('/new', (req,res) => {
    res.render('new')
})

//Get SPECIFIC bread by index`
router.get('/:index',(req, res) => {
    const { index } = req.params
    res.render('show',{
        bread: Bread[index],
        index:index

    })
    //res.send(Bread [index])
})


router.post('/', (req,res) => {
    if (!req.body.image) req.body.image = 'https://thumbs.dreamstime.com/b/bread-cut-14027607.jpg'
    if(req.body.hasGluten === 'on') {
        req.body.hasGluten = true
    } else{
        req.body.hasGluten = false
    }

    Bread.push(req.body)
    res.status(303).redirect('/breads')
})

router.delete('/:index',(req,res) => {
    const { index } = req.params
    Bread.splice(index,1)
    res.status(303).redirect('/breads')
}
)

module.exports = router
