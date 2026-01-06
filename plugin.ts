import { callable } from "@decky/api";

export const startStream = callable<
  { ip: string; port: number },
  void
>("start_stream");

export const stopStream = callable<{}, void>("stop_stream");
