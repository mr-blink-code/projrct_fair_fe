import React, { createContext, useState } from 'react'

export const addProjectReponseContext = createContext()

export default function ContextShare({children}) {
    const[addProjectReponse,setAddProjectResponse]=useState({})
  return (
    <>
        <addProjectReponseContext.Provider value={{addProjectReponse,setAddProjectResponse}}>
            {children}
        </addProjectReponseContext.Provider>
    </>
  )
}
