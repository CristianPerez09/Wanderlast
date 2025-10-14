import CartWidget from "./CartWidget"

const NavBar = ({bgColor}) =>{
    return(
        <>
        <ul style={{backgroundColor: bgColor}}>
            <li>Home</li>
            <li>Hoteles</li>
            <li>Pasajes</li>
            <li>Comidas</li>
        </ul>
        <CartWidget />
        </>
    )
        
    
}

export default NavBar