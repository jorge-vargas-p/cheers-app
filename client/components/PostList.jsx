import React from 'react'
import {Card,Button,Col, Container} from 'react-bootstrap'


class PostList extends React.Component{

    // removeRecipe(index){
    //     this.setState({
    //         recipes: this.state.recipes.filter((e, i)=>{
    //             return i !== index
    //         })    
    //     })
    // }


    render(){
        console.log(this.props)
    return (
        
    <div><h1 align="center"> Your Cocktails!!</h1>
    <br></br>

    <div className="flexy">

    {this.props.recipes.map((postDetail, index) =>        
                <Card style={{ 
                width: '30rem',
                display:'inline-block'
                }}>
              <Card.Body>  
                <Card.Title>{postDetail.name}</Card.Title>
                    <Card.Text>
                        <p>{postDetail.ingredients}</p>
                        <p>{postDetail.description}</p>
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
    )} 
         </div> 
        </div>
        )}
  }
  
  export default PostList