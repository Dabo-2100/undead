import { atom } from "recoil";

export const $modalIndex = atom({
  key: "modalIndex",
  default: false,
});

export const $sharedCounter = atom({
  key: "sharedCounter",
  default: 100,
});
