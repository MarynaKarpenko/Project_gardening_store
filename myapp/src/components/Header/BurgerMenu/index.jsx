import { Link } from "react-router-dom"
import iconMenu from "../Icons/IconMenu.svg"
import iconCros from "../Icons/IconCros.svg"
import s from "./BurgerMenu.module.css"

export default function BurgerMenu(){
    return(
        <div className={s.menu}>
            <nav className={s.nav_menu}>
            <img src={iconMenu} className={s.menu_img} alt=""></img>
                <img src={iconCros} className={s.menu_cros} alt=""></img>
        <ul className={s.nav_ul}>
            <a><Link to={"/"} className={s.link_menu}>
                    <p>Main Page</p>
                </Link>
            </a>
            <a><Link to={"/categories"} className={s.link_menu}>
                    <p>Categories</p>
                </Link>
            </a>
            <a><Link to={"/products"} className={s.link_menu}>
                    <p>All products</p>
                </Link>
            </a>
            <a><Link to={"/sales"} className={s.link_menu}>
                    <p>All sales</p>
                </Link>
            </a>
        </ul>
            </nav>
        </div>
    )
}