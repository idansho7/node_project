import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// success message
export function successMsg(message: string) {
  toast.success(message, {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 1000,
  });
}

// error message
export function errorMsg(message: string) {
  toast.error(message, {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 2000,
  });
}