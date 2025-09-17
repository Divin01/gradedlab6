import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

// No need for initializeApp if using react-native-firebase v6+
// It auto-initializes with the google-services.json/GoogleService-Info.plist

export { auth, firestore };