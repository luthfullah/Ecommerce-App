const express = require('express');
const cors =require('cors');
const productRoutes = require('./routes/productRoutes');
const productImages =require('./routes/productImages');
const categoryRoute= require('./routes/categoryRoute')
require('dotenv').config();
const {readdirSync}=require('fs')
const fs = require('fs');



// console.log(readdirSync('./routes'));
const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 5001;

app.get('/', (req,res)=>{
    res.send("getting ")
})


const routesPath = './routes';

// Read the contents of the directory synchronously
const files = fs.readdirSync(routesPath);
console.log("filessssssss",files);
// Map each file to a route
files.forEach((file) => {
  // Check file extension
  if (file.endsWith('.js')) {
    // Specify a route path based on the file name (without extension)
    let routePath = `/${file.replace('.js', '')}`;
    
    // If the file is productRoute.js, update the route path
    if (file === 'categoryRoute.js') {
      routePath = '/api/getall';
    }else if (file === 'productImages.js') {
      routePath = '/productImages/';
    }
    else if (file === 'productRoutes.js') {
      routePath = '/categories/';
    }

    // Use the route in Express
    app.use(routePath, require(`${routesPath}/${file}`));
  }
});
// readdirSync('./routes').map((file)=>app.use('/',require('./routes/'+file)))

// app.use('/api', productRoutes);

// app.use('/productImages', productImages)

// app.use('/categories', categoryRoute)


// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
