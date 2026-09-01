import ImageKit from "@imagekit/nodejs";
import dotenv from "dotenv";

dotenv.config();

const imagekit = new ImageKit({
  urlEndpoint: process.env.IK_URL,
  publicKey: process.env.IK_PUBLIC_KEY,
  privateKey: process.env.IK_PRIVATE_KEY,
});

console.log("Starting upload...");

try {
  const result = await imagekit.files.upload({
    file: "Hello from ChatGPT",
    fileName: "test.txt",
  });

  console.log(result);
} catch (err) {
  console.error(err);
}