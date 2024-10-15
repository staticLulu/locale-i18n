import React, { useEffect } from "react";

interface ToastProps {
  message: string;
  duration?: number;
  onClose?: () => void;
  type?: "success" | "error" | "info" | "warning";
}

const Toast: React.FC<ToastProps> = ({
  message,
  duration = 3000,
  onClose,
  type = "info",
}) => {
  useEffect(() => {
    const timer = onClose && setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const typeClasses = {
    success: "bg-green-500",
    error: "bg-red-500",
    info: "bg-blue-500",
    warning: "bg-yellow-500",
  };

  return (
    <div
      className={`fixed  flex items-center justify-start top-10 z-[99999] h-16 w-1/4 right-10 ${typeClasses[type]} text-white px-4 py-2 transition-opacity duration-300`}
    >
      <div className='absolute right-5 top-2'>
        <button>X</button>
      </div>
      <div className='relative'>
        <span className='text-sm text-left'>{message}</span>
      </div>
    </div>
  );
};

export default Toast;
