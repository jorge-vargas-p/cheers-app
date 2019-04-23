import React from 'react'
import PostList from './PostList'
import Navigation from './navigation';
import FormRecipe from'./FormRecipe'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {Card,Button} from 'react-bootstrap'

import recipeFile from '../../server/public/recipes.json'


class App extends React.Component{
  constructor(){
    super()
    this.state = {
      recipes: recipeFile.recipes
    }
    this.handleAddRecipe = this.handleAddRecipe.bind(this) 
  }
  

  handleAddRecipe(recipes){
    this.setState({
      recipes: [...this.state.recipes, recipes]
    })
  }

  

  render(){
  return (
    <div>

      <Navigation />
      <FormRecipe onAddRecipe={this.handleAddRecipe} />
      <Container>
      
        <Row>

          <Col>
          
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col>
          </Col>
          <Col  lg="12"><PostList recipes={this.state.recipes}/></Col>
          <Col></Col>
        </Row>
      </Container>;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      {/* <br/>

      <div>
        
      </div>

      <div className="container1">
        <div>
        
        </div>
      </div> */}
  
  
      
      
    </div>
    )
  }
}

export default App

