const jwt = require('jsonwebtoken');
const jwt_sign = "jaishreeram";


const fetchUser = (req, res, next) =>{
    const token = req.header('auth-token');
    if(!token){
        res.status(401).send({error:"Please authenticate using valid credential"})
    }
    try {
        
        const string = jwt.verify(token, jwt_sign);
        req.user = string.user;
        next();
    } catch (error) {
        res.status(401).send({error:"Please authenticate using valid credential"})
    }

}

module.exports = fetchUser;