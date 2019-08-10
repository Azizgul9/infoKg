const mongoose = require('mongoose');
const nanoid = require('nanoid');
const config = require('./config');

const Information = require('./models/Information');
const Category = require('./models/Category');
const User = require('./models/User');

const run = async () => {
  await mongoose.connect(config.infoDb, config.mongoOptions);
  const connection = mongoose.connection;
  const collections = await connection.db.collections();

    for(let collection of collections){
        await collection.drop();
    }

    await User.create(
        {
            username: 'user@gmail.com',
            password: "123",
            role: 'user',
            token: nanoid()
        },
        {
            username: 'azizgul@gmail.com',
            password: "123",
            role: 'azizgul@gmail.com',
            token: nanoid()
        },
    );

    const category = await Category.create(
        {title: "Ооруканалар"},
        {title: "Бала-бакчалар"},
        {title: "Ресторандар"},
        {title: "Стоматологиялык клиникалар"},
        {title: "Бассейндер"},
        {title: "Мамлекеттик каттоо жайлары"},
        {title: "Супер маркеттер"},
    );

    await Information.create(
        {
            category: category[1]._id,
            name: "Монтессори бала-бакчасы \"СемьЯ\"",
            address: 'Узун-Булак көчөсү 65, Бишкек 720000',
            phone: '0704 153 777',
            image: "semya.png"
        },
        {
            category: category[1]._id,
            name: "Бала-бакча №53",
            address: 'г. Бишкек, Медина Алыбаева',
            phone: '0312 927 237',
            image: "garden53.jpg"
        },
        {
            category: category[1]._id,
            name: "Академия Роста - Джал",
            address: 'г. Бишкек, ул.Узун-Булак 65, верхний мкр.Джал, Бишкек 720000',
            phone: '0554 782 828',
            image: "academy.jpg"
        },
        {
            category: category[1]._id,
            name: "\"Зерек\" бала-бакчасы",
            address: 'Бакаев көчөсү, Бишкек',
            phone: '0312 883 902',
            image: "academy.jpg"
        },
        {
            category: category[0]._id,
            name: 'Улуттук бейтапкана',
            address: 'Бишкек шаары',
            phone: '0312 621 014',
            image: "gos.jpg"
        },
        {
            category: category[1]._id,
            name: 'Эмкана 312',
            address: 'Исанов көчөсү 60, Бишкек',
            phone: '0312 312 554',
            image: "polic312.jpg"
        },
        {
            category: category[2]._id,
            name: 'Тюбетейка',
            address: 'Турусбеков көчөсү 31, Бишкек',
            phone: '0312 317 979',
            image: "tubeika.jpg"
        },
        {
            category: category[2]._id,
            name: '"SALTANAT PALACE\' банкеттик залы',
            address: 'Матыев көчөсү 260, Бишкек',
            phone: '0707 350 777',
            image: "saltanat.jpg"
        },
        {
            category: category[4]._id,
            name: 'Дельфин',
            address: 'Жаш Гвардия 59, Бишкек',
            phone: '0779 344 194',
            image: "delfin.jpg"
        },
        {
            category: category[4]._id,
            name: 'Royal sport',
            address: 'Чүй проспекти, Бишкек',
            phone: '0312 689 489',
            image: "royalSport.jpg"
        },
        {
            category: category[6]._id,
            name: '7 дней',
            address: 'Манас проспекти 28, Бишкек',
            phone: '0312 312 844',
            image: "7days.jpg"
        },

    );

    await connection.close();
};

run().catch(error => {
    console.log('Something went wrong', error);
});