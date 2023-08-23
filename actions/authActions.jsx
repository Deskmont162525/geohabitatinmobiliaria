import { decodeToken } from '../data/functions';
import { AuthService } from '../services/AuthService';
import { SIGN_IN, LOGOUT } from '../type';
import { setCookie, destroyCookie  } from 'nookies';

export const signIn = async (formData, {router, closeModal, setMsgError}) => {
    const response = await AuthService.postSignIn(formData);
    if (response.code === 200) {
        const dataToken = decodeToken(response.accessToken);
        let tempData = {
            decodeToken:dataToken,
            data:response.user,
            token:response.accessToken,
            code:200
        }
        setCookie(null, "userGEO", JSON.stringify(tempData)),{path: '/app',expires: new Date(dataToken?.exp)}; 

        if(response?.user?.role?.name === "admin" || response?.user?.role?.name === "superadmin"){
            closeModal()
            setMsgError("")
            router.push('/admin')
        }

        if(response?.user?.role?.name === "asesor"){
            closeModal()
            setMsgError("")
            router.push('/asesor')
        }

        return tempData;
    } else {
        return response;
    }
};

export const logOut = ({ dispatchAuth, router }) => { 
    destroyCookie(null, "userGEO");  
    dispatchAuth({
        type: LOGOUT
    });
    router.push('/');
};
