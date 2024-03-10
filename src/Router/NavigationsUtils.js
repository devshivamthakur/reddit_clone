import { createRef } from "react";
import { NavigationContainerRef } from "@react-navigation/native";
import { ScreenNames } from "../Utils/Constants";

export const  NavigationRef = createRef();

export function navigateToScreens(name, params) {
    if(!NavigationRef.current) return null;
    if(!params)  NavigationRef.current?.navigate(name);
     NavigationRef.current?.navigate(name,params);
}

export function goBack() {
    if(!NavigationRef.current) return null;
    NavigationRef.current?.goBack();
}

export function resetToScreen(name) {
    if(!NavigationRef.current) return null;
    NavigationRef.current?.reset({
        index: 0,
        routes: [{ name: name }],
    });
}

export const showProgressDialog=()=>{
    if(!NavigationRef.current ) return null;
    NavigationRef.current?.navigate(ScreenNames.PROGRESSDIALOG);
}
export const hideProgressDialog=()=>{
    if(!NavigationRef.current ) return null;
    if(NavigationRef.current?.canGoBack())   NavigationRef.current?.goBack();
 
}
