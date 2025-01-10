"use client";

import { Feature } from "./Feature";
import { PrimaryButton } from "./buttons/PrimaryButton";
import { SecondaryButton } from "./buttons/SecondaryButton";
import { useRouter } from "next/navigation";

export const Hero = () => {
    const router = useRouter();
  return (
    <div>
        <div className="flex justify-center">
            <div className="text-5xl font-semibold text-center pt-8 max-w-xl">
                Automate as fast as you type
            </div>    
        </div>
        <div className="flex justify-center">
            <div className="text-xl font-normal text-center pt-8 max-w-2xl">
                AI Gives you automation superpowers, and Zapier puts them to work. Piring AI and Zapier helps you turn ideas into
                workflows and bots that work for you.    
            </div>    
        </div>        
        <div className="flex justify-center pt-8">
            <div className="flex">
                <PrimaryButton onClick={() => {router.push("/signup")}} size="big">Get Started Free</PrimaryButton>
                <div className="pl-4">
                <SecondaryButton onClick={()=> {}} size="big">Contact Sales</SecondaryButton>
                </div>
            </div>
        </div>
        <div className="flex justify-center pt-4 ">
            <Feature title="Free Forever" subtitle="For core features"/>
            <Feature title="More Apps" subtitle="than any other platforms"/>
            <Feature title="Cutting Edge" subtitle="AI Features"/>
        </div>
    </div>
  )
}
