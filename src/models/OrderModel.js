const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true },
  items: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: 'products', required: true },
      quantity: { type: Number, required: true, min: 1 }
    }
  ],
  totalAmount: { type: Number, required: true, min: 0 },
  shippingAddress: { type: String, required: true },
  status: { type: String, required: true, default: 'Pending' }
});

const orderModel = mongoose.model('orders', orderSchema);

module.exports = orderModel;
