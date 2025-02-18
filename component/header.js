import react from 'react'

import { Navbar,nav,button } from 'react-bootstrap'
import { Button } from 'react-bootstrap/lib/InputGroup'
const header = () => {
    return (
        <Navbar className='justify-context-between p-4'>
            <NavbarBrand>
                MyName
            </NavbarBrand>
            <nav>
                <NavLink herf="#Shipedin">Shipedin</NavLink>
                <Button variant='outline-primary'> </Button>
            </nav>
        </Navbar>
    )
}