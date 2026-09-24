import crypto from 'crypto'


export const generateCode = ()=>{
   return crypto.randomBytes(6).toString('base64').slice(0,6);

}