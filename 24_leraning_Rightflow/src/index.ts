import http from 'node:http';
import { env } from './env.js';
import { createServerApplication } from './app/index.js';
import { regex } from 'zod';
async function main(){
    try {
        const server = http.createServer(createServerApplication());
        const PORT: number =env.PORT ? +env.PORT : 8000;
        //if port me hamne string de diya piyush may be uska number conversion NAN hoga sahi nhi hai validation lagao run time validation

        server.listen(PORT, ()=> {
            console.log(`Server is running on PORT ${PORT}`)
        })
    } catch (error) {
        throw error
    }
}

//#region //*=========Routes ===============


// //we need tsconfig.json run command tsc --init
// it will auto add the file with all th code

// {
//   // Visit https://aka.ms/tsconfig to read more about this file
//   "compilerOptions": {
//     // File Layout
    // "rootDir": "./src",
    // "outDir": "./dist" 

    // OUTDIR kya hai kabhi bhi esa feel ho rha hai js me convert kar do to js files kaha rakhni hai 


    //dist file q bolte hai distributable fiel hai isliye.

// run command npx gitignore Node run karo gitignore add ho jaayega

// u need to compile again and again if u forget to reflect nhi hoga 

// if maine kl ko kisi ko share kiya or uske me typescript globallly set nhi hua to good practice to install it in local always

// always install dev depandices with flag -D 

// use npm tsc-watch 

// add dev script inside package.json tsc-watch --onSuccess \"node dist/index.js\"

// "


// express me jate ho ek symbol dikhta hai DT (inhone js k code push kiya hua hau mtlb kahi kahi ts mil jaayega) but prev wale ki type defination avaiable h to type install kr skte ho. npm i @types/express -DT

// jab ham bolte hai ki tsc -p . isme rootdir me tsconfig file ko serach kar convert karega js mei  
// ab js file dist ke andar ban gyi hogi ham kya karenge node dist/indexedDB.js se run kar ByteLengthQueuingStrategy

//dist ko kabhi bhi forward nhi karna hai 
// npx gitignore Node

// always change baad compile ke liye tsc -p . karo . nhi to tsc --watch use karo 



//#endregion //*=========Routes ===============



// if ur in js u need to write reg wo automatic we ye same opening closing bana dega