import logo from "./logo.jpg"

export default function Header() {
    return(
        <h1 style={{display: "flex", alignItems: "center"}}>
            <a href="/">
                <img src={logo} alt="Aerogardens" style={{width: "100px", padding: "24px"}}></img>
            </a>
            Aerogarden & Hydroponics Experiments
        </h1>
    );
}