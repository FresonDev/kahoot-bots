# **Kahoot Bot Spammer 🚀🤖**

Welcome to the **Kahoot Bot Spammer**! This script allows you to automate the process of joining Kahoot challenges using multiple bots. Simply provide a challenge ID, set the number of bots, and specify a custom prefix for their nicknames. The script will generate random nicknames and join the challenge with them! 😎🎮

### Features ✨

- Customisable number of bots 🧑‍💻🤖
- Set a custom nickname prefix for the bots 🏷️
- Fetches the base URL (encoded in Base64) from a Public CDN to make it faster 📡
- Sends POST requests to join a specific Kahoot challenge 🎯
- Delays between requests to avoid spam ⚡

### How it Works 🔧

1. **Set Challenge ID**: You provide the Kahoot challenge ID where the bots will join.
2. **Choose Number of Bots**: Set how many bots you want to send to the challenge.
3. **Pick a Prefix**: Give the bots a custom nickname prefix (e.g., "Bot_" for bots like "Bot_A1", "Bot_B2", etc.).
4. **Automatic Requesting**: The script will automatically send requests to join the challenge with the randomly generated nicknames. It waits 1.5 seconds between each bot to prevent spamming too quickly.

### Requirements 📋

- **Node.js**: Ensure that you have Node.js installed to run the script.
- **NPM**: NPM is used to install dependencies.

### Installation ⚙️

1. Clone or download the repository:
   ```
   git clone https://github.com/FresonDev/kahoot-bots.git
   ```

2. Navigate into the project directory:
   ```
   cd kahoot-bots
   ```

3. Install the required dependencies:
   ```
   npm install
   ```

### Usage 🚀

To run the bot spammer, use the following command:

```
npm start
```

You will be prompted to provide the following details:
- **Challenge ID**: Enter the Kahoot challenge ID you want the bots to join.
- **Number of Bots**: Enter how many bots you wish to send to the challenge.
- **Bots Prefix**: Choose a prefix for the bot nicknames (e.g., "Bot_").

The script will then start sending the requests, one every 1.5 seconds, with randomly generated nicknames!

### Notes ⚠️

- **Respect Terms**: Use this tool responsibly and ensure you are not violating any terms of service by spamming or abusing the system.
- **Delay**: The script includes a 1.5-second delay between each request to avoid ratelimit errors or flooding the system too quickly.

### License 📝

This project is licensed under the MIT License. See the LICENSE file for more details.
