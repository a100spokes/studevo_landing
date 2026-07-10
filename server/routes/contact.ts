import type { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

export async function handleContact(req: Request, res: Response) {
  const { topic, email, name, subject, message } = req.body;

  if (!email || !name || !message) {
    return res.status(400).json({ error: "Please fill in all required fields." });
  }

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    return res.status(500).json({ error: "Telegram is not configured." });
  }

  const text = [
    `📩 *New Contact Form Submission*`,
    ``,
    `*Topic:* ${topic || "General"}`,
    `*Name:* ${name}`,
    `*Email:* ${email}`,
    `*Subject:* ${subject || "—"}`,
    ``,
    `*Message:*`,
    message,
  ].join("\n");

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text,
          parse_mode: "Markdown",
        }),
      }
    );

    if (!response.ok) {
      const err = await response.text();
      console.error("Telegram API error:", err);
      return res.status(500).json({ error: "Failed to send message." });
    }

    return res.json({ success: true });
  } catch (err) {
    console.error("Telegram send error:", err);
    return res.status(500).json({ error: "Failed to send message." });
  }
}
