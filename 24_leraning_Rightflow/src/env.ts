import {z} from 'zod';


const envSchema  = z.object({
    PORT:z.string().default('8000')

})
//default ya optional ek k use karna sahi rhta hai 

function createEnv(env:NodeJS.ProcessEnv){
    const safeParseResult = envSchema.safeParse(env);
    if(!safeParseResult.success) throw new Error(safeParseResult.error.message);
    return safeParseResult.data;
};

export const env = createEnv(process.env);