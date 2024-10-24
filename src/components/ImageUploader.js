import React from 'react';

function ImageUploader({ setSelectedImage, setResult }) {
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);

    // Mock result for now (hotdog or not hotdog)
    const mockResult = Math.random() > 0.5 ? 'Hotdog' : 'Not Hotdog';
    setResult(mockResult);
  };

  return (
    <div className="image-uploader">
      <label className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        Upload Image
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="hidden"
        />
      </label>
    </div>
  );
}

export default ImageUploader;
