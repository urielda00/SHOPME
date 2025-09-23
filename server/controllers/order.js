// Controller WTC:  O(n)

import Order from '../models/Order.js';
import moment from 'moment/moment.js';

//The schema's that involve while creating an order:
import User from '../models/User.js';
import Address from '../models/Address.js';
import Invoice from '../models/Invoice.js';
import Product from '../models/Products.js';

//Logger:
import { OrderErrorLogger, OrderInfoLogger } from '../middleware/winston.js';

const currentDate = moment();

// CREATE ORDER
export const createOrder = async (req, res) => {
	try {
		const { address, products, userName } = req.body;

		// Fetch the user first:
		const user = await User.findOne({ userName });
		if (!user) return res.status(404).send('User not found');

		const userId = user._id;
		const dateIs = currentDate.format('MMMM Do YYYY, h:mm:ss a');
		const date = dateIs;

		let orderTotalPrice = 0;
		let productsId = [];

		// save the order id when its create:
		let laterOrderId = '';

		// Loop over the items in the cart and update quantity + calculate totalPrice:
		for (const product of products) {
			await Product.findByIdAndUpdate(
				product._id,
				{ $inc: { quantity: -Number(product.itemQuantity) } },
				{ new: true }
			);

			orderTotalPrice += product.price * Number(product.itemQuantity);
			productsId.push(product._id);
		}

		// Create new order:
		const saveOrder = new Order({
			address: [address.AddressLine],
			date,
			userId,
			productsId,
			totalPrice: orderTotalPrice,
		});
		await saveOrder.save();

		laterOrderId = saveOrder._id;

		// Update User's order list:
		await User.findOneAndUpdate(
			{ _id: userId },
			{
				$push: {
					orders: laterOrderId,
				},
			},
			{ new: true }
		);

		OrderInfoLogger.log('info', 'Order has been successfully placed! status code: 201');
		res.status(201).json({ message: 'Your order has been successfully placed' });
	} catch (error) {
		OrderErrorLogger.log('error', `${error.message}. status code: 500`);
		res.status(500).json(error.message);
	}
};

//READ USER ORDERS
export const readOrders = async (req, res) => {
	try {
		const id = req.params.id;
		const orders = await Order.find({ userId: id });

		OrderInfoLogger.log('info', 'Orders fetched successfully! status code: 200');
		res.status(200).json(orders);
	} catch (error) {
		OrderErrorLogger.log('error', `${error.message}. status code: 500`);
		res.status(500).json(error.message);
	}
};
