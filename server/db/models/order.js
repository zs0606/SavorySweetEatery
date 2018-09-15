const db = require('../db')
const Sequelize = require('sequelize')

const Order = db.define('order', {
  firstname: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastname: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  phone: {
    allowNull: false
  },
  dateofevent: {

  },
  timeofevent: {

  },
  address: {

  }
})
