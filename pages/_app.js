import '../styles/globals.css'
import {useState,useEffect} from 'react'
import { Loading } from '../components/Loading'
import NavbarCtx from '../components/NavbarCtx'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Logined } from '../components/Login/FormLogin'

function MyApp({ Component, pageProps }) {
  
  const[loading,setLoading] = useState(true)
  
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    },2000)
  },[])

  const email = useState(null)

  return (
    <>
      <NavbarCtx email={email} />
      {loading ? <Loading /> : <Component {...pageProps} />}
    </>
  )
}

export default MyApp
