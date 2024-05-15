import React, { forwardRef } from "react";

type MyInputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;
const Input = forwardRef<HTMLInputElement, MyInputProps>(function (
  { type,name,title,autoComplete,className,onChange },
  ref
) { return <div className="mb-3">
        <label htmlFor={name} className="form-label">{title}</label>
        <input 
            type={type} 
            name={name}
            id={name}
            ref={ref}
            autoComplete={autoComplete}
            className={className}
            onChange={onChange}
        />
    </div>
});

export default Input
