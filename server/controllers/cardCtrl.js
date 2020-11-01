const axios = require('axios');
const troopers = require('../controllers/arrayCtrl')

//card api

module.exports = {
    getOpenTroopers: (req, res) => {       
        const troopersArray = [];
        const rand1 = Math.ceil(Math.random() * troopers.length-1);
        const rand2 = Math.ceil(Math.random() * troopers.length-1);
        const rand3 = Math.ceil(Math.random() * troopers.length-1);
        const rand4 = Math.ceil(Math.random() * troopers.length-1);
        const rand5 = Math.ceil(Math.random() * troopers.length-1);
        const rand6 = Math.ceil(Math.random() * troopers.length-1);
        const rand7 = Math.ceil(Math.random() * troopers.length-1);
        const rand8 = Math.ceil(Math.random() * troopers.length-1);

        troopersArray.push(troopers[rand1])
        troopersArray.push(troopers[rand2])
        troopersArray.push(troopers[rand3])
        troopersArray.push(troopers[rand4])
        troopersArray.push(troopers[rand5])
        troopersArray.push(troopers[rand6])
        troopersArray.push(troopers[rand7])
        troopersArray.push(troopers[rand8])
        res.status(200).send(troopersArray)
    }
}