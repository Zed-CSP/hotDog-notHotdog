import React, { useState } from 'react';
import './App.css';
import ImageUploader from './components/ImageUploader';
import ResultDisplay from './components/ResultDisplay';

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [result, setResult] = useState(null);

  return (
    <div className="App flex flex-col items-center p-6 min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Not Hotdog</h1>
      <ImageUploader setSelectedImage={setSelectedImage} setResult={setResult} />
      
      {selectedImage && (
        <div className="image-preview mt-4">
          <img
            src={URL.createObjectURL(selectedImage)}
            alt="Uploaded"
            className="w-72 h-72 object-cover rounded shadow-md"
          />
        </div>
      )}
      {result && <ResultDisplay result={result} />}
    </div>
  );
}

export default App;
