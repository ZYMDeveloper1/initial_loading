import React, { useState, useEffect } from 'react';
import LoadingBar from 'react-top-loading-bar';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    if (progress < 100) {
      let timer = setTimeout(() => setProgress((state) => state + 1), 30);
      return () => {
        clearTimeout(timer);
      };
    }
  });

  return (
    <>
      {progress === 100 ? null : (
        <LoadingBar color="#f11946" progress={progress} />
      )}
    </>
  );
}
