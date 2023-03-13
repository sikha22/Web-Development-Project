
import React,{Component} from 'react';
import Table from './Table';
import Form from './Form';

class App extends Component {
  state = {
    characters :[ 
    //   {
    //   name : 'shikha',
    //   names : 'sharma',
    // },
    // {
    //   name :'patna',
    //   names : 'Bihar',
    // },
    // {
    //   name : 'India',
    //   names : 'Punjab'
    // },
  ]
  }
  removeCharacter = (index) => {
    const {characters} = this.state
    
    let filtered = characters.filter((character,i)=>{
      return i!==index
    });

    this.setState({characters:filtered});
  }

  handleSubmit = (character)=>{
    this.setState({characters:[...this.state.characters,character]
    });
  }

  render(){
    const {characters} = this.state

    return(
      <div className="Appr">
        <h1>TABLE</h1>
        <Table removeCharacter={this.removeCharacter} charactersData={characters} />
        <Form handleSubmit={this.handleSubmit}/>
      </div>
    )
  }
}
export default App;