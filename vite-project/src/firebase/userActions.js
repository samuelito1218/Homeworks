import { getDocs, collection } from 'firebase/firestore';
import { db } from './config';

export const fetchUsers = async () => {
  const snapshot = await getDocs(collection(db, "usuarios"));
  return snapshot.docs.map(doc => doc.data());
};
