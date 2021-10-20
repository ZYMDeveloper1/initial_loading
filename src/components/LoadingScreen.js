import React, { useState, useEffect } from 'react';
import LoadingBar from 'react-top-loading-bar';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    let timer = setTimeout(() => setProgress((state) => state + 1), 100);
    return () => {
      clearTimeout(timer);
    };
  }, [progress]);
  return (
    <LoadingBar
      color="#f11946"
      progress={progress}
      onLoaderFinished={() => setProgress(0)}
    />
  );
}
