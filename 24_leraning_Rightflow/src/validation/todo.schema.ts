
import {z} from 'zod'
export const todoSchema = z.object({
    id:z.string().describe('ID of the todo'),
    title: z.string().describe('title of the todo'),
    description:z.string().optional().describe('description of the todo'),
    isCompleted: z.boolean().default(false).describe('if todo item is completed'),
})
export type ITodo = z.infer<typeof todoSchema>

// export interface ITodo{
//     id:string
//     title:string
//     description?:string
//     isCompleted:boolean

// }



//interface k I se prefix kar dete hai