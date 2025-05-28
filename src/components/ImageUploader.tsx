import { useState } from "react";

const ImageUploader = ({ onUpload }: { onUpload: (files: File[]) => void }) => {
  const [previews, setPreviews] = useState<string[]>([]);

  const handleFiles = (e: any) => {
    const files = Array.from(e.target.files);
    setPreviews(files.map((file: any) => URL.createObjectURL(file)));
    onUpload(files);
  };

  return (
    <div>
      <input type="file" accept="image/*" multiple onChange={handleFiles} />
      <div className="flex gap-2 mt-2">
        {previews.map((src, i) => (
          <img key={i} src={src} className="w-20 h-20 object-cover rounded" />
        ))}
      </div>
    </div>
  );
};

export default ImageUploader;
