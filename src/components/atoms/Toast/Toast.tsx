import { useEffect } from 'react';
import {ToastHooks} from "@/hooks/ToastHooks.ts";
import "./Toast.scss";

const Toast = () => {
  const {toast, closeToast} = ToastHooks();

  useEffect(() => {
    closeToast();
  }, [toast]);

  return (
      <div className={`toast ${toast && "open"}`}>
          <strong>Plantopia</strong>
          <p>{toast}</p>
      </div>
  );
};

export default Toast;
