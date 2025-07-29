import * as React from "react";

export function Toast({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div {...props}>{children}</div>;
}

export function ToastTitle({ children }: { children: React.ReactNode }) {
  return <strong>{children}</strong>;
}

export function ToastDescription({ children }: { children: React.ReactNode }) {
  return <p>{children}</p>;
}

export function ToastClose() {
  return <button>Close</button>;
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

export function ToastViewport() {
  return <div id="toast-root" />;
}
export function Toaster() {
  return (
    <ToastProvider>
      <Toast>
        <ToastTitle>Sample Title</ToastTitle>
        <ToastDescription>This is a description.</ToastDescription>
        <ToastClose />
      </Toast>
      <ToastViewport />
    </ToastProvider>
  );
}