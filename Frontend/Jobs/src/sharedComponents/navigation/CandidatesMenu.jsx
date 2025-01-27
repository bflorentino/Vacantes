import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { authContext } from '../../context/context'
import { types } from '../../reducers/types'

import logout from '../../assets/icons/desconectar.png'
import guardado from '../../assets/icons/guardadas.png'
import perfil from '../../assets/icons/perfil.png'
import mensaje from '../../assets/icons/mensaje.png'
import vacante from '../../assets/icons/vacante.png'
import calendar from '../../assets/icons/calendar.png'
import { BASE_URL_FILES } from '../../constants/baseURL'

const CandidatesMenu = ({onAccount}) => {

  const  { auth, dispatch } = useContext(authContext)

    const handleLogout = () => {
        dispatch({type:types.logout})
        window.localStorage.removeItem("itJobToken")
      }

  return (
    <div className='flex justify-around'>

        <Link className={`flex flex-col items-center px-3 ` } 
              to={`/app/candidateProfile/${auth.candidato_id}`} 
        >
            <img src={perfil} alt="" className='w-7 h-7' />
            <small>Perfil</small>
        </Link>

        <Link className={`flex flex-col items-center px-3  ml-1` } 
              to='/app/candidate/viewAllVacancies' 
        >
            <img src={vacante} alt="" className='w-7 h-7' />
            <small>Vacantes</small>
        </Link>
        
        <Link className={`flex flex-col items-center px-2 ` } 
              to='/app/candidate/panel-saved-jobs' 
        >
            <img src={guardado} alt="" className='w-7 h-7' />
            <small>Aplicaciones</small>
        </Link>

        
        <Link className={`flex flex-col items-center px-2 ` } 
              to='/app/diary' 
          >
              <img src={calendar} alt="" className='w-7 h-7' />
              <small>Agenda</small>
        </Link>
        
        <Link className={`flex flex-col items-center px-3 ` } 
              to='/app/candidate/message' 
        >
            <img src={mensaje} alt="" className='w-7 h-7' />
            <small>Mensajes</small>
        </Link>

        <span className='ml-6 cursor-pointer' onClick={onAccount}>
          <img 
            src={`${BASE_URL_FILES}${auth.foto}`}  
            alt=""
            className='w-7 h-7 rounded-full ml-2' 
            />
            <small>Cuenta</small>
        </span>

        <div id='account' className="hidden absolute text-black bg-white top-14 right-2 w-48 shadow-lg">
          
          <div className='flex flex-col w-full items-center justify-center mt-2'>
            <img src={`${BASE_URL_FILES}${auth.foto}`} 
              alt=""
              className='w-14 h-14 rounded-full ml-2' 
            />
            <p className='text-center'>{auth.first_name} {auth.last_name} </p>

            <div className='w-full flex flex-col mt-4'>
              <button className='flex justify-between px-2 py-1 text-left hover:bg-fifth' onClick={handleLogout}>
                <small>Cerrar Sesión</small>
                <img src={logout} alt="" className='w-6 h-6' />
              </button>
            </div>
          </div>
        </div>

    </div>
  )
}

export default CandidatesMenu