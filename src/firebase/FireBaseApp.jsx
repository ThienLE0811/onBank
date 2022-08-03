import { collection, doc, getDocs } from "firebase/firestore";
import React, { useEffect } from "react";
import { db } from "./firebase-config";

const FireBaseApp = () => {
  useEffect(() => {
    const colRef = collection(db, "onbank");

    //1. get collection data (onbank)
    getDocs(colRef)
      .then((snapshot) => {
        let posts = [];
        snapshot.docs.forEach((doc) => {
          posts.push({
            id: doc.id,
            ...doc.data(),
          });
        });
      })
      .catch((err) => {});
  }, []);

  return <div></div>;
};

export default FireBaseApp;
