import * as firebase from 'firebase';

export const inicializarFirebase = () => {
    firebase.initializeApp({
        messagingSenderId: "317069251470"
    });

    firebase.messaging().usePublicVapidKey('BGotnM_5UVz2zY4BFMk6mOmk_AYa84hLja1ZMhYI-35RULU4FkmH2UoBhnBlf4w5Wxf1gcuef-UBYDE_B6NfYfo');
};

export const pedirPermissaoParaReceberNotificacoes = async () => {
    try {
        const messaging = firebase.messaging();
        await messaging.requestPermission();
        const token = await messaging.getToken();
        console.log('token do usuário:', token);
        return token;
    } catch (error) {
        console.error(error);
    }
};

export  const get = () => {
    const messaging = firebase.messaging();
    messaging.onMessage(function(payload){

        const { notification } = payload;

        const alex = new Notification(notification.title, {
            image: notification.icon,
            icon: notification.icon,
            body: notification.body
        });
        console.log(alex);
    })
};

