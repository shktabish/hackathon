const readline = require("readline");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

async function run () {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const chat = model.startChat({
        history : [],
        generationConfig: {
            maxOutputTokens: 500,
        },
    });

    async function askAndRespond() {
        rl.question("You: ", async (msg) =>{
            if(msg.toLowerCase() === "exit") {
                rl.close();
            } else {
                const result = await chat.sendMessage(msg);
                const response = await result.response;
                const text = await response.text();
                console.log("AI: ", text);
                askAndRespond();
            }
        });
    }

    askAndRespond();
}

run();
