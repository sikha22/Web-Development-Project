const { Component, default: React } = require("react");
let myStyle={
    backgroundColor:'yellow',
    border : '2px solid',
}
const TableHeader = ()=>{
return(<thead style={myStyle}>
<tr>
<th>Name</th>
<th>Work</th>
<th>Action</th>
</tr>
</thead>)
}


const TableBody = (props)=>{
    let std={
        backgroundColor:'yellow'
    }
const {charactersData,removeCharacter,editCharacter} = props

const rows = charactersData.map( (characters,index) => {
return (<tr key={index}>
<td style={std}>{characters.name}</td>
<td style={std}>{characters.work}</td>
<td style={std}><button onClick={()=>removeCharacter(index)}>Delete</button></td>
<td style={std}><button onEdit={()=>editCharacter(index)}>Edit</button></td>
</tr>)
} )

return(<tbody>
{rows}
</tbody>)
}

class Table extends Component {
render(){
const {charactersData,removeCharacter,editCharacter} = this.props
return (
<table>
<TableHeader/>
<TableBody removeCharacter={removeCharacter} charactersData = {charactersData} editCharacter={editCharacter} />

</table>

)
}
}

export default Table;