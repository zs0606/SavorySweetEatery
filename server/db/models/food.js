const db = require('../db')
const Sequelize = require('sequelize')

const Food = db.define('food', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  description: {
    type: Sequelize.TEXT
  },
  price: {
    type: Sequelize.DECIMAL(10, 2),
    validate: {
      min: 0
    }
  },
  type: {
    type: Sequelize.STRING,
    validate: {
      isIn: [['meal', 'breakfast', 'lunch', 'catering', 'children', 'desserts', 'drinks']]
    }
  },
  image: {
    type: Sequelize.STRING
  }
})
