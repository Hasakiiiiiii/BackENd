const authorrize = (req,res,next) =>{
    const {user} = req.query;
    if(user === 'john'){
        req.user = {name: 'john', if:3};
        next()
    }else{
        res.status(401).send('Unauthorize')
    }
    console.log('authorrize')
    next();
}

module.exports = authorrize