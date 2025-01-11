import clsx from "clsx";
import { HTMLInputTypeAttribute } from "react";
import { Control, Controller } from "react-hook-form";
import Input from "@/components/ui/forms/Input";

interface InputProps {
  name: string;
  control: Control<any>;
  rules?: {
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    pattern?: RegExp;
    validate?: (value: string) => boolean | string | Promise<boolean | string>;
  };
  label?: string;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  value?: string;
  disabled?: boolean;
  readonly?: boolean;
  hasError?: boolean;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  color?: "darker";
  [key: string]: any;
}

export default function ControlledInput({
  control,
  name,
  rules,
  ...rest
}: InputProps) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules ?? {}}
      render={({ field, fieldState: { error } }) => (
        <Input hasError={!!error} {...field} {...rest} />
      )}
    />
  );
}
