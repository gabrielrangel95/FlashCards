import { AsyncStorage } from 'react-native';
import { Notifications, Permissions } from 'expo';
import dayjs from 'dayjs';

const notificationObject = {
  title: 'Practice your Quiz on FlashCards Today',
  body: 'You did not practice yet today!',
  ios: {
    sound: true
  },
  android: {
    sound: true,
    priority: 'high',
    sticky: false,
    vibrate: true,
  }
}


async function notificationsConfig() {
  const value = await AsyncStorage.getItem('@FlashCards:lastQuizDate')
  //const lastView = JSON.parse(value);
  const lastView = null;
  if(lastView === null){
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS)
    console.log(status);
    if (status === 'granted') {
      console.log('autorizado')
      Notifications.cancelAllScheduledNotificationsAsync()

      let tomorrow = dayjs().add(1, 'day');

      const scheduleOptions = {
        time: t,
        repeat: 'minute',
      }


      Notifications.scheduleLocalNotificationAsync(
        notificationObject,
        scheduleOptions
      )

      AsyncStorage.setItem('@FlashCards:lastQuizDate', JSON.stringify(true))
    }
  }
}

async function clearNotifications() {
  await AsyncStorage.removeItem('@FlashCards:lastQuizDate')
    .then(Notifications.cancelAllScheduledNotificationAsync)
}

export { notificationsConfig, clearNotifications }
