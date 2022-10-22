import { NavLink } from "react-router-dom"
import "./Header.css"

export const HeaderNavButton = ({text, path}) => {

  return (
    <NavLink to={path}
     className={'px-3 text-xl hover:text-purple-700 h-full flex items-center'}>
        {text}
    </NavLink>
  )
}
