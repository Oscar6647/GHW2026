// components/TextBox.tsx
import React from "react";

type Props = {
  children: React.ReactNode;
  variant?: string;
  size?: string;
  center?: boolean;
  className?: string;
  fit?: boolean;
};

const TextBox = ({
  children,
  variant = "default",
  size = "md",
  center = false,
  className = "",
  fit = false,
}: Props) => {
  const variants: Record<string, string> = {
    default: "bg-[#5a4fcf] border-gray-300 text-[#ffffff]",
    info: "bg-blue-100 border-blue-300 text-blue-900",
    warning: "bg-yellow-100 border-yellow-300 text-yellow-800",
    error: "bg-red-100 border-red-300 text-red-800",
  };

  const sizeMap: Record<string, string> = {
    sm: "text-sm px-4 py-2 leading-normal",
    md: "text-base px-5 py-3 leading-relaxed",
    lg: "text-lg px-30 py-40 leading-loose",
  };

  const variantClasses = variants[variant] || variants.default;
  const sizeClasses = sizeMap[size] || sizeMap["md"];
  const textAlign = center ? "text-center" : "";
  const fitClass = fit ? "inline-block w-fit" : "w-full";

  return (
    <div
      className={`border rounded-md ${variantClasses} ${sizeClasses} ${textAlign} ${fitClass} ${className}`}
    >
      {children}
    </div>
  );
};

export default TextBox;
