import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";


const appID = "a67695e9e01c4c55850990640c4129b2";
const token = "006a67695e9e01c4c55850990640c4129b2IACvH9Xr7O8lMbGw4E33sMFpRSRQ6dCsPqwmb8KEKwPROWTNKL8AAAAAEAAjgBf2frpaYgEAAQCCulpi";

export const config = { mode: "rtc", codec: "vp8", appID: appID, token: token };

export const useClient = createClient(config);

export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();

export const channelName = "main";