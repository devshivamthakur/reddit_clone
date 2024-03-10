import axios from "axios"
import { APIBASEURL, APIEndPoints, AUTH_BASEURL, ApiErrors, BASIC_AUTH } from "./APIConstants"
import { getDataFromStorage, isNetworkAvailable } from "../Utils"
import { STORAGE_KEY } from "../Constants"



export const serverCall = async (url, method, body, additonalHeader = {}) => {

    const isConnected = await isNetworkAvailable()
    if (!isConnected) {
        return {
            success: false,
            data: {
                message: ApiErrors.NO_INTERNET
            }
        }
    }

    let headers = {
        'Content-Type': 'application/json',
        
    }

    let BASEURL = APIBASEURL
    if (url === APIEndPoints.LOGIN) {
        BASEURL = AUTH_BASEURL

    }
    const URL = BASEURL + url

    const token = await getDataFromStorage(STORAGE_KEY.ACCESS_TOKEN)
    if(token){
        headers = {
            ...headers,
            'Authorization': 'Bearer ' + token
        }
    }
    headers = {...headers,...additonalHeader}

    return new Promise((resolve, reject) => {


        axios({
            method: method,
            url: URL,
            data: body,
            headers: headers,
        }).then((response) => {
            if(response.data && !response.data.error){
                resolve({
                    success: true,
                    data: response.data
                })

            }
            else  if(response.data && response.data.error && response.data.error == ApiErrors.invalid_grant)  {
                resolve({
                    success: false,
                    message: ApiErrors.user_name_and_password_does_not_match
                })
            }else{
                resolve({
                    sucess: false,
                    message: ApiErrors.Something_went_wrong
                })
            }
        }).catch((error) => {

            if (error.response) {

                if(error.response.status === 401){
                    resolve({
                        success: false,
                        message: ApiErrors.UNAUTHORIZED
                    })
                }
                if(error.response.status === 404){
                    resolve({
                        success: false,
                        message: ApiErrors.NOT_FOUND
                    })
                }
                else{
                    resolve({
                        success: false,
                        message: ApiErrors.Something_went_wrong
                    })
                }

            } else {
                resolve({
                    sucess: false,
                    message: ApiErrors.Something_went_wrong
                })

            }


        })
    })

}