import React from 'react'
import {Nav, Navbar, Button, Form, FormControl} from 'react-bootstrap'
import Example from './Example'

// import Nav from 'react-bootstrap/Nav'

class Navigation extends React.Component{
render(){

    return(
        <div>
            <Navbar bg="dark" variant="light">
    {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
    <Nav className="mr-auto">
        <Example/>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-primary">Search</Button>
    </Form>
  </Navbar>
        </div>
        )
    }
}

export default Navigation