function AppNavbar() {
    return (
        <div>
            <h1 className="text-center" id="logo"> LEYONCODE </h1>

            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <a className="nav-link link-light" href="https://leyoncode.github.io"> Home </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link link-light" href="#projects"> Projects </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link link-light" href="#contact"> Contact </a>
                </li>
                <li className="nav-item" style={{borderRadius:"10px", background:"#800080", textShadow:"none", marginRight:"5px"}}>
                    <a className="nav-link link-light" href="https://github.com/leyoncode" target="_blank"> Github </a>
                </li>
                {/*<li className="nav-item" style={{borderRadius:"10px", background:"white", textShadow:"none"}}>*/}
                {/*    <a className="nav-link link-dark" href="./Leyon-Ibn-Kamal-Resume.pdf"> Download CV </a>*/}
                {/*</li>*/}
            </ul>
        </div>
    );
}

export default AppNavbar