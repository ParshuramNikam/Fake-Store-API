const User = require( "../../model/User.model.js");

const getAllUsers = async (req, res, next) => {
    try {
        const apiKey = req.body.apiKey || req.query.apiKey || (req.headers['authorization'] && req.headers['authorization'].split(' ')[1]);

        let allUsers;

        if (!apiKey) {
            allUsers = await User.find({ role: 0 }).select('-_id -__v -createdAt -updatedAt -password -token -role -otp -verified').populate("cart", "-_id -__v -createdAt -updatedAt");
            res.locals.users = allUsers;
            return next();
        }

        const apiKeyUser = await User.findOne({ apiKey: apiKey }).select('-_id -__v -createdAt -updatedAt -password -token -role -otp -verified').populate('cart');
        allUsers = await User.find({ role: 0 });

        if (apiKeyUser && apiKeyUser.role === 2) {
            allUsers = await User.find({});
            return res.status(200).send({ status: "success", users: allUsers })
        }

        const users = await User.find({ $or: [{ apiKey: apiKey }, { role: 0 }] }).select('-_id -__v -createdAt -updatedAt -password -token -role -otp -verified').populate('cart');

        console.log(users);
        if (!users.length) return res.status(200).send({ message: "No users found!" })

        res.locals.users = users;
        next();
    } catch (error) {
        res.status(400).send({ status: "failed", message: error.message, error });
    }
}

module.exports = getAllUsers;