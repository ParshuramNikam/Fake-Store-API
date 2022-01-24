const User = require("../../model/User.model");
const Cart = require("../../model/cart.model");

const deleteUserAndCartFromDB = async (req,res, next) => {
    try {
        
        const userId = req.params.userId;

        let deletedUser = 0;
        let deletedCart = 0;

        await User.deleteOne({userId: userId}).then(function(result){
            deletedUser = result.deletedCount;
            console.log(result);
            console.log("User deleted successfully!"); // Success
        }).catch(function(error){
            console.log(error); // Failure
            return res.status(400).send({
                status: "Failed",
                message: error.message || "Error while deleting user from DB",
                error,
            });
        });

        Cart

        await Cart.deleteOne({userId: userId}).then(function(result){
            deletedCart = result.deletedCount;
            console.log(result);
            console.log("Cart deleted successfully!"); // Success
        }).catch(function(error){
            console.log(error); // Failure
            return res.status(400).send({
                status: "Failed",
                message: error.message || "Error while deleting user's cart from DB",
                error,
            });
        });

        if(deletedUser===0 && deletedCart===0){
            return res.status(400).send({
                status: "Failed",
                message: "User and respective cart not found in DB!"
            })
        }else if(deletedUser===0){
            return res.status(400).send({
                status: "Failed",
                message: "User not found in DB! || Cart deleted successfully!"
            })
        }else if(deletedCart===0){
            return res.status(400).send({
                status: "Failed",
                message: "cart not found in DB! || User deleted successfully!"
            })
        }

        next();

    } catch (error) {
        res.status(400).send({
			status: "Failed",
			message: error.message || "Error while deleting user and cart from DB",
			error,
		});
    }
}

module.exports = deleteUserAndCartFromDB;