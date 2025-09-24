const GREETING = ['Hello world!', 'Hola Mundo!',
     'Bonjour le monde!', 'Hallo Welt!', 'Ciao mondo!'
    ][Math.floor(Math.random() * 5)];


module.exports = async (req, res) => {
    res.send({
        greeting: GREETING[Math.floor(Math.random() * GREETING.length)],
    });
};
