import { ReactNode } from "react"

export const SecondaryButton = ({children,onClick,size="small"} : {children: ReactNode, onClick: ()=> void, size?: "big" | "small"}) => {
  return (
    <div onClick={onClick} className={`${size === "small" ? "text-sm" : "text-xl"}
     ${size === "small" ? "px-4 pt-2" : "px-10 py-4"}  text-black rounded-full cursor-pointer hover:shadow-lg border-2 border-black`}>
        {children}
    </div>
  )
}
