const express = require('express');
const cors =require('cors');
const productRoutes = require('./routes/productRoutes');
const productImages =require('./routes/productImages');
const categoryRoute= require('./routes/categoryRoute')
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 5001;

app.get('/', (req,res)=>{
    res.send("getting ")
})


app.use('/api', productRoutes);



//productImagePost
app.use('/productImages', productImages)
// app.use('/categories', category_route)

app.use('/categories', categoryRoute)


// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
