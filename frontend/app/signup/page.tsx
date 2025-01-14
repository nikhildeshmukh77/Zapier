"use client";
import { CheckFeature } from "@/components/CheckFeature"
import { Appbar } from "@/components/Appbar"
import { Input } from "../../components/Input"
import { PrimaryButton } from "@/components/buttons/PrimaryButton";
import { useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useRouter } from "next/navigation";
export default function () {
    const router = useRouter();
    const [name, setName] = useState();
    const[email, setEmail] = useState();
    const [password, setPassword] = useState()
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
        <Input label="Name" onChange={(e) => {setName(e.target.value)}} type="text" placeholder="Your Name"/>
        </div>
        <div className="pb-8">
        <Input label="Email" onChange={(e) => {setEmail(e.target.value)}} type="text" placeholder="Your Email"/>
        </div>
        <div className="pb-8">
        <Input label="Password" onChange={(e) => {setPassword(e.target.value)}} type="password" placeholder="Your Password"/>
        </div>
    <PrimaryButton onClick={async() => {
        console.log("from frontedn")
        const res = await axios.post(`${BACKEND_URL}/api/v1/user/signup`, {
        username : email,
        password,
        name
    });
    router.push("/login")   
    }} size="big">Get Started Free</PrimaryButton>
    </div>
    </div>
    </div>
  )
}
