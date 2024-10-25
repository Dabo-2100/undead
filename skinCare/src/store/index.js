import { atom } from "recoil";

export const $baseURL = atom({
  key: "$baseURL",
  default: "http://localhost:1337",
});
