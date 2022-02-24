import React from "react";
import TailwindColors from "tailwindcss/colors";

type tailwindColors = typeof TailwindColors;
type tailwindColorKeys = keyof tailwindColors;

type colorNames = keyof typeof TailwindColors;

type colorGrade = {
    [key in tailwindColorKeys]: boolean;
}

const colorMap: Partial<colorGrade> = {
    black: true
}

export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
    border: string;
    color: string;
    children?: React.ReactNode;
    height: string;
    onClick: () => void;
    radius: string
    width: string;
}