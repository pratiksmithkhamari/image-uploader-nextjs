"use client";

import { CldUploadButton } from "next-cloudinary";
import React from "react";
import { uploadResult } from "../page";
import { Button } from "@/components/ui/button";

const Gallery = () => {
  return (
    <div className="flex mt-3 justify-between mx-4 w-full">
      <h1 className="text-4xl font-semibold ">Gallery</h1>
      <div className="flex gap-3">
        <Button asChild>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
              />
            </svg>

            <CldUploadButton className="text-[1.1rem]"
              onUpload={(results: uploadResult) => {
                console.log(results.info.public_id);
                //   setImageId(results.info.public_id);
              }}
              uploadPreset="s42sxogr"
            />
          </div>
        </Button>
      </div>
    </div>
  );
};

export default Gallery;
