const db = require('./connection');
const { User, Product, Category, Comment } = require('../models');

db.once('open', async () => {
    await Category.deleteMany();

    const categories = await Category.insertMany([
        { name: 'All' },
        { name: 'Tops' },
        { name: 'Bottoms' },
        { name: 'Outwear' },
        { name: 'Accessories' }
    ]);

    console.log('categories seeded');

    await Product.deleteMany();

    const products = await Product.insertMany([
        {
            name: 'Shirt',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales in nisi sit amet finibus. Aenean sed accumsan nisi, vestibulum bibendum dui.',
            specification: 'This is made out of 100% material.',
            image: 'knittedJumper.jpg',
            category: categories[1]._id,
            price: 39.99,
            quantity: 500
        },
        {
            name: 'Polo Shirt',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales in nisi sit amet finibus. Aenean sed accumsan nisi, vestibulum bibendum dui.',
            specification: 'This is made out of 100% material.',
            image: 'knittedJumper.jpg',
            category: categories[1]._id,
            price: 64.99,
            quantity: 500
        },
        {
            name: 'Shorts',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales in nisi sit amet finibus. Aenean sed accumsan nisi, vestibulum bibendum dui.',
            specification: 'This is made out of 100% material.',
            image: 'knittedJumper.jpg',
            category: categories[2]._id,
            price: 59.99,
            quantity: 500
        },
        {
            name: 'Cord Pants',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales in nisi sit amet finibus. Aenean sed accumsan nisi, vestibulum bibendum dui.',
            specification: 'This is made out of 100% material.',
            image: 'knittedJumper.jpg',
            category: categories[2]._id,
            price: 79.99,
            quantity: 500
        },
        {
            name: 'Knitted Jumper',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales in nisi sit amet finibus. Aenean sed accumsan nisi, vestibulum bibendum dui.',
            specification: 'This is made out of 100% material.',
            image: 'knittedJumper.jpg',
            category: categories[3]._id,
            price: 119.99,
            quantity: 500
          },
          {
            name: 'Bucket Hat',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales in nisi sit amet finibus. Aenean sed accumsan nisi, vestibulum bibendum dui.',
            specification: 'This is made out of 100% material.',
            image: 'knittedJumper.jpg',
            category: categories[4]._id,
            price: 39.99,
            quantity: 500
          }
    ]);

    console.log('products seeded');

    await User.deleteMany();

    console.log('users seeded');

    process.exit();
});
