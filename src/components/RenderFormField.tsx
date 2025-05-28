// components/RenderFormField.tsx
import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import type { FormField } from "@/schemas/adSchemas";

interface Props {
  field: FormField;
  value: any;
  onChange: (value: any) => void;
}

const RenderFormField: React.FC<Props> = ({ field, value, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onChange(field.type === "number" ? parseFloat(e.target.value) : e.target.value);
  };

  switch (field.type) {
    case "text":
    case "number":
      return (
        <div className="space-y-1">
          <Label htmlFor={field.name}>{field.label}</Label>
          <Input
            id={field.name}
            type={field.type}
            placeholder={field.placeholder}
            required={field.required}
            value={value ?? ""}
            onChange={handleChange}
          />
        </div>
      );

    case "textarea":
      return (
        <div className="space-y-1">
          <Label htmlFor={field.name}>{field.label}</Label>
          <Textarea
            id={field.name}
            placeholder={field.placeholder}
            required={field.required}
            value={value ?? ""}
            onChange={handleChange}
          />
        </div>
      );

    case "select":
      return (
        <div className="space-y-1">
          <Label htmlFor={field.name}>{field.label}</Label>
          <Select onValueChange={onChange} value={value ?? ""}>
            <SelectTrigger>
              <SelectValue placeholder={field.placeholder || "Select an option"} />
            </SelectTrigger>
            <SelectContent>
              {field.options?.map((opt) => (
                <SelectItem key={opt} value={opt}>
                  {opt}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      );

    case "checkbox":
      return (
        <div className="flex items-center space-x-2">
          <Checkbox
            id={field.name}
            checked={!!value}
            onCheckedChange={(checked) => onChange(!!checked)}
          />
          <Label htmlFor={field.name}>{field.label}</Label>
        </div>
      );

    case "image":
      return (
        <div className="space-y-1">
          <Label htmlFor={field.name}>{field.label}</Label>
          <Input
            id={field.name}
            type="file"
            accept="image/*"
            multiple
            onChange={(e) => onChange(Array.from(e.target.files || []))}
          />
        </div>
      );

    case "date":
      return (
        <div className="space-y-1">
          <Label htmlFor={field.name}>{field.label}</Label>
          <Input
            id={field.name}
            type="date"
            value={value ?? ""}
            onChange={handleChange}
          />
        </div>
      );

    default:
      return null;
  }
};

export default RenderFormField;
