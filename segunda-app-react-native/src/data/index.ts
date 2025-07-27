import { initializeApp } from "firebase/app"; 'firebase/app';

const admin = require('firebase-admin');
const firebaseConfig = {
    apiKey: "AIzaSyAuVeyEJ_hflI3yAaWsT2B5IQOVGHw85o8",
    authDomain: "periodiconaranja-74484.firebaseapp.com",
    projectId: "periodiconaranja-74484",
    storageBucket: "periodiconaranja-74484.appspot.com",
    messagingSenderId: "108011034403",
    appId: "1:108011034403:web:32752d54a6d29905361e96",
    measurementId: "G-EXQG3C9DR3",
    databaseURL: "https://periodiconaranja-74484-default-rtdb.europe-west1.firebasedatabase.app/"
};


const adminConfig = {
  type: "service_account",
  project_id: "periodiconaranja-74484",
  private_key_id: "634db277a111f22f9cf9bdff122d0c367a303094",
  private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC19ia985aKz3z6\nd+eZpN+LLOWfWn7G0j0A4gbKFdv3VZul/Pk6hl3XFxEzurqRt06gSTVOPMqv1kH7\nNGQTdwDpsMaPTWSOTNzGf7HUNR2FnfgzoIkumjSIEgdm8SPOtZ6V+sIB5U2vyHSm\n1m8vvaePdyEiSIi1b/nJznWXqWLTF5yfvV4Nmlvp52ylgJ/Gzc4kMxz+HY988Drh\n0whgyE7OCm7jpUqQ4ZPClosrBLMQTc5wnSm1aQAeHgdVoiFW+cGFQzrPwkLQNLP2\nCjr3SXLZVhG0q6xi/OEoV7f4EmL/iwl5PCIb8IuwIBCulise9PcwuHecYuUOgfBL\nQvH8sgjxAgMBAAECggEAAskG9HRkkwZfCt8dUprqoxDns5CT4ouNodRT4fGuDB3+\n2RkYtYkgqZixoOGUVoOq9prNmpTP+MYQ/NKN+kWhjseFGo9xi8NobmS+U5m73x45\nEjfnBv7BnBhD4xMA3HqnjUh+ghSWTlZarBfEhu4NFmND72g903fTJ9V7CPxvm1Hk\nGDKIZhm/MFD9hIRWXp6lcxzHn8dQ0mIWyU/d1Obf7LjBUBuGwU84errfMiQ75RKb\nylfdBsYVKPibDh+/syjSzR4DOwusc0EO1P+tT4QzjP0VMKFrZD/DZgKUsf9kYAxL\n2qiHuwm+ftyaBv1oyoo6f07CuGV+9JY8QxUwyxTzOwKBgQDfWH7oZMhbfVqgVgId\nekc5k7+1lK44MxIpzGS0Azd/y5jasajKrGsQaecRsR+SKeYS19CecJ4II29KrP0j\n62Kr8xKt/d18z4m4hVLOuNM5dDSXb/MPWxZ4GavBdVHTuR5SassqcX6msVKUprWt\nLOSmHmUUBZt0vDyKl3hAmX4nCwKBgQDQkLTt3QMuC3JCCYYGCAuPZPeTVR63nYIR\nvzjfa0sZtrDbjnMHWy0Hdp+WI6h3+ESNHykrXdve6gb77iY0Wjsuw985p68Oftuz\nrKRKIGN+NLH/jUC1yLNVl8zUjNo9KT8abDYWyCN/3qqNMLlKc8gAuC1buRb4BRHC\nbQfXzzbdcwKBgQCAJEUDzrcJjt1NOquSABMXXMbURo7CncKhCq0IfwP7pXN4ng/K\n4Ku4yhoSE36anMFtNDd0gAabgsEapi/CyQ1evGKOQyYtsuFAZfYBtxcxUpPOAyQA\nPnGgzJG3uDkPcZmNDcqs+lsBBqHruc5oomY5TR0PJLxxeIJ/vbH31lkDywKBgBFG\n+4X82geVcSihS1XykqqVTaEJ2xqQ1LaNpbN0WutNZAc8HLFOT0OgAwZX+9u8WEls\nfGeYRd+IeX2jM80AcIimNza6elj0D1UqBw4Q8s0ApoIp/GNStfBwO8qbxHRul0ik\nEDMA71fnZS9/CsptHvNYToGbqphvKxJ1H8Iz6zKbAoGAcAzpJLbfq0xP7pFVsCU1\nlCAOCbJ9ijzqxAd2zB8rpV8jSTva9e1uZ+dl+FszZFixLGtWVZ/I7JiRMRj+5FgH\ny4V+4KT0JezxNRafl/hVOLe5GIZDqQnb3b74cAoLCqr6OszySYv6P4V6VN6W5k4L\nZ9vW1x2CKOMbo8H3BXhAOhQ=\n-----END PRIVATE KEY-----\n",
  client_email: "firebase-adminsdk-ez63j@periodiconaranja-74484.iam.gserviceaccount.com",
  client_id: "106274842051462257222",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-ez63j%40periodiconaranja-74484.iam.gserviceaccount.com",
  universe_domain: "googleapis.com"
}


const firebaseApp = initializeApp(firebaseConfig);

admin.initializeApp({
  credential: admin.credential.cert(adminConfig),
  databaseURL: firebaseConfig.databaseURL
});



export { firebaseApp, admin };