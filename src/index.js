const messages = [
    "Oscar",
    "Ana",
    "Nicolay",
    "Yesica",
    "Diego",
    "laura",
    "carolina",
    "paulina",
    "susana"
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
};

module.exports = { randomMsg };