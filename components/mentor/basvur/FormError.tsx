import React from "react";
import { AlertCircle } from "lucide-react";

const FormError = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="flex items-center gap-1.5 text-xs lg:text-sm font-medium text-red-500 mt-1 animate-[fadeIn_0.2s_ease-in-out] group">
      <AlertCircle className="w-4 h-4 " />
      {children}
    </span>
  );
};

export default FormError;
