const User =  require("../../model/User.model.js");

const checkUserType = async (req, res, next) => {
    try { 
        // ROLES :- 
        //  0 => Default User  &  1 => Registerd User  &  2 => Admin

        const apiKey = req.body.apiKey || req.query.apiKey || (req.headers['authorization'] && req.headers['authorization'].split(' ')[1]);
        console.log(apiKey);
        if (!apiKey) return res.status(400).send({ status: "failed", message: "You don't have permission! Please Provide apiKey." });

        const user = await User.findOne({ apiKey: apiKey });
        console.log(user);

        // role 2 => admin
        if (!user || user.role === 0 || user.apiKey !== apiKey) return res.status(400).send({ status: "failed", message: "You don't have permission!" });

        res.locals.user = user;
        console.log("From checkUser:", user, user.role);
        next();
    } catch (error) {
        console.log("error in checkUserType", error);
        res.status(400).send({ status: "failed", message: error.message, error });
    }
}

module.exports = checkUserType;