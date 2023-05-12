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

router.get('/:id/edit', async (req,res) => {
    const { id } = req.params
    const bread = await Bread.findById(id)
    res.render('edit',{
        bread
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

router.delete('/:id',async (req,res) => {
    const { id } = req.params
    await Bread.findByIdAndDelete(id)
    res.status(303).redirect('/breads')
}
)

router.put('/:id', async (req,res) => {

    const { id } = req.params
    
    if (!req.body.image) req.body.image = undefined
    if(req.body.hasGluten === 'on') {
        req.body.hasGluten = true
    } else{
        req.body.hasGluten = false
    }

    await Bread.findByIdAndUpdate(id, req.body)
    res.status(303).redirect(`/breads/${id}`)
})

// Seed the database
router.get('/data/seed', async (req,res) => {
    const data = [
        {
          name: 'Rye',
          hasGluten: true,
          image: 'https://images.unsplash.com/photo-1595535873420-a599195b3f4a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        },
        {
          name: 'French',
          hasGluten: true,
          image: 'https://images.unsplash.com/photo-1534620808146-d33bb39128b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        },
        {
          name: 'Gluten Free',
          hasGluten: false,
          image: 'https://images.unsplash.com/photo-1546538490-0fe0a8eba4e6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
        },
        {
          name: 'Pumpernickel',
          hasGluten: true,
          image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
        }
      ]    
      await Bread.insertMany(data)
      res.status(303).redirect('/breads');
})

module.exports = router


