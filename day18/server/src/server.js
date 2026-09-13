import app from "./app/app.js";
import connectB from "./config/db.js";

await connectB()

app.listen(3000, ()=>{
    console.log("server is running on port 3000");
})