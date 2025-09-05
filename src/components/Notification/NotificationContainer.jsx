import { useApp } from '../../context/AppContext';
import Notification from './Notification';

const NotificationContainer = () => {
  const { notifications, removeNotification } = useApp();

  return (
    <div className="notification-container">
      {notifications.map((notification) => (
        <Notification
          key={notification.id}
          notification={notification}
          onRemove={removeNotification}
        />
      ))}
    </div>
  );
};

export default NotificationContainer;
