"use client";
import { CheckFeature } from "@/components/CheckFeature"
import { Appbar } from "@/components/Appbar"
import { Input } from "../../components/Input"
import { PrimaryButton } from "@/components/buttons/PrimaryButton";
export default function () {
  return ( 
    <div>
        <Appbar/>
    <div className="flex pt-20">
        <div className="flex-1 pt-10 px-4">
            <div className="font-semibold text-2xl pb-4">
                Join millions worldwide who automate their work using zapier
            </div>
            <div className="pb-6">
            <CheckFeature label="Easy setup, no coding required"/>    
            </div>
            <div className="pb-6">
            <CheckFeature label="Free forever for core features"/>
            </div>
            <div className="pb-6">
            <CheckFeature label="14-day trial of premium features and apps"/>
            </div>
        </div>
    <div className="flex-1">
        <div className="pb-8">
        <Input label="Email" onChange={() => {}} type="text" placeholder="Your Email"/>
        </div>
        <div className="pb-8">
        <Input label="Password" onChange={() => {}} type="password" placeholder="Your Password"/>
        </div>
    <PrimaryButton onClick={() => {}} size="big">Login</PrimaryButton>
    </div>
    </div>
    </div>
  )
}
