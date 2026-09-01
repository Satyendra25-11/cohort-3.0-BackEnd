import ImageKit from '@imagekit/nodejs'
// import ImageKit from 'imagekit'
import dotenv  from 'dotenv'
dotenv.config()
console.log("imagekit = ",ImageKit);


const storageInstance = new ImageKit({
    urlEndpoint: process.env.IK_URL,
    publicKey : process.env.IK_PUBLIC_KEY,
    privateKey : process.env.IK_PRIVATE_KEY
})

console.log("storageInstance =", storageInstance);
console.log("typeof storageInstance =", typeof storageInstance);


export const sendFiles = async(file, fileName)=>{

 console.log("inside sendFiles");
 console.time("Upload time")

//     console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(storageInstance)));

//     console.log("storageInstance.files ===",storageInstance.files);
// console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(storageInstance.files)));


console.log("typeof file =", typeof file);
    console.log("isBuffer =", Buffer.isBuffer(file));
    console.log("file length =", file.length);

    const obj = {
        file,
        fileName,
        folder: "cohort-3"
    }

    console.log("upload finished");
    console.timeEnd("upload time")
    return await storageInstance.files.upload(obj);
}