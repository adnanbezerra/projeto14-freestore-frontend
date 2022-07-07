import { MenuWrapper, Navbar } from "./MenuStyle"

export default function Menu({ setWidth, setDisplay, display, width }) {
    return (
        <MenuWrapper display={display}>
            <Navbar width={width}>
                <div className="navbar">
                    
                </div>
            </Navbar>
            <div className="black-screen" onClick={() => { setWidth('0px'); setDisplay('none'); }} />
        </MenuWrapper>
    )
}