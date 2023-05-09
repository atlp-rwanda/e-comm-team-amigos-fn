import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
const firebaseConfig = {
	apiKey: 'AIzaSyDfjV0gXgB5pGIE23dymvFU2sEbp1x2XZs',
	authDomain: 'amigos-product-images.firebaseapp.com',
	projectId: 'amigos-product-images',
	storageBucket: 'amigos-product-images.appspot.com',
	messagingSenderId: '676868136675',
	appId: '1:676868136675:web:d49b92f9a2ab9b0474afd6',
};
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
