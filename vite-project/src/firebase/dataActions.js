import {collection, getDocs, addDoc, deleteDoc, doc, updateDoc} from "firebase/firestore";
import { db } from "./config";
import {setItems, setLoading as setDataLoading, setError} from "../redux/store/dataSlice";
  
  const collectionName = "Documentos";
  
  export const fetchItems = () => async (dispatch) => {
    dispatch(setDataLoading(true));
    try {
      const querySnapshot = await getDocs(collection(db, collectionName));
      const items = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      dispatch(setItems(items));
    } catch (error) {
      dispatch(setError(error.message));
    } finally {
      dispatch(setDataLoading(false));
    }
  };
  
  export const createNewItem = (data) => async (dispatch) => {
    dispatch(setDataLoading(true));
    try {
      await addDoc(collection(db, collectionName), data);
      dispatch(fetchItems());
    } catch (error) {
      console.error("Error al agregar documento:", error.code, error.message, error.details);
      dispatch(setError(error.message));
    } finally {
      dispatch(setDataLoading(false));
    }
  };
  
  
  export const deleteItem = (id) => async (dispatch) => {
    dispatch(setDataLoading(true));
    try {
      await deleteDoc(doc(db, collectionName, id));
      dispatch(fetchItems());
    } catch (error) {
      dispatch(setError(error.message));
    } finally {
      dispatch(setDataLoading(false));
    }
  };
  
  export const updateItem = (id, data) => async (dispatch) => {
    dispatch(setDataLoading(true));
    try {
      await updateDoc(doc(db, collectionName, id), data);
      dispatch(fetchItems());
    } catch (error) {
      dispatch(setError(error.message));
    } finally {
      dispatch(setDataLoading(false));
    }
  };
  
  