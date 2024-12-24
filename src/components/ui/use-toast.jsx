import { useState } from "react";

let listeners = [];

export function useToast() {
  const [toasts, setToasts] = useState([]);

  function toast({ title, description, action, variant = "default" }) {
    const id = Math.random().toString(36).substring(7);
    const newToast = { id, title, description, action, variant };
    setToasts((prev) => [...prev, newToast]);
    listeners.forEach((listener) => listener(newToast));
  }

  return { toasts, toast };
}

export function ToastProvider({ children }) {
  return <>{children}</>;
}
