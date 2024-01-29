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

export default callToast;
