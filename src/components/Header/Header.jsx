import './Header.css'
import Navbar from '../Navbar/Navbar'
import Logo from '../Logo/Logo'


export default function Header(){
    return(
    <>
        <img className='logo' src="./logo.png" alt="logo" />
        <Navbar className='navbar'/>

    </>)
}