import triangle from "../../assets/triangle.svg"
import profile from "../../assets/user.svg"
import product from "../../assets/drink.svg"
import toping from "../../assets/toping.svg"
import logOut from "../../assets/logout.svg"

export function UserDropdown() {
  return (
    <section className="relative flex">
        <ul className="dropdown bg-white br10">
            <img className="dropdown-triangle" src={triangle} alt="white-triangle" />
            <li className="py1 pr3 pl1-5 flex ai-center fw700">
                <img src={profile} alt="icon" />
                <p>Profile</p>
            </li>
            <li className="py1 pr3 pl1-5 flex ai-center fw700">
                <img src={logOut} alt="icon" />
                <p>Logout</p>
            </li>
        </ul>
    </section>
  )
}

export function AdminDropdown() {
    return (
        <section className="relative flex">
            <ul className="dropdown bg-white br10">
                <img className="dropdown-triangle" src={triangle} alt="white-triangle" />
                <li className="py1 pr3 pl1-5 flex ai-center fw700">
                    <img src={product} alt="icon" />
                    <p>Add Product</p>
                </li>
                <li className="pt0-5 pb1 pr3 pl1-5 flex ai-center fw700">
                    <img src={toping} alt="icon" />
                    <p>Add Toping</p>
                </li>
                <li className="py1 pr3 pl1-5 flex ai-center fw700">
                    <img src={logOut} alt="icon" />
                    <p>Logout</p>
                </li>
            </ul>
        </section>
    )
}