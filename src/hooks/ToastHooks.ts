import {useRecoilState} from "recoil";
import {toastAtom} from "@/recoil/commonAtoms.ts";

export const ToastHooks = () => {
    const [toast, setToast] = useRecoilState(toastAtom);
    const setToastMessage = (message:string) => {
        setToast(message);
    }
    const closeToast = () => {
        if(toast){
            setTimeout(() => {
                setToastMessage("")
            }, 2000);
        }
    }
    return {toast, setToastMessage, closeToast};
}
