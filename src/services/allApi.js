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
//add project
 export const addProjectApi=async(projectDetails,reqHeader)=>{
    return await commonApi('POST',`${BASE_URL}/project/addproject`,projectDetails,reqHeader)
 }

 export const getHomeProjectApi = async()=>{
    return await commonApi('GET',`${BASE_URL}/project/homeproject`,"","")
 }
 export const getAllProjectApi = async(reqHeader,searchKey)=>{
    return await commonApi('GET',`${BASE_URL}/project/allproject?search=${searchKey}`,"",reqHeader)
 }
 export const getUserProjectApi = async(reqHeader)=>{
    return await commonApi('GET',`${BASE_URL}/project/userproject`,"",reqHeader)
 }
 export const editUserProjectApi = async(projectId,reqBody,reqHeader)=>{
   return await commonApi('PUT',`${BASE_URL}/project/editproject/${projectId}`,reqBody,reqHeader)
 }

 export const deleteProjectApi = async(projectId,reqHeader)=>{
   return await commonApi('DELETE',`${BASE_URL}/project/delete/${projectId}`,{},reqHeader)
 }