require("dotenv").config();
const pg = require("pg");
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(
	"postgresql://adrian:voQZyu17ue5TmENpuBbd3w@desert-gnu-3557.jxf.gcp-asia-southeast1.cockroachlabs.cloud:26257/submitease?sslmode=verify-full",
	{
		dialect: "postgres",
		dialectModule: pg,
		dialectOptions: {
			ssl: {
				require: true,
				rejectUnauthorized: false,
			},
		},
	}
);

const User = sequelize.define("User", {
	name: {
	  type: DataTypes.STRING,
	  allowNull: false,
	  defaultValue: ""
	},
	email: {
	  type: DataTypes.STRING,
	  allowNull: false,
	  unique: true,
	},
	password: {
	  type: DataTypes.STRING,
	  allowNull: false,
	},
  }
);

module.exports = {
	sequelize,
	User
};
