import { auth } from "./index";
import { createUserWithEmailAndPassword } from "firebase/auth";
export const handleLoginUser=(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
}
