module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
        "Foods",
        [
          {
            name: 'Onion soup',
            cost: 19,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: 'Tomato soup',
            cost: 19,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: 'Greek salad',
            cost: 15,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: 'Prawn cocktail',
            cost: 27,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: 'Club sandwich',
            cost: 9,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: 'Oysters',
            cost: 39,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: 'Schnitzel',
            cost: 100,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ],
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Foods", null, {});
  }
};
