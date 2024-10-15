"use client";
import React, { ReactNode, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  onDismiss: () => void;
}
export const Modal = ({ children, isOpen, onDismiss }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      modalRef.current?.focus();
      window.document.body.style.overflow = "hidden";
    }

    return () => {
      window.document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      ref={modalRef}
      role='dialog'
      aria-modal='true'
      tabIndex={-1}
      className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'
      onClick={onDismiss}
    >
      <div
        className='bg-white p-6 max-w-4xl w-full m-4'
        onClick={(e) => e.stopPropagation()}
      >
        <div className='mb-4'>{children}</div>
      </div>
      <button className='absolute right-5 top-5 text-white text-2xl'>X</button>
    </div>,
    document.body
  );
};
