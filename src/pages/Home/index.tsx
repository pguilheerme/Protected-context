import { useAuth } from "../../context/AuthProvider/useAuth"
import "./styled.scss"

export function Home () {
    const {logout} = useAuth()
    return (
        <div>
            <div className="container">
                <a href= "#" className="links">Home</a>
                <a href= "#" className="links">Services</a>
                <a href= "#" className="links">Docs</a>
                <button onClick={() => logout()} id="btn">Exit</button>
            </div>
        </div>
    )
}