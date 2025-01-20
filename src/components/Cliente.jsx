import { useNavigate } from "react-router-dom"

const Cliente = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        sessionStorage.removeItem("usuario");
        sessionStorage.removeItem("senha");
        alert("By By");
        navigate("/");
    }

    return (
        <>
            <h1>Aréa Privada</h1>
            <button onClick={handleLogout}>Logout</button>
        </>
    )
}
export default Cliente