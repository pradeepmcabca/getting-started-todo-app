const GREETING = ['Hello world!', 'Hola Mundo!',
     'Bonjour le monde!', 'Hallo Welt!', 'Ciao mondo!'
    ][Math.floor(Math.random() * greeting.length)];


module.exports = async (req, res) => {
    res.send({
        greeting: GREETING[Math.floor(Math.random() * GREETING.length)],
    });
};
