// pages/DynamicPostAdFormPage.tsx
import { useParams } from "react-router-dom";
import { adSchema } from "@/schemas/adSchemas";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { createAd } from "@/api/PostAd";
import RenderFormField from "@/components/RenderFormField";

const DynamicPostAdFormPage = () => {
  const { category } = useParams();
  const slugCategory = category ?? "";
  console.log("slug:", slugCategory);

  const fields = adSchema[slugCategory] ?? null;
  const [formData, setFormData] = useState<any>({});

  const handleSubmit = async () => {
    await createAd(slugCategory, formData);
    // handle post-submit (redirect, notification etc.)
  };

  if (!fields) return <div className="text-center mt-10 text-red-500">Invalid category</div>;

  return (
    <div className="space-y-4 p-4 max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold text-center">
        Post a {slugCategory.replace("-", " ")} Ad
      </h2>

      {fields.map((field) => (
        <RenderFormField
          key={field.name}
          field={field}
          value={formData[field.name]}
          onChange={(value) =>
            setFormData((prev: any) => ({
              ...prev,
              [field.name]: value,
            }))
          }
        />
      ))}

      <Button className="w-full mt-4" onClick={handleSubmit}>
        Post Ad
      </Button>
    </div>
  );
};

export default DynamicPostAdFormPage;
