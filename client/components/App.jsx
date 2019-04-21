import React from 'react'
import PostList from './PostList'
import Navigation from './navigation';
import FormRecipe from'./FormRecipe'

class App extends React.Component{
  render(){
  return (
    <div>
      <Navigation /><br/>

      <div>
        <FormRecipe/>
      </div>

      <div>
        <PostList/>
      </div>
  
  
      
      
    </div>
    )
  }
}

export default App

