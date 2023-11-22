const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL || 'postgres://postgres:123@localhost:5432/ecommerce', {
  dialect: 'postgres',
  logging: false, // Set to true to log SQL queries, if needed
  define: {
    timestamps: false, // Disable timestamps (createdAt and updatedAt) if not needed
  },
 
});

module.exports = sequelize;

