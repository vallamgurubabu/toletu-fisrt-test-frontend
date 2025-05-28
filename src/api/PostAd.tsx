import imageCompression from "browser-image-compression";

export const createAd = async (category: string, formData: Record<string, any>) => {
  const form = new FormData();
  form.append("category", category);

  for (const [key, value] of Object.entries(formData)) {
    if (key === "images" && Array.isArray(value)) {
      for (const file of value) {
        const compressed = await imageCompression(file as File, { maxSizeMB: 1 });
        form.append("images", compressed);
      }
    } else {
      form.append(key, value as string | Blob);
    }
  }

  await fetch("/api/ads", {
    method: "POST",
    body: form,
  });
};
