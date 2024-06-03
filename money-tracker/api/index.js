const express= require('express');
const cors= require('cors');
const app = express();
const port = 3003; 

app.use(cors());
app.use(express.json());
app.get('/api/test', (req,res) => {

    res.json({message:'test ok'});
});



/*const express = require('express');
const app = express();
const port = 4040; // Define the port

app.get('/api/test', (req, res) => {
    res.json({ body: 'test kk' }); // Correct the res.json usage
});*/
app .post('/api/transaction', (req,res)=>{
 res.json(req.body);
});

app.listen(port, () => {
    console.log(`Server is running on port ${3003}`);
  });
  
/*app.listen(port, () => {
    //console.log(`Server is running on port ${port}`); // Correct the app.listen usage
});*/

