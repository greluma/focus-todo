import soundTicking from "../../public/clock-ticking.mp3";

export function createAudioElement(src) {
  const audio = new Audio(src);
  return audio;
}

export const soundList = [
  { name: "Ticking", sound: soundTicking, id: 1 },
  { name: "Ticking2", sound: soundTicking, id: 2 },
  { name: "Ticking3", sound: soundTicking, id: 3 },
  { name: "Ticking4", sound: soundTicking, id: 4 },
  { name: "Ticking5", sound: soundTicking, id: 5 },
  { name: "Ticking6", sound: soundTicking, id: 6 },
  { name: "Ticking7", sound: soundTicking, id: 7 },
];
