import React from 'react'
import {Link} from 'react-router-dom'

import logoIcon from '../Assets/logoIcon.png'
import logout from '../Assets/logout.png'

function HeaderNav() {
    return (
        <header>
            <nav>
                <img src = {logoIcon} alt = 'Logo Icon'/>
                <Link to = '/'><img src = {logout} alt = 'Logout'/></Link>
            </nav>
        </header>
    )
}

export default HeaderNav
