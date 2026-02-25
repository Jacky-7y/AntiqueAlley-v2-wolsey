import { useState } from 'react';

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null);
  const images = Array.from({ length: 16 }, (_, i) => `item${i + 1}.jpg`);

  return (
    <div className="container-custom">
      <h1 className="text-center text-3xl mb-12">Our Collection</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map(img => (
          <img key={img} src={`/images/${img}`} onClick={() => setSelectedImg(`/images/${img}`)} className="h-64 w-full object-cover cursor-pointer hover:scale-[1.02] transition-transform rounded" />
        ))}
      </div>
      {selectedImg && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-[5000]" onClick={() => setSelectedImg(null)}>
          <img src={selectedImg} className="max-h-[90vh] max-w-[90vw]" />
        </div>
      )}
    </div>
  );
}