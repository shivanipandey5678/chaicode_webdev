import express from 'express';
import type {Application} from 'express';
import router from './todos/routes.js';
export function createServerApplication():Application{
 const app = express();
 app.use(express.json())

 app.use('/todos',router)

 app.get('/', function(req,res){
    return res.json({message:'hello ji'})
 })
 console.log("runing ")
 return app

};


// why we do this like this bcoz as we know we can change any framwork from here only any time easily
