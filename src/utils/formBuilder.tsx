import type {FormField}  from "../schemas/adSchemas";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectItem } from "@/components/ui/select";
import ImageUploader from "@/components/ImageUploader";

export const renderFormField = (field: FormField, formData: any, setFormData: any) => {
  const handleChange = (e: any) => {
    setFormData((prev: any) => ({ ...prev, [field.name]: e.target.value }));
  };

  switch (field.type) {
    case "text":
    case "number":
      return (
        <Input
          key={field.name}
          type={field.type}
          placeholder={field.placeholder || field.label}
          value={formData[field.name] || ""}
          onChange={handleChange}
          required={field.required}
        />
      );
    case "textarea":
      return (
        <Textarea
          key={field.name}
          placeholder={field.placeholder || field.label}
          value={formData[field.name] || ""}
          onChange={handleChange}
          required={field.required}
        />
      );
    case "select":
      return (
        <Select
          key={field.name}
          value={formData[field.name] || ""}
          onValueChange={(value) => setFormData((prev: any) => ({ ...prev, [field.name]: value }))}
        >
          {field.options?.map((option) => (
            <SelectItem key={option} value={option}>
              {option}
            </SelectItem>
          ))}
        </Select>
      );
    case "image":
      return <ImageUploader key={field.name} onUpload={(files) => setFormData((prev: any) => ({ ...prev, [field.name]: files }))} />;
    default:
      return null;
  }
};
