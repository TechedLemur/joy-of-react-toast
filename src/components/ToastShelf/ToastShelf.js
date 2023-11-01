import React, { useEffect } from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { ToastContext } from '../ToastProvider';
import useEscapeKey from '../../hooks/useEscapeKey';
function ToastShelf() {

  const { toasts, clearToasts } = React.useContext(ToastContext);

  useEscapeKey(clearToasts);

  return (
    <ol className={styles.wrapper} role='region' aria-live='polite' aria-label='Notification'>
      {toasts.map(({ id, message, variant }) => (
        <li key={id} className={styles.toastWrapper}>
          <Toast id={id} variant={variant}>{message}</Toast>
        </li>
      ))}

    </ol>
  );
}

export default ToastShelf;
