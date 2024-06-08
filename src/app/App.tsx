import React from 'react';
import { Providers } from './providers/ui/Providers';
import './styles/index.css';
import { getDownloadURL,  ref } from 'firebase/storage';
import { storage } from '../shared/config/firebase';

export const App = () => {
  React.useEffect(() => {
    async function createDoc() {
      const starsRef = ref(storage, 'songs/Kanye West Wolves.mp3');

      // Get the download URL
      getDownloadURL(starsRef)
        .then((url) => {
          console.log(url);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    createDoc();
  }, []);
  return <Providers></Providers>;
};
