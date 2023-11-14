const myLog = (req,res,next)=>{
  console.log("user enter to the site in:", Date.now());
  next();
}

module.exports = myLog;