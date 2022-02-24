import React from "react";
import { ButtonProps } from './Button.types'
import { ButtonMock } from './Button.mock'

const Button:React.FC<ButtonProps> = ({ 
  border,
  color,
  children,
  height,
  onClick, 
  radius,
  width
}) => {

  return (
    <button 
      onClick={onClick}
      className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
    {children}
    </button>
  )
}

export default Button