type PersonalityTone = "default" | "funny" | "advice" | "educational" | "professional";

export async function generateAIResponse(
  message: string,
  temperature: number = 0.7,
  personalityTone: PersonalityTone = "default",
): Promise<string> {
  const res = await fetch("/api/Chat-gemini", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      message,
      temperature,
      personalityTone,
    }),
  });

  if (!res.ok) {
    throw new Error("Failed to generate AI response");
  }

  const data = await res.json();
  return data.response;
}