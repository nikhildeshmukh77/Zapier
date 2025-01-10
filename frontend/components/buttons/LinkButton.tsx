"use client";
import { ReactNode } from "react"

export const LinkButton = ({children, onClick} : {children:ReactNode, onClick: () => void}) => {
  return   <div className="px-4 py-2 cursor-pointe hover:bg-slate-100" onClick={onClick}>
        {children}
    </div>
}
