import {Link} from "react-router-dom"
import styles from './Header.module.css'
export default function Header() {
    return (
        <>
<header>
    <nav>
        <Link to="/home">Home</Link>
        <Link to="/Contato">Contato</Link>
        <Link to="/Galeria">Galeria</Link>
    </nav>
</header>

        </>
    )
}