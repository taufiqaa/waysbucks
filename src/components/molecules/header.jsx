// import { Link } from "react-router-dom"
import logo from "../../assets/logo.svg"

export default function Header() {
  return (
    <header className="max-1440p">
      <nav className="fixed w100 py2 px6 flex jc-between ai-center bg-white">
        {/* <Link to='/'> */}
          <img src={logo} alt="logo" />
        {/* </Link> */}
        <div className="grid col-2 col-gap-1 w15rem">
          <button className="py0-1 bg-none br5 br-red txt-red bold">Login</button>
          <button className="py0-1 bg-red br5 br-red txt-white fw500">Register</button>
        </div>
      </nav>
    </header>
  )
}

//ini header