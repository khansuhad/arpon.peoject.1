"use client"
import { useParams } from "next/navigation"

function DoctorNamePage() {
    const id = useParams()
    const doctorName = id["id"]
    console.log(doctorName)
    return <><h1>Doctor Name : {doctorName}</h1></>
}
export default DoctorNamePage