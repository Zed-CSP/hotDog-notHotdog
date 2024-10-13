import React, { useState } from 'react';
import * as mobilenet from '@tensorflow-models/mobilenet';
import '@tensorflow/tfjs';

function App() {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState('');

  const loadImage = (event) => {
    const file = event.target.files[0];
    setImage(URL.createObjectURL(file));
  };

  const classifyImage = async () => {
    const imgElement = document.getElementById('uploadedImage');
    const model = await mobilenet.load();
    const predictions = await model.classify(imgElement);
    
    // Check if any predictions match 'hotdog'
    if (predictions.some(pred => pred.className.toLowerCase().includes('hotdog'))) {
      setResult('Hotdog!');
    } else {
      setResult('Not Hotdog!');
    }
  };

  return (
    <div className="App">
      <h1>Hotdog / Not Hotdog</h1>
      <input type="file" accept="image/*" onChange={loadImage} />
      {image && (
        <div>
          <img id="uploadedImage" src={image} alt="Uploaded" width="300" />
          <button onClick={classifyImage}>Classify</button>
        </div>
      )}
      {result && <h2>{result}</h2>}
    </div>
  );
}

export default App;
