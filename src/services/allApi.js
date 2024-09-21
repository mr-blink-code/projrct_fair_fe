import { BASE_URL } from "./baseurl"
import { commonApi } from "./commonApi"
//register API

export const registerApi = async (userDetails) => {
    return await commonApi("POST",`${BASE_URL}/user/register`,userDetails,"")
}
//loginApi
export const loginApi = async (userDetails) => {
    return await commonApi('POST',`${BASE_URL}/user/login`,userDetails)
}