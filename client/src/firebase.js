import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyC_66WRTnKE9JfVDJ7e6lF7Etx8dD2xtOE",
  authDomain: "testpushnotie.firebaseapp.com",
  projectId: "testpushnotie",
  storageBucket: "testpushnotie.appspot.com",
  messagingSenderId: "1011779897516",
  appId: "1:1011779897516:web:0735856671c60bc7b47709",
  measurementId: "G-LHF8D8200Z",
};

const app = initializeApp(firebaseConfig);
export const messaging = getMessaging();
const analytics = getAnalytics(app);
