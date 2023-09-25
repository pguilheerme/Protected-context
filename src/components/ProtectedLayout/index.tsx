import { Link } from "react-router-dom"
import { useAuth } from "../../context/AuthProvider/useAuth"
import "./styled.scss"

export const ProtectedLayout = ({children}:{children:JSX.Element}) => {
   const auth = useAuth()

   if(!auth.email) {
    return (
      <>
         <h1>You do not have access</h1>
         <Link to={'/login'}>clique aqui para fazer o login</Link>
      </>
    )
   }

   return children
}