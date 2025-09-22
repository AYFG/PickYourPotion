"use server";

export async function naverLogout(accessToken: string) {
  const clientId = process.env.NAVER_CLIENT_ID;
  const clientSecret = process.env.NAVER_CLIENT_SECRET;

  if (!accessToken || !clientId || !clientSecret) {
    throw new Error("Missing parameters for Naver logout");
  }

  const response = await fetch("https://nid.naver.com/oauth2.0/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "delete",
      client_id: clientId,
      client_secret: clientSecret,
      access_token: accessToken,
      service_provider: "NAVER",
    }),
  });
  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Naver logout failed: ${text}`);
  }

  const data = await response.json();
  return data;
}
