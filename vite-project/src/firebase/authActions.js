import { signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth, googleProvider } from './config';
import { setUser, setError, setLoading, logout } from '../redux/store/authSlice';
import {doc,setDoc} from 'firebase/firestore';
import { db } from './config';

// Login con email y contraseña
export const loginEmailContra = (email, password) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const result = await signInWithEmailAndPassword(auth, email, password);
    const userData = {
      uid: result.user.uid,
      email: result.user.email,
      displayName: result.user.displayName || 'Sin nombre',
    };
    /*
    Para probar el inicio de sesión por correo se puede intentar con estos usuario:
    email: "fernando.gonza@zetook.com"
    contraseña: 123456

    email: "diana.ramirez@jerected.com"
    contraseña: chihuahua
    */

    dispatch(setUser(userData));

    await setDoc(doc(db, "usuarios", userData.uid), userData, { merge: true });
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

// Login con Google 
export const loginGoogle = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const result = await signInWithPopup(auth, googleProvider);

    const userData = {
      uid: result.user.uid,
      email: result.user.email,
      displayName: result.user.displayName || user.email,
    };

    dispatch(setUser(userData));

    await setDoc(doc(db, "usuarios", userData.uid), userData, { merge: true });

    
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

// Logout
export const logoutUser = () => async (dispatch) => {
  await signOut(auth);
  dispatch(logout());
};

export const saveUserToFirestore = async (user) => {
  const userRef = doc(db, "usuarios", user.uid);
  await setDoc(userRef, {
    uid: user.uid,
    email: user.email,
    displayName: user.displayName || user.email
  }, { merge: true });
};

