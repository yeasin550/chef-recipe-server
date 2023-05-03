const express = require('express')
// const cors = require('cors')
const app = express();
const port = 5000;

// app.use(cors())

const recipe = require('./recipe.json')
app.get('/', (req, res) => {
    res.send('server site is runing')
})
// app.get('/recipe', (req, res) => {
//     res.send(recipe)
// })
// app.get('/recipe/:id', (req, res) => {
//     const id = parseInt(req.params.id);
//     console.log(id)
//     const recipeDetails = recipe.find((r) => parseInt(r.id) === id);
//     res.send(recipeDetails)
// })
app.listen(port, () => {
    console.log(`chef-sever is run: ${port}`)
})