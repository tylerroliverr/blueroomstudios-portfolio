import About from "./About";
import Services from "./Services";

export default function Menu() {
    return (
        <>
            <div className="menuOpen">
                <p className="menuItem menuInactive">[about]</p>
                <p className="menuItem">[services]</p>
                <p className="menuItem menuInactive">[contact]</p> {/* Make this copy email */}
            </div>
            {/* <Services /> */}
            <About />
            <div className="menuFooter">
                <div className="themeButtons">
                    <p className="themeItem">[blue]</p>
                    <p className="themeItem menuInactive">[red]</p>
                    <p className="themeItem menuInactive">[black]</p>
                </div>
                <div className="contactButton">
                    <p className="contactItem">[help@blueroomstudios.com.au]</p>
                </div>
            </div>
        </>
    )
}