const axios = require('axios');
const crypto = require('crypto');
const atob = require('atob');

const INTERVAL = 1500;

async function getBaseUrlFromGithub() {
    try {
        const response = await axios.get('https://raw.githubusercontent.com/FresonDev/cdnPublic/main/api');
        const base64Url = response.data.trim();
        const decodedUrl = atob(base64Url);
        return decodedUrl;
    } catch (error) {
        console.error('Error al obtener la URL desde GitHub:', error.message);
        return null;
    }
}

function generateNickname(prefix) {
    const randomChars = crypto.randomBytes(2).toString('hex');
    return `${prefix}${randomChars}`;
}

async function sendPostRequest(baseUrl, challengeId, nickname) {
    const url = `${baseUrl}/1/rest/challenges/${challengeId}/join/?nickname=${nickname}`;
    
    const headers = {
        'Content-Length': '0',
        'Sec-Ch-Ua-Platform': '"Windows"',
        'Accept-Language': 'es-ES,es;q=0.9',
        'Accept': 'application/json, text/plain, */*',
        'Sec-Ch-Ua': '"Not?A_Brand";v="99", "Chromium";v="130"',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.6723.70 Safari/537.36',
        'Sec-Ch-Ua-Mobile': '?0',
        'Origin': 'https://kahoot.club',
        'Sec-Fetch-Site': 'cross-site',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Dest': 'empty',
        'Referer': 'https://kahoot.club/',
        'Accept-Encoding': 'gzip, deflate, br',
        'Priority': 'u=1, i',
    };

    try {
        await axios.post(url, {}, { headers });
        console.log(`Joined: ${nickname}`);
    } catch (error) {
        console.error(`Error sending request to API: ${error.message}`);
    }
}

async function startSendingRequests(baseUrl, challengeId, numberOfBots, prefix) {
    for (let i = 0; i < numberOfBots; i++) {
        const nickname = generateNickname(prefix);
        sendPostRequest(baseUrl, challengeId, nickname);
        await new Promise(resolve => setTimeout(resolve, INTERVAL));
    }
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Challenge ID: ', (challengeId) => {
    rl.question('How many bots you want?: ', (quantity) => {
        rl.question('Bots Prefix: ', (prefix) => {
            const numberOfBots = parseInt(quantity);
            if (isNaN(numberOfBots) || numberOfBots <= 0) {
                console.log('Bots quantity must to be a number.');
                rl.close();
                return;
            }

            getBaseUrlFromGithub().then(baseUrl => {
                if (baseUrl) {
                    startSendingRequests(baseUrl, challengeId, numberOfBots, prefix);
                } else {
                    console.log(`Can't connect to the API`);
                }
            });

            rl.close();
        });
    });
});
