const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const tf = require('@tensorflow/tfjs-node');
const mobilenet = require('@tensorflow-models/mobilenet');

const app = express();
const port = 3001;

const upload = multer({ dest: 'uploads/' });

app.use(express.static(path.join(__dirname, 'public')));

app.post('/upload', upload.single('image'), async (req, res) => {
  const image = fs.readFileSync(req.file.path);
  const decodedImage = tf.node.decodeImage(image);
  const model = await mobilenet.load();
  const predictions = await model.classify(decodedImage);
  
  const isHotdog = predictions.some(pred => pred.className.toLowerCase().includes('hotdog'));
  res.json({ result: isHotdog ? 'Hotdog' : 'Not Hotdog' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
