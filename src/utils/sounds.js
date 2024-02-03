import acelerado from "../assets/sounds/clock-ticking-1.mp3";
import relojAntiguo from "../assets/sounds/clock-ticking-2.mp3";
import relojAntiguo2 from "../assets/sounds/clock-ticking-4.mp3";
import classicTic from "../assets/sounds/clock-ticking-5.mp3";
import relojMesa from "../assets/sounds/clock-ticking-7.mp3";

export function createAudioElement(src) {
  const audio = new Audio(src);
  return audio;
}

export function searchSound(soundId) {
  return soundList.find((sound) => sound.id === soundId);
}

export const soundList = [
  { name: "Ninguna", sound: null, id: 0 },
  { name: "Tic Acelerado", sound: acelerado, id: 1 },
  { name: "Reloj Antiguo", sound: relojAntiguo, id: 2 },
  { name: "Reloj Antiguo 2", sound: relojAntiguo2, id: 4 },
  { name: "Tic Tac Clásico", sound: classicTic, id: 5 },
  { name: "Reloj de Mesa", sound: relojMesa, id: 7 },
];
