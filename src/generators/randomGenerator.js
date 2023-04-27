const axios = require("axios");

async function getPickupLine() {
    const options = {
        method: 'GET',
        url: 'https://pickup-lines-api.p.rapidapi.com/pickupline',
        headers: {
          'content-type': 'application/octet-stream',
          'X-RapidAPI-Key': '0deb873396msha037650d9ebbe44p117cbbjsn8c000cad25c0',
          'X-RapidAPI-Host': 'pickup-lines-api.p.rapidapi.com'
        }
    };
      
    try {
        const response = await axios.request(options);
        return response.data.line;
    } catch (error) {
        console.error(error);
    }
}

module.exports = { getPickupLine };
