const createController = async(req,res)=>{

    let body = req.body
    let files = req.files
    console.log(files);
    console.log(body);
    res.send("message aa gya")
}

module.exports = createController