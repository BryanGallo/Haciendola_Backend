import Sequelize from "sequelize";
import dotenv from "dotenv";
dotenv.config({ path: ".env" });

const db = new Sequelize(
    process.env.BD_NAME,
    process.env.BD_USER,
    process.env.BD_PASS,
    {
        host: process.env.BD_HOST,
        port: process.env.BD_PORTDB,
        dialect: "mysql",
        timezone: "America/Bogota",
        define: {
            timestamps: true,
        },
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 1000,
        },
    }
);

export default db;
