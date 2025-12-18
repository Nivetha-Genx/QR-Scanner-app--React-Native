
import React, {
  createContext,
  useState,
  useEffect,
  useRef,
} from 'react';
import { registerForPushNotificationsAsync } from '../utils/registerForPushNotificationsAsync';
import * as Notifications from 'expo-notifications';
import { Subscription } from 'expo-modules-core';


const NotificationContext = createContext(undefined);

export const useNotification = () => {
  const context = React.useContext(NotificationContext);


  if (context === undefined) {
    throw new Error('useNotification must be used within a NotificationProvider');
  }

  return context;
};


export const NotificationProvider = ({ children }) => {
  const [expoPushToken, setExpoPushToken] = useState(null);
  const [notification, setNotification] = useState(null);
  const [error, setError] = useState(null);

  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {

    registerForPushNotificationsAsync().then(
      (token) => setExpoPushToken(token),
      (err) => setError(err)
    );

    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        console.log(
          'Notification Received while the app is running.',
          notification
        );
        setNotification(notification);
      });

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(
          'Notification Response Received: user interacted with notification.',
          JSON.stringify(response, null, 2),
          JSON.stringify(
            response.notification.request.content.data,
            null,
            2
          )
        );
      });

    return () => {
      if (notificationListener.current) {
        Notifications.removeNotificationSubscription(
          notificationListener.current
        );
      }

      if (responseListener.current) {
        Notifications.removeNotificationSubscription(
          responseListener.current
        );
      }
    };
  }, []);

  return (
    <NotificationContext.Provider
      value={{ expoPushToken, notification, error }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationContext;

