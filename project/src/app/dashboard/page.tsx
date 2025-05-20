// 'use client'
// import Certificates from "@/components/dashboard/userInfo/certificates";
// import Education from "@/components/dashboard/userInfo/education";
// import UserInfo from "@/components/dashboard/userInfo/info";
// import Skills from "@/components/dashboard/userInfo/skills";
// import { Button } from "@/components/ui/button";
// import React, { use, useState } from "react";
// import { POST } from "../api/userInfo/route";
// import Alldata from "@/components/dashboard/userInfo/mainform";

// export default function Dashboard() {
//     const [info, setInfo] = useState({});
//     const [skills, setSkills] = useState({});
//     const [education, seteducation] = useState({});
//     const [certificates, setCertificates] = useState({});
//     console.log(info)
//     // const [formData, setFormData] = useState({
//     //     fullName: '',
//     //     profesion: '',
//     //     email: '',
//     //     contact: '',
//     //     about: '',
//     //     technicalSkills: [],
//     //     nontechnicalSkills: [],
//     //     school10: '',
//     //     board10: '',
//     //     percentage10: 0,
//     //     school12: '',
//     //     board12: '',
//     //     percentage12: 0,
//     //     college: '',
//     //     degree: '',
//     //     cgpa: 0,
//     //     certificates: {
//     //         certName: '',
//     //         file: ''
//     //     }
//     // });

//     // const handleSubmit = async (e : React.FormEvent) => {
//     //     e.preventDefault();
//     //     console.log("form submitted");
//     //     const allData = {
//     //         ...info,
//     //         ...skills,
//     //         ...education,
//     //         ...certificates
//     //     }
//     //     console.log("Sending data to backend: ", allData)
//     //     try {
//     //         const res = await fetch('/api/userInfo/', {
//     //             method: 'POST',
//     //             body: JSON.stringify(allData)
//     //         })
//     //         const responseData = await res.json()
//     //         console.log("Success:", responseData)
//     //     }
//     //     catch (error) {
//     //         console.error("Error submitting form:", error)
//     //     }
//     // }
  
//     return (
//         <>
//             <div className="h-screen w-[90%] flex justify-center items-center bg-[#F1EFEC]">

//                 <div className=" rounded-3xl shadow-[0_0_20px_10px_rgba(152,152,152,0.5)] h-[90%] w-[90%] p-10 overflow-y-scroll">
//                     {/* <form>
//                         <section className="min-h-screen">
//                             <UserInfo onDataChange={(data) => { setInfo(data) }} />
//                         </section>
//                         <section className="min-h-screen" >
//                             <Skills onDataChange={(data) => { setSkills(data) }} />
//                         </section>
//                         <section className="min-h-screen">
//                             <Education onDataChange={(data) => { seteducation(data) }} />
//                         </section>
//                         <section className="min-h-screen">
//                             <Certificates onDataChange={(data) => { setCertificates(data) }} />
//                         </section>
//                     </form>
//                     <Button type='submit' >Submit</Button> */}
//                     <Alldata/>
//                 </div>
//             </div>
//         </>
//     )
// }



















// 'use client'
// import { useForm } from "react-hook-form"
// import UserInfo from "@/components/dashboard/userInfo/info"
// import Skills from "@/components/dashboard/userInfo/skills";
// import axios from "axios"
// import {FormProvider} from "react-hook-form"
// import Certificates from "@/components/dashboard/userInfo/certificates";
// export default function Dashboard() {
//     const form=useForm({
//         defaultValues:{
//             fullName:'John Doe'
//             ,profession:'Software Engineer'
//             ,email:'abc@xyz.com',
//             contact:'1234567890'
//             ,about:'Lorem ipsum dolor sit amet'
//             ,technicalSkills:['JavaScript','React']
//             ,nontechnicalSkills:['Communication','Teamwork']
//             ,certificates:[{ certName:'Certificate 1', file:''}]
//         }
//     });

//     const onSubmit=async (data:any)=>{
//         console.log(data);
//         try {
//             const response = await axios.post('/api/userInfo', data);
//             // console.log("Success:", response.data);
//         } catch (error) {
//             console.error("Error submitting form:", error);
//         }
//     };

// return(
//   <div className="h-screen w-[90%] flex justify-center items-center bg-[#F1EFEC]">

//                  <div className=" rounded-3xl shadow-[0_0_20px_10px_rgba(152,152,152,0.5)] h-[90%] w-[90%] p-10 overflow-y-scroll">
//   <FormProvider {...form}>
//                     <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10 ml-10">
//                     <UserInfo form={form} />
//                     <Skills form={form}/>
//                     <Certificates form={form}/>
//                     <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
//                 </form>
//                </FormProvider>
// </div>
// </div>             
// )

// }









































'use client'
import { useForm } from "react-hook-form";
import UserInfo from "@/components/dashboard/userInfo/info";
import Skills from "@/components/dashboard/userInfo/skills";
import Certificates from "@/components/dashboard/userInfo/certificates";
import axios from "axios";
import { FormProvider } from "react-hook-form";
import { useState } from "react";
import { toast } from "sonner"
import { Toaster } from "sonner";
import Education from "@/components/dashboard/userInfo/education";
export default function Dashboard() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
const form = useForm({
  defaultValues: {
    fullName: '',
  profession: '',
  email: '',
  contact: '',
  about: '',
  technicalSkills: [],
  nontechnicalSkills: [],
  certificates: [
    {
      name: '',
      url: ''
    }
  ],
  school10: '',
  board10: '',
  percentage10:undefined ,
  school12: '',
  board12: '',
  percentage12: undefined,
  college: '',
  degree: '',
  cgpa: undefined,
  starty: undefined,
  endy: undefined
  }
});

  const onSubmit = async (data:any) => {
    setIsSubmitting(true);
    try {
      // First upload all certificates
      const certificateUrls = [];
      
      if (data.certificates?.files?.length) {
        for (let i = 0; i < data.certificates.files.length; i++) {
          const formData = new FormData();
          formData.append('file', data.certificates.files[i]);
          formData.append('name', data.certificates.names[i]);
          
          const response = await fetch('/api/upload-certificate', {
            method: 'POST',
            body: formData
          });
          
          const result = await response.json();
          if (result.url) {
            certificateUrls.push({
              name: data.certificates.names[i],
              url: result.url
            });
          }
        }
      }
      const payload = {
        ...data,
        certificates: certificateUrls
      };
      //zod validation
      
      await axios.post('/api/userInfo', payload);
      toast.success("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Error submitting form");
    } finally {
      setIsSubmitting(false);
    }
  };

  return(
    <div className="h-screen w-[90%] flex justify-center items-center bg-[#F1EFEC]">
      <div className=" rounded-3xl shadow-[0_0_20px_10px_rgba(152,152,152,0.5)] h-[90%] w-[90%] p-10 overflow-y-scroll">
        <Toaster position="bottom-right"/>
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10 ml-10 flex-col gap-10">
            <UserInfo form={form} />
            <Skills form={form}/>
            <Education form={form}/>
            <Certificates form={form}/>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </FormProvider>
      </div>
    </div>             
  );
}


