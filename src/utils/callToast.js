import { toast } from "react-toastify";

function callToast(text, tipo = "success") {
  toast[`${tipo}`](`${text}`, {
    position: "top-center",
    style: {
      textAlign: "center",
      margin: "auto",
    },
    autoClose: false,
  });
}

export function callFinishToast(minutes) {
  if (minutes === 0) {
    callToast(`Este Pomodoro fue muy corto para añadirlo`, "warning");
  } else {
    callToast(
      `¡Felicidades! Has terminado un Pomodoro de ${minutes} ${
        minutes > 1 ? "minutos" : "minuto"
      }`
    );
  }
}

export default callToast;
