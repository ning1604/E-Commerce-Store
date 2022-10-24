const db = require('./connection');
const { User, Product, Category, Comment } = require('../models');

db.once('open', async () => {
    await Category.deleteMany();

    const categories = await Category.insertMany([
        { name: 'Tops' },
        { name: 'Bottoms' },
        { name: 'Outwear' },
        { name: 'Accessories' }
    ]);

    console.log('categories seeded');

    await Product.deleteMany();

    const products = await Product.insertMany([
        {
            name: 'Button Up Shirt',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales in nisi sit amet finibus. Aenean sed accumsan nisi, vestibulum bibendum dui.',
            specification: 'This is made out of 100% material.',
            image: 'buttonUpShirt.jpg',
            category: categories[0]._id,
            price: 59.99,
            quantity: 500
        },
        {
            name: 'Polo Shirt',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales in nisi sit amet finibus. Aenean sed accumsan nisi, vestibulum bibendum dui.',
            specification: 'This is made out of 100% material.',
            image: 'poloShirt.jpg',
            category: categories[0]._id,
            price: 64.99,
            quantity: 500
        },
        {
            name: 'Striped Shorts',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales in nisi sit amet finibus. Aenean sed accumsan nisi, vestibulum bibendum dui.',
            specification: 'This is made out of 100% material.',
            image: 'stripedShorts.jpg',
            category: categories[1]._id,
            price: 49.99,
            quantity: 500
        },
        {
            name: 'Denim Jeans',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales in nisi sit amet finibus. Aenean sed accumsan nisi, vestibulum bibendum dui.',
            specification: 'This is made out of 100% material.',
            image: 'denimJeans.jpg',
            category: categories[1]._id,
            price: 179.99,
            quantity: 500
        },
        {
            name: 'Knitted Jumper',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales in nisi sit amet finibus. Aenean sed accumsan nisi, vestibulum bibendum dui.',
            specification: 'This is made out of 100% material.',
            image: 'knittedJumper.jpg',
            category: categories[2]._id,
            price: 119.99,
            quantity: 500
        },
        {
            name: 'Sweatshirt',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales in nisi sit amet finibus. Aenean sed accumsan nisi, vestibulum bibendum dui.',
            specification: 'This is made out of 100% material.',
            image: 'sweatshirt.jpg',
            category: categories[2]._id,
            price: 79.99,
            quantity: 500
        },
        {
            name: 'Beanie',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales in nisi sit amet finibus. Aenean sed accumsan nisi, vestibulum bibendum dui.',
            specification: 'This is made out of 100% material.',
            image: 'beanie.jpg',
            category: categories[3]._id,
            price: 45.99,
            quantity: 500
        }
    ]);

    console.log('products seeded');

    await User.deleteMany();

    console.log('users seeded');

    process.exit();
});
