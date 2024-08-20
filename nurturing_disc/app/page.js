import Header from "@/components/Header";
import Home from "./home/page";
import { ToastContainer } from "react-toastify";

export default function start() {
  return (
    <>
      <ToastContainer
        position="top-center"
        theme="light"
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Home />
    </>
  );
}
