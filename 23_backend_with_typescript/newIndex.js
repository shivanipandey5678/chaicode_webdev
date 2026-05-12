const express = require('express');

const app = express();

app.use(express.json())
app.get('/menu',(req,res)=> {
   items:['thali','ok']
});

app.post('/orders',(req,res)=> {
    res.status(200).json({
        status:'received',
        order:req.body
    })
})

// this is the exact same c=working code as u have in indexedDB.js but with express 
// req.body ====> chunk+=data same same 

// learn to understand the flow lang k to kya hi issue hai koi or lang me same chij k bol diya ho hi jaayega hi .app

// bun fastify web server sabka hono web server  alysia sabka syntaxdiff h flow same hai kabhi bhi move kar sakte hai 

// software likhna mtlb flow smjhna hai syntax is not 

