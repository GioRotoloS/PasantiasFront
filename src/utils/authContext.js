import { createContext } from "react";
import axios from "axios";
export const AuthContext = createContext()

export const AuthContexProvider = ({children})=>{


    const tutor = async(inputs)=>{
        const res = await axios.post("/tutors/tutor", inputs)

    };

    return(
        <AuthContext.Provider value={{tutor}}>
            {children}
            </AuthContext.Provider>
    )
};