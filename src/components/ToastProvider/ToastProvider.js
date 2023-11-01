import React from 'react';


export const ToastContext = React.createContext();

function ToastProvider({ children }) {

  const [toasts, setToasts] = React.useState([]);

  const addToast = (message, variant) => {
    const id = crypto.randomUUID();
    setToasts([...toasts, { id, message, variant }]);
  }

  const removeToast = (id) => {
    setToasts(toasts.filter((t) => t.id !== id));
  }

  const clearToasts = () => {
    setToasts([]);
  }

  const value = {
    toasts,
    addToast,
    removeToast,
    clearToasts,
  }

  return <ToastContext.Provider value={value}>{children}</ToastContext.Provider>;
}

export default ToastProvider;
