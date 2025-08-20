"use client";

import * as React from "react";
import { cn } from "./utils";

interface RadioGroupProps {
  value?: string;
  onValueChange?: (value: string) => void;
  className?: string;
  children?: React.ReactNode;
}

function RadioGroup({ 
  className, 
  value, 
  onValueChange,
  children,
  ...props 
}: RadioGroupProps) {
  return (
    <div
      className={cn("grid gap-3", className)}
      role="radiogroup"
      {...props}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as any, { 
            groupValue: value, 
            onGroupChange: onValueChange 
          });
        }
        return child;
      })}
    </div>
  );
}

interface RadioGroupItemProps {
  value: string;
  id?: string;
  className?: string;
  groupValue?: string;
  onGroupChange?: (value: string) => void;
}

function RadioGroupItem({
  className,
  value,
  id,
  groupValue,
  onGroupChange,
  ...props
}: RadioGroupItemProps) {
  const isChecked = groupValue === value;
  
  return (
    <div className="flex items-center">
      <input
        type="radio"
        id={id}
        value={value}
        checked={isChecked}
        onChange={() => onGroupChange?.(value)}
        className={cn(
          "aspect-square size-4 shrink-0 rounded-full border border-gray-300 text-blue-600 shadow-sm transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        {...props}
      />
    </div>
  );
}

export { RadioGroup, RadioGroupItem };