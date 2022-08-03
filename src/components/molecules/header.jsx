import { useState } from "react"
import { Link } from "react-router-dom"
import logo from "../../assets/logo.svg"

export default function Header() {
  const [modalLogin, setModalLogin] = useState(false)
  const [modalRegister, setModalRegister] = useState(false)

  function switchModal() {
    if (modalLogin) {
      setModalLogin(false)
      setModalRegister(true)
    } else {
      setModalRegister(false)
      setModalLogin(true)
    }
  }

  return (
    <header className="fixed z-index-2 w100">
      <nav className="py2 px6 flex jc-between ai-center bg-white">
        <Link to='/'>
          <img src={logo} alt="logo" />
        </Link>

        <div className="grid col-2 col-gap-1 w15rem">
          <button className="py0-1 bg-none br5 br-red txt-red bold"
           onClick={() => ( modalLogin ? setModalLogin(false) : setModalLogin(true) )}
          >Login</button>

          <button className="py0-1 bg-red br5 br-red txt-white fw500"
           onClick={() => ( modalRegister ? setModalRegister(false) : setModalRegister(true) )}
          >Register</button>
        </div>
      </nav>

      {modalLogin &&
      <section className="modal fixed z-index-3 w100 h100 flex jc-center ai-center"
      onClick={ () => setModalLogin(false) }
      >
        <form className="py2 px1-5 flex-col bg-white br10"
         onClick={ (e) => e.stopPropagation() }
        >
          <h2 className="mb1-75 txt-red fw700">Login</h2>
          <input className="modal-input br-red br5 mb1 fs0-9" type="email" placeholder="Email" />
          <input className="modal-input br-red br5 mb2 fs0-9" type="password" placeholder="Password" />
          <input className="pt0-3 pb0-5 mb1 bg-red br-none br5 fs0-9 fw500 txt-white" type="button" value="Login" />
          <p className="fs0-9 fw500 ta-center">Don't have an account ? Klik <strong className="cursor-pointer"
           onClick={ switchModal }
           >Here</strong></p>
        </form>
      </section>
      }

      {modalRegister &&
      <section className="modal fixed z-index-3 w100 h100 flex jc-center ai-center"
      onClick={ () => setModalRegister(false) }
      >
        <form className="py2 px1-5 flex-col bg-white br10"
         onClick={ (e) => e.stopPropagation() }
        >
          <h2 className="mb1-75 txt-red fw700">Register</h2>
          <input className="modal-input br-red br5 mb1 fs0-9" type="email" placeholder="Email" />
          <input className="modal-input br-red br5 mb1 fs0-9" type="password" placeholder="Password" />
          <input className="modal-input br-red br5 mb2 fs0-9" type="text" placeholder="Full Name" />
          <input className="pt0-3 pb0-5 mb1 bg-red br-none br5 fs0-9 fw500 txt-white" type="button" value="Register" />
          <p className="fs0-9 fw500 ta-center">Already have an account ? Klik <strong className="cursor-pointer"
           onClick={ switchModal }
           >Here</strong></p>
        </form>
      </section>
      }
    </header>
  )
}
