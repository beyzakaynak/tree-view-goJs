const {readFileSync} = require('fs');

let loadTurkiye = () => JSON.parse(readFileSync('turkiye.json'));
module.exports = {loadTurkiye};