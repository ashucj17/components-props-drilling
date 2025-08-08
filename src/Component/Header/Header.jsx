import { useState } from "react"
import Filter from "../Filter/Filter"
import linkedin from "../../assets/linkedin.png"
import './header.css'
const Header = () =>{

    const [input,setInput] = useState('')

    const inputHandler = (e)=> {
        setInput(e.target.value)
        
    }
    console.log(input);

    return(
        <>
        <header className="linkedIn__header">
        <form className="header__form-elements">
            <div className="header__elements">
            <img src={linkedin} alt="Linkedin-logo"  value={input} className="linkedIn__logo"/>
            <input type="text" className="linkedIn__search" placeholder='Search' onChange={inputHandler}/>
            </div>
            <Filter/>
            </form>
        </header>
        <main className="main_section">
            <div className="main_card"></div>
        </main>
        </>
    )

}

export default Header