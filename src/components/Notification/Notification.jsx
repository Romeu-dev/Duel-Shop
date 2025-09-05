import { useEffect } from 'react';
import './Notification.css';

const Notification = ({ notification, onRemove }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onRemove(notification.id);
    }, 5000); // Remove após 5 segundos

    return () => clearTimeout(timer);
  }, [notification.id, onRemove]);

  const handleClick = () => {
    onRemove(notification.id);
  };

  return (
    <div 
      className={`notification notification-${notification.type}`}
      onClick={handleClick}
    >
      <div className="notification-content">
        <span className="notification-icon">
          {notification.type === 'success' && '✅'}
          {notification.type === 'error' && '❌'}
          {notification.type === 'warning' && '⚠️'}
          {notification.type === 'info' && 'ℹ️'}
        </span>
        <span className="notification-message">{notification.message}</span>
        <button className="notification-close">×</button>
      </div>
    </div>
  );
};

export default Notification;
