
import { SignIn } from "@/components/auth/sing-in"
import { useGetMeQuery, useLoginMutation } from "@/services/auth/authApi"
import { Navigate } from "react-router-dom"
import s from './singin-page.module.scss'



export const SingInPage = () =>{

const [login, { } ] = useLoginMutation()
const {data: me} = useGetMeQuery()
console.log(me)


if(me && me?.isEmailVerified !== false) return <Navigate to={'/'}/>

    return (
        <div className={s.singinWrapper}>
            <SignIn onSubmit={login}/>
        </div>

    )
}