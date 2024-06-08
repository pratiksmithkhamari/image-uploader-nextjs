"use client";

import { CldUploadButton } from "next-cloudinary";
import { CldImage } from "next-cloudinary";
import { useState } from "react";

export type uploadResult = {
  info: {
    public_id: string;
  };
  event:'success'
};

export default function Home() {
  const [imageId, setImageId] = useState("");

  return (
    <main className="flex flex-col bg-black min-w-[80%] text-white min-h-[80%] justify-center items-center">

       
      <CldUploadButton
        onUpload={(results: uploadResult) => {
          console.log(results.info.public_id);
          setImageId(results.info.public_id);
        }}
        uploadPreset="s42sxogr"
      />
      {imageId && <CldImage
        width="300"
        height="300"
        src={imageId}
        sizes="100vw"
        alt="Description of my image"
      />}
    </main>
  );
}
