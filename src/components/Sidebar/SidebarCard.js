import React from 'react'
import { Link } from 'react-router-dom'

const SidebarCard = ({title, svg}) => {
  return (
   
        <Link className="nav-link  active" to={'/dashboard'}>
            <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                {svg}
            </div>
        <span className="nav-link-text ms-1">{title}</span>
        </Link>
  )
}

export default SidebarCard