"use client";
import { LinkButton } from "./buttons/LinkButton"
import { PrimaryButton } from "./buttons/PrimaryButton";
import { useRouter } from "next/navigation"
export const Appbar = () => {
    const router = useRouter();
    return <div className="flex border-b justify-between pt-3 pb-3 pr-4">
        <div className="flex flex-col justify-center text-2xl font-extrabold">
            Zapier
        </div>
        <div className="flex">
            <div className="pr-4">
            <LinkButton onClick={() => {}}>Contact Sales</LinkButton>
            </div>
            <div className="pr-4">
            <LinkButton onClick={() => {
                router.push("/login")
            }}>Login</LinkButton>
            </div>
            <PrimaryButton onClick={() => {router.push("/signup")}} >SignUp</PrimaryButton>
        </div>
    </div>
}