import React, { FunctionComponent, ReactNode, useEffect } from "react";

import { ToastContainer, toast } from "react-toastify";
import useControl from "../hooks/useControl";

import "react-toastify/dist/ReactToastify.css";
interface Props {
  children: ReactNode;
}

const SnackbarProvider: FunctionComponent<Props> = ({ children }) => {
  const { snack, hideSnackbar } = useControl();

  useEffect(() => {
    if (snack.type) {
      switch (snack.type) {
        case "success":
          toast.success(snack.text);
          break;
        case "error":
          toast.error(snack.text);
          break;
        case "warning":
          toast.warning(snack.text);
          break;
        case "info":
          toast.info(snack.text);
          break;
        default:
          toast.error(snack.text);
          break;
      }
    }
  }, [snack]);

  return (
    <>
      <ToastContainer position="top-right" autoClose={4000} hideProgressBar />
      {children}
    </>
  );
};

export default SnackbarProvider;
