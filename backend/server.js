require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Helper function to send message to Telegram
const sendToTelegram = async (message) => {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId || botToken === "your_telegram_bot_token" || chatId === "your_telegram_chat_id") {
    console.warn("Telegram bot token or chat ID is not configured. Skipping Telegram notification.");
    return false;
  }

  try {
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    await axios.post(url, {
      chat_id: chatId,
      text: message,
      parse_mode: "HTML",
    });
    return true;
  } catch (error) {
    console.error("Error sending message to Telegram:", error.response ? error.response.data : error.message);
    return false;
  }
};

// Route to handle Book Demo form submission
app.post("/api/book-demo", async (req, res) => {
  try {
    const { name, education, phone, email, place } = req.body;

    if (!name || !phone) {
      return res.status(400).json({ error: "Name and Phone Number are required." });
    }

    console.log("Received new Demo Booking:", { name, education, phone, email, place });

    // Format the message for Telegram
    const message = `
<b>🔔 New Demo Booking!</b>

<b>Name:</b> ${name}
<b>Education:</b> ${education || "N/A"}
<b>Phone Number:</b> ${phone}
<b>Email:</b> ${email || "N/A"}
<b>Place:</b> ${place || "N/A"}
    `.trim();

    // Send to Telegram
    const telegramSuccess = await sendToTelegram(message);

    res.status(200).json({ 
      success: true, 
      message: "Booking submitted successfully!",
      telegramSent: telegramSuccess
    });
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).json({ error: "Internal server error. Please try again later." });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
