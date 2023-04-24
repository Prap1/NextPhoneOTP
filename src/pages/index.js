import dynamic from 'next/dynamic'
const Otp=dynamic(()=>import("./otp"),{ssr:false});


export default function Home() {
  return <Otp/>
}
