import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE ={
    user: null,
/*     {
        _id:'61666af318f2e26ea17f279c',
        username:"Angie Barking",
        email:"AngieB@gmail.com",
        profilePicture:"person/1.jpeg",
        coverPicture:"",
        followers:[],
        followings:[],
        isAdmin:false
    }, */
    isFecthing: false,
    error:false
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({children}) =>{
const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    return(
        <AuthContext.Provider 
        value={{
            user: state.user, 
            isFetching: state.isFetching, 
            error: state.error, 
            dispatch
            }}>
                {children}
        </AuthContext.Provider>
    )
}