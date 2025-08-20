"use client";

import { toast } from "sonner";

// Простая функция для показа уведомлений
const showToast = {
  success: (message: string) => {
    // Создаем простое уведомление с помощью браузерного API
    if ('Notification' in window) {
      if (Notification.permission === 'granted') {
        new Notification('Успешно!', { body: message });
      } else {
        console.log('Успешно:', message);
      }
    } else {
      console.log('Успешно:', message);
    }
  },
  error: (message: string) => {
    if ('Notification' in window) {
      if (Notification.permission === 'granted') {
        new Notification('Ошибка!', { body: message });
      } else {
        console.log('Ошибка:', message);
      }
    } else {
      console.log('Ошибка:', message);
    }
  }
};

// Простой компонент уведомлений
function Toaster() {
  return (
    <div 
      id="toast-container"
      className="fixed top-4 right-4 z-50 flex flex-col gap-2 pointer-events-none"
    />
  );
}

export { Toaster, showToast as toast };