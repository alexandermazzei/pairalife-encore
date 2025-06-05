import { api } from "encore.dev/api";

interface PingResponse {
  message: string;
}

export const ping = api(
  { expose: true, method: "GET", path: "/ping" },
  async (): Promise<PingResponse> => {
    return { message: "pong" };
  }
); 