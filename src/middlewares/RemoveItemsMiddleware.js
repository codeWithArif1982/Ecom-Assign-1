const mongoose = require('mongoose');
const CartItem = require('./cartItemModel'); // Import the CartItem model
const Order = require('./orderModel'); // Import the Order model

const userSchema = new mongoose.Schema({
  // ... (other fields as before)
});

// Define a pre-remove middleware to remove associated cart items and orders
userSchema.pre('remove', async function (next) {
  try {
    // Remove associated cart items
    await CartItem.deleteMany({ user: this._id });

    // Remove associated orders
    await Order.deleteMany({ user: this._id });

    next();
  } catch (error) {
    next(error);
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
