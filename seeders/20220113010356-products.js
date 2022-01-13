'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'items',
      [
        {
          name: 'Journey',
          category: 'Game',
          price: 60,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'My Morning Jacket: Okonokos',
          category: 'Album',
          price: 35,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Audio Technica M150',
          category: 'Headphones',
          price: 150,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {})
  }
};
