const parties = require('./parties.json');

//console.log(parties);

//alt i node er moduler der kan importeres og eksporteres
const value = 1;
//key = value value = 1
const valueObject = ({
    value
});

//lav til et objekt når man vil importrere flere ting

module.exports = {
    parties,
    valueObject
};