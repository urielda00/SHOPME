// The worst time complexity in this controller: O(n)

import Order from '../models/Order.js';
import moment from 'moment/moment.js';

const currentDate = moment();

//The schema's that involve while creating an order:
import User from '../models/User.js';
import Address from '../models/Address.js';
import Invoice from '../models/Invoice.js';
import Product from '../models/Products.js';

//Logger:
import { OrderErrorLogger, OrderInfoLogger } from '../middleware/winston.js';

// CREATE ORDER
export const createOrder = async (req, res) => {
	try {
		const { address, products, userName } = req.body;
		const user = await User.findOne({ userName });
		const dateIs = currentDate.format('MMMM Do YYYY, h:mm:ss a');
		const date = dateIs;
		let orderTotalPrice = 0;
		let productsId = [];

		// save the order id when its create:
		let laterOrderId = '';

		// Loop over the items in the cart:
		for await (const product of products) {
			// 1) reduce the quantity of the product in the DB:
			await Product.findByIdAndUpdate(product._id, { $inc: { quantity: -Number(product.itemQuantity) } }, { new: true });

			// 2)Update the totalPrice of the order:
			let isPriceCalc = product.price * Number(product.itemQuantity);
			orderTotalPrice += isPriceCalc;
			productsId.push(product._id);
		} //the end of the forEach loop

		// Create new order:
		const saveOrder = new Order({
			address: [address.AddressLine],
			date,
			userId: user._id,
			productsId,
			totalPrice: orderTotalPrice,
		});
		await saveOrder.save();

		//Update Address
		const findUserAddress = await Address.findOne({ userId: user._id });
		// If user have address, check if the address is updated, if no- update. else- create new user address
		if (findUserAddress) {
			const isAddressUpdated = await Address.findOne({
				addressList: {
					$in: [address.AddressLine],
				},
			});

			// If the address is no updated, so update the address list array:
			if (!isAddressUpdated) {
				const updateAddress = await Address.findOneAndUpdate(
					{ userId: user._id },
					{
						$push: {
							addressList: address.AddressLine,
						},
					},
					{ new: true }
				);
			}
		} else {
			//If the user don't have cart:
			const createNewAddress = new Address({
				userId: user._id,
				fullAddressInfo: [address],
				addressList: [address.AddressLine],
			});
			await createNewAddress.save();
		}

		//Update Invoices:
		const searchInvoiceByUserId = await Invoice.findOne({ userId: user._id });
		const order = await Order.findOne({ date, userId: user._id });
		const orderId = order._id;
		laterOrderId = orderId;

		// if the user have invoice, update the orders array:
		if (searchInvoiceByUserId) {
			let someObj = { date, orderId, orderTotalPrice };
			await Invoice.findOneAndUpdate(
				{ userId: user._id },
				{
					$push: {
						orders: someObj,
					},
					userId: user._id,
					totalPrice: orderTotalPrice,
				}
			);
		} else {
			let someObj1 = { date, orderId, orderTotalPrice };
			const createNewInvoice = new Invoice({
				orders: [someObj1],
				date,
				userId: user._id,
				totalPrice: orderTotalPrice,
			});
			await createNewInvoice.save();
		}

		//Update User:
		// 1) update the order's string array in the user collection:
		await User.findOneAndUpdate(
			{ _id: user._id },
			{
				$push: {
					orders: laterOrderId,
				},
			},
			{ new: true }
		);

		OrderInfoLogger.log('info', 'order has been successfully placed! status code: 201');
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

		OrderInfoLogger.log('info', 'order has been successfully placed! status code: 200');
		res.status(200).json(orders);
	} catch (error) {
		OrderErrorLogger.log('error', `${error.message}. status code: 201`);
		res.status(500).json(error.message);
	}
};
