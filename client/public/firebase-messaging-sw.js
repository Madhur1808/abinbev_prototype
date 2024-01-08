importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyC_66WRTnKE9JfVDJ7e6lF7Etx8dD2xtOE",
  authDomain: "testpushnotie.firebaseapp.com",
  projectId: "testpushnotie",
  storageBucket: "testpushnotie.appspot.com",
  messagingSenderId: "1011779897516",
  appId: "1:1011779897516:web:0735856671c60bc7b47709",
  measurementId: "G-LHF8D8200Z",
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload?.notification?.body,
    icon: payload?.notification?.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
