
import Link from "next/link"

const Navbar = () => {
    return (
        <div>

            <Link href={"/"}>
                <img src="/logo.png" alt="Solidariza logo" width={100}/>
            </Link>
            <Link href={"/"}>
                <h1>Campanhas</h1>
            </Link>
            
        </div>
    )
}
export default Navbar;