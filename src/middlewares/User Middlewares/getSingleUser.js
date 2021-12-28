const User = require( "../../model/User.model.js");

const getSingleUser = async (req, res) => {
    try {
        const apiKey = req.body.apiKey || req.query.apiKey || (req.headers['authorization'] && req.headers['authorization'].split(' ')[1]);

        console.log(apiKey);

        let user = await User.findOne({ userId: req.params.userId }).populate('cart');
        console.log(user);
        if (!user) return res.status(200).json({ status: "failed", message: "No User found with this userId" });

        if (user.role === 0) return res.status(200).json({ status: "success", user });

        let reqUser;
        if (apiKey) reqUser = await User.findOne({ apiKey: apiKey }).populate('cart');
        console.log(reqUser);
        if (!reqUser) return res.status(200).json({ status: "failed", message: "Invalid API Key!" });

        console.log(reqUser.role, user.role);

        if (reqUser.role === 2) {
            return res.status(200).json({ status: "success", user });
        }

        if (reqUser.apiKey === user.apiKey) return res.status(200).json({ status: "successs", user: {
            userId: user.userId,
            email: user.email,
            apiKey: user.apiKey,
            cart: user.cart,
        } });
        else return res.status(200).json({ status: "failed", message: "Not a valid apiKey for user" });

    } catch (error) {
        console.log(error);
        res.status(400).send({ status: "failed", message: error.message, error });
    }
}

module.exports = getSingleUser;