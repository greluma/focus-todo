import soundTicking from "../../public/clock-ticking.mp3";

export function createAudioElement(src) {
  const audio = new Audio(src);
  return audio;
}

export const soundList = [
  { name: "Ninguna", sound: null, id: 0 },
  { name: "Ticking", sound: soundTicking, id: 1 },
  { name: "Ticking-2", sound: soundTicking, id: 2 },
  { name: "Ticking-3", sound: soundTicking, id: 3 },
  { name: "Ticking-4", sound: soundTicking, id: 4 },
  { name: "Ticking-5", sound: soundTicking, id: 5 },
  { name: "Ticking-6", sound: soundTicking, id: 6 },
  { name: "Ticking-7", sound: soundTicking, id: 7 },
];
