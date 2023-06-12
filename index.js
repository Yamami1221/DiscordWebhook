require('dotenv').config();
const { WebhookClient } = require('discord.js');
const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});
const fs = require('fs');

rl.question('Enter webhook URL: ', (url) => {
    const id = url.split('/')[5];
    const token = url.split('/')[6];
    const dataPath = './data.json';

    const webhookClient = new WebhookClient({ id: id, token: token });

    rl.question('What do you want to do? (send, edit, delete) ', (action) => {
        if (action === 'send') {
            rl.question('Do you already have a data file? (y/n) ', (answer) => {
                if (answer === 'y') {
                    const dataRaw = fs.readFileSync(dataPath);
                    const data = JSON.parse(dataRaw);
                    try {
                        webhookClient.send(data);
                    } catch (error) {
                        console.log('There was an error sending the message.');
                        console.log(error);
                    }
                    rl.close();
                } else if (answer === 'n') {
                    fs.writeFileSync(dataPath, '{}');
                    rl.question('please fill out the data.json file and press enter when done', () => {
                        const dataRaw = fs.readFileSync(dataPath);
                        const data = JSON.parse(dataRaw);
                        try {
                            webhookClient.send(data);
                        } catch (error) {
                            console.log('There was an error sending the message.');
                            console.log(error);
                        }
                        rl.close();
                    });
                } else {
                    console.log('Invalid answer.');
                    rl.close();
                }
            });
        } else if (action === 'edit') {
            rl.question('Enter message ID: ', (messageId) => {
                const dataRaw = fs.readFileSync(dataPath);
                const data = JSON.parse(dataRaw);
                try {
                    webhookClient.editMessage(messageId, data);
                } catch (error) {
                    console.log('There was an error editing the message.');
                    console.log(error);
                }
                rl.close();
            });
        } else if (action === 'delete') {
            rl.question('Enter message ID: ', (messageId) => {
                webhookClient.deleteMessage(messageId);
                rl.close();
            });
        } else {
            console.log('Invalid action.');
            rl.close();
        }
    });
});