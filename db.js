const Sequelize = require("sequelize");

const db = new Sequelize("shoppingdb", "shopper", "shoppass", {
	host: "localhost",
	dialect: "mysql",
});

const User = db.define("users", {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	},

	name: {
		type: Sequelize.STRING,
		allowNull: false,
	},
});

const Product = db.define("products", {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	},
	name: {
		type: Sequelize.STRING,
		allowNull: false,
	},

	manufacturer: Sequelize.STRING,

	price: {
		type: Sequelize.FLOAT,
		allowNull: false,
		defaultValue: 0.0,
	},
});

db.sync()
	.then(() => console.log("Database Synced"))
	.catch((err) => {
		console.log("Error Creating DB");
	});

exports = module.exports = {
	User,
	Product,
};
