import { Toast } from "@ui5/webcomponents-react";
import { IToastComponent } from "./ToastComponent.interface";
import styles from './ToastComponent.module.scss';

export const ToastComponent = ({ message, toast }: IToastComponent) => {
  return (
    <Toast
      className={styles.toastContainer}
      style={{
        fontSize: '14px',
        fontWeight: 'bold',
        color: 'red',
      }}
      duration={3000}
      ref={toast}
      placement="BottomCenter"
    >
      {message}
    </Toast>
  );
};
