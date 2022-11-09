import React from 'react'
import ProfileBanner from './components/ProfileBanner'
import Portfolio from './components/Portfolio'
import { useEffect } from 'react'
import { get, put } from '../../../services/services'
import { authContext } from '../../../context/context'
import { useContext } from 'react'
import { useState } from 'react'
import Loading from '../../../sharedComponents/ui/Loading'
import Swal from 'sweetalert2'

const ProfilePage = () => {

  const { auth } = useContext(authContext)
  const [ candidateData, setCandidateData ] = useState({})
  const [ editableData, setEditableData ] = useState({})
  const [ isLoading, setIsLoading ] = useState(true)
  const [ isEdited, setIsEdited ] = useState(false)

  useEffect(()=> {
    
    setIsLoading(true)
    get(`candidato/${auth.candidato_id}/`, {"Authorization":`Bearer ${auth.token}`})
    .then(res => {
      if(res.exito){
        console.log(res.data)
        setCandidateData({...res.data})
        setEditableData({...res.data.candidato[0]})
        setIsLoading(false)
      }
    })
  }, [])

  useEffect(()=> {

  if(!isEdited){
    return
  }
    const dataToSend = new FormData()
    
    dataToSend.append("apellido", editableData.apellido)
    dataToSend.append("correo_contacto", editableData.correo_contacto || "")
    dataToSend.append("nombre", editableData.nombre)

    if(editableData.cv_1 && typeof(editableData.cv_1) !== "string"){
      dataToSend.append("cv_1", editableData.cv_1)
    }

    if(editableData.cv_2 && typeof(editableData.cv_2) !== "string"){
      dataToSend.append("cv_2", editableData.cv_2)
    }

    //dataToSend.append("foto", null)
    dataToSend.append("mensage_presentacion", editableData.mensage_presentacion || "")
    dataToSend.append("nacimiento", editableData.nacimiento || "")
    dataToSend.append("sexo", editableData.sexo || "")
    dataToSend.append("titulo_personal", editableData.titulo_personal || "")
    dataToSend.append("url_facebook", editableData.url_facebook || "")
    dataToSend.append("url_github", editableData.url_github || "")
    dataToSend.append("url_instagram", editableData.url_instagram || "")
    dataToSend.append("url_linkedin", editableData.url_linkedin || "")
    dataToSend.append("url_telegram", editableData.url_telegram || "")
    dataToSend.append("url_twitter", editableData.url_twitter || "")
    dataToSend.append("url_web", editableData.url_web || "")
    dataToSend.append("usuario", auth.user_id)
    dataToSend.append("id", auth.candidato_id)

    put(`candidato/${auth.candidato_id}/`, { "Authorization":`Bearer ${auth.token}` }, dataToSend, true)
    .then(res => {
      if(res.exito){
        console.log(res.data)
        setCandidateData({...candidateData, candidato: [{...res.data}] })
        Swal.fire("Datos guardados", "Se han actualizado los datos", "success")
      }else{
        console.log(res)
        Swal.fire("Error", "Hubo un erro al guardar los cambios. Intente nuevamente", "error")
      }
      setIsEdited(false)
    })
  }, [editableData])

  return (
    <div className='mt-16 flex w-full h-[89%] py-4'>
      {
        isLoading ? <Loading /> :(
          <>
            <ProfileBanner 
              setEditableData={setEditableData} 
              setIsEdited={setIsEdited}
              title={candidateData.candidato[0].titulo_personal} 
              message={candidateData.candidato[0].mensage_presentacion}
            />
            <Portfolio 
              candidateData={candidateData} 
              setCandidateData={setCandidateData} 
              setEditableData={setEditableData} 
              editableData={editableData}
              setIsEdited={setIsEdited}  
            />
          </>
        )
      }
    </div>
  )
}

export default ProfilePage