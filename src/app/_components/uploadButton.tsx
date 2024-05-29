"use client";

import { UploadButton as UploadThingButton } from "~/utils/uploadthing";
import { useRouter } from "next/navigation";

import React from "react";

const UploadButton = () => {
  const router = useRouter();

  return (
    <div>
      <UploadThingButton
        endpoint="imageUploader"
        onClientUploadComplete={() => router.refresh()}
      />
    </div>
  );
};

export default UploadButton;
