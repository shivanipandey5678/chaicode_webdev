import type { ITodo } from "../../validation/todo.schema.js";
import type { Request, Response } from "express";
import { todoSchema } from "../../validation/todo.schema.js";
class TodoController{
   private _db: ITodo[]
   constructor(){
      this._db=[]
   }

   public handleGetAllTodos(req:Request , res:Response){
      const todos = this._db
      return res.json({todos})
         // const todos = this._db here detach ho gya hogya bind karna padega taki use kars ake
      
   }

   public async handleInsertTodo(req:Request, res:Response){
      try {
            const unValidated = req.body;
      const validationResult = await todoSchema.parseAsync(unValidated);
      this._db.push(validationResult) 
      return res.status(201).json({todo:validationResult})
      } catch (error) {
         return res.status(500).json({error:'validation failed'})
      }
    
   }
}

export default TodoController;


//inetrface run time validation ko support nhi karta  inetrface taki ham ham ts me code kar sake or runtime ke liye zod hoga hamare pass ok
