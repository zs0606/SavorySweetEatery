const db = require('../db')
const Sequelize = require('sequelize')

const Partner = db.define('partner', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  address: {
    type: Sequelize.STRING,
  },
  phone: {
    type: Sequelize.STRING
  },
  website: {
    type: Sequelize.STRING
  }
})
