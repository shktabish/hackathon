const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

async function sendMessage(req, res) {
  const { message } = req.body;

  if (!message || message.toLowerCase() === "exit") {
    return res.status(400).json({ error: "Invalid message" });
  }

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const chat = model.startChat({
      history: [],
      generationConfig: {
        maxOutputTokens: 500,
      },
    });

    const result = await chat.sendMessage(message);
    const response = await result.response;
    const text = await response.text();

    return res.status(200).json({ response: text });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = {
  sendMessage
};
