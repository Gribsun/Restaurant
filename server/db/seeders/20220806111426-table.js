'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
        "Tables",
        [
          {
            name: 'First Table',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: 'Second Table',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: 'Third Table',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: 'Table Four',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ],
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Tables", null, {});
  }
};
