import { useState } from "react"
import { Link } from "react-router-dom"
import logo from "../../assets/logo.svg"

export default function Header() {
  const [isLogin, setIsLogin] = useState(false)

  const [modalLogin, setModalLogin] = useState(false)
  const openLogin = () => setModalLogin(true)
  const closeLogin = () => setModalLogin(false)

  const [modalRegister, setModalRegister] = useState(false)
  const openRegister = () => setModalRegister(true)
  const closeRegister = () => setModalRegister(false)

  function switchModal() {
    if (modalLogin) {
      closeLogin();
      openRegister();
    } else {
      closeRegister();
      openLogin();
    }
  }
  return (
    <header className="max-1440p after-nav">
      <nav className="fixed w100 py2 px6 flex jc-between ai-center bg-white">
        <Link to='/'>
          <img src={logo} alt="logo" />
        </Link>

        <div className="grid col-2 col-gap-1 w15rem">
          <button className="py0-1 bg-none br5 br-red txt-red bold"
           onClick={() => ( modalLogin ? closeLogin() : openLogin() )}
          >Login</button>

          <button className="py0-1 bg-red br5 br-red txt-white fw500"
           onClick={() => ( modalRegister ? closeRegister() : openRegister() )}
          >Register</button>
        </div>
      </nav>

      {modalLogin &&
        <div className="backdrop w100 h100 flex jc-center ai-center"
        onClick={closeLogin}
        >
          <form
          onClick={(e) => e.stopPropagation()}
          >

          </form>
        </div>
      }
    </header>

  )
}
