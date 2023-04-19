import { Toast } from "@ui5/webcomponents-react";
import { IToastComponent } from "./ToastComponent.interface";

export const ToastComponent = ({ message, toast }: IToastComponent) => {
  return (
    <Toast
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
