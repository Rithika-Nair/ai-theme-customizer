import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Helper to safely parse JSON from GPT output
function parseJSONFromAI(text) {
  try {
    // Try normal JSON parse first
    return JSON.parse(text);
  } catch {
    // Fallback: extract first {...} block
    const match = text.match(/\{[\s\S]*\}/);
    if (match) {
      try {
        return JSON.parse(match[0]);
      } catch (err) {
        console.error("Failed to parse extracted JSON:", match[0]);
        return null;
      }
    }
    return null;
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { businessName, businessDescription } = body;

    if (!businessName || !businessDescription) {
      return new Response(JSON.stringify({ error: "Missing fields" }), { status: 400 });
    }

    const prompt = `
You are a brand designer. Given a business name and description, suggest a modern well-blended website theme. 
Return your answer in JSON format with only these keys: 
"bgColor", "textColor", "accentColor", "fonts: logo, heading, body", "headline", "subtext", "ctatext", "design rationale". 
The rationale should be less than 50 words. 
Name: ${businessName} -- Description: ${businessDescription}
    `;

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
    });

    const text = response.choices[0].message.content;
    console.log("AI raw response:", text);

    const themeJson = parseJSONFromAI(text);

    if (!themeJson) {
      return new Response(JSON.stringify({ error: "Invalid JSON from AI", raw: text }), { status: 500 });
    }

    return new Response(JSON.stringify({ theme: themeJson }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("API route error:", err);
    // Handle OpenAI 429 (quota) errors gracefully
    if (err.code === "insufficient_quota") {
      return new Response(JSON.stringify({ error: "OpenAI quota exceeded" }), { status: 429 });
    }
    return new Response(JSON.stringify({ error: "Server error", details: err.message }), { status: 500 });
  }
}
