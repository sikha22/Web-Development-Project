// import logo from './logo.svg';
// import './App.css';
// // import Greet from './components/Greet';
// // import Welcome from './components/Welcome';
// // import Hello from './components/Hello';
// // import Users from './components/Users';
// // import { useState } from "react";
// // import StudentProps from './components/StudentProps';
// import StudentC from './components/StudentC';


// function App() {
//   // function Apple(){
//   //   alert("Function Call");
//   // }

    

//     //Usestate used here
//     // const [data,setData]=useState(0);
//     // function updateData(){
//     //     setData(data+1);
//     // }


//   return (
//     <div className="App">
//       {/* <Greet/> if no component btw tags .make it as self closing component tag */}
//       {/* <Greet/>
//       <Welcome/> */}
//       {/* <Hello/>
//       <Users/> */}
//       {/* <button onClick={Apple}>Click Me</button> */}
//       {/* <button onClick={()=>alert("Using Alert Function Call")}>Click Me</button> */}

//       {/* Usestate wala Part start from here */}
//       {/* <h1>{data}</h1>
//       <button onClick={updateData}>Update Data</button> */}

//       {/* Props  Used */}
//      {/* <StudentProps name={"Shikha"} email ="Shikhasharma76@gmail.com" />
//       <StudentProps/> */}
      
//       {/* Class Prop used here */}
//       <StudentC name={"Shikha"} email ="Shikhasharma76@gmail.com" />
//       <StudentC/>

//     </div>
//   );
// }

// export default App;



// 2. Get Input Box
// import logo from './logo.svg';
// import './App.css';
// import React ,{useState}from 'react'
// function App() {
// const [data,setData]=useState(null)
// const [print,setPrint]=useState(false)

//   function getData(val)
//   {
//     console.warn(val.target.value)
//     setData(val.target.value)
//     setPrint(false)
//   }
//   return (
//     <div className="App">
//      {
//        print?
//        <h1> {data}</h1>
//        :null
//      }
//     <input type="text" onChange={getData} />
//     <button onClick={()=>setPrint(true)} >Print Data</button>
//     </div>
//   );
// }

// export default App;

// 3. Hise , Show and Toggle in Reactjs
// import logo from './logo.svg';
// import './App.css';
// import React,{useState} from 'react'
// function App() {
//   const [show,setShow]=useState(true)
//   return (
//     <div className="App">
//      {
//        show?<h1>Hello World !</h1>:null
//      }
//      {/* <button onClick={()=>setShow(true)} >Show</button>
//      <button onClick={()=>setShow(false)} >Hide</button> */}
// <button onClick={()=>setShow(!show)} >Toggle</button> 
//     </div>
//   );
// }

// export default App;


// 4. Handle Form | checkbox | input field | select
// import logo from './logo.svg';
// import './App.css';
// import {useState} from 'react'
// function App() {
//   const [name,setName]=useState("");
//   const [tnc,setTnc]=useState(false);
//   const [interest,setInterest]=useState("");
//   function getFormData(e)
//   {
//     console.warn(name,tnc,interest)
//     e.preventDefault()
//   }
//   return (
//     <div className="App">
//      <h1>Handle Form in React</h1>
//      <form onSubmit={getFormData}>
//        <input type="text" placeholder="enter name" value={name} onChange={(e)=>setName(e.target.value)} /> <br /><br />
//        <select onChange={(e)=>setInterest(e.target.value)}>
//          <option>Select Options</option>
//          <option>Marvel</option>
//          <option>DC</option>
//        </select> <br /><br />
//        <input type="checkbox"  onChange={(e)=>setTnc(e.target.checked)} /><span>Accept Terms and conditions</span>
//        <br /><br />
//        <button type="submit">Submit</button>
//        <button>Clear</button>

//      </form>
//     </div>
//   );
// }

// export default App;


// 5. Conditional rendering | If Condition
// import logo from './logo.svg';
// import './App.css';
// import Profile from './components/Profile';
// function App() {
//   return (
//     <div className="App">
//     <Profile />
//     </div>
//   );
// }

// export default App;


// 6.Basic Form validation
// import logo from './logo.svg';
// import './App.css';
// import Login from './components/Login'
// function App() {
//   const data = true;
//   return (
//     <div className="App">
//      <Login />
//     </div>
//   );
// }

// export default App;


// 7. Pass Function as Props
// import logo from './logo.svg';
// import './App.css';
// import User from './components/User'
// import Student from './components/Student'
// function App() {
 
//   function getData() {
//     alert("Hello from app component")
//   }
//   return (
//     <div className="App">
//      <User  data={getData} />
//      <Student data={getData} />
//     </div>
//   );
// }

// export default App;


// 8.Constructor | First life cycle method
// import logo from './logo.svg';
// import './App.css';
// import React from 'react'
// class App extends React.Component{
//   constructor()
//   {
//     super();
//     this.state={
//       name:"Anil sidhu"
//     }
//     console.warn("constructor")
//   }
//   render()
//   {
//     console.warn("render")
//     return<div>
//       <h1>Hello World {this.state.name}</h1>
//     </div>
//   }
// }
// export default App;


// 9. Render life cycle method
// import logo from './logo.svg';
// import './App.css';
// import React from 'react'
// import Use from './components/Use'
// function App() {
// const [name,setName]=React.useState("Anil")

//   return (
//     <div className="App">
//      <h1>Render Method in React</h1>
//      <Use />
//      {/* <button onClick={()=>setName("Sidhu")}>Update Name</button> */}
//     </div>
//   );
// }

// export default App;


// 10. componentDidMount life cycle method in Reactjs
// import './App.css';
// import React from 'react'
// class App extends React.Component {
//   constructor()
//   {
//     super();
//     console.warn("constructor")
//     this.state={name:"anil"}
//   }
//   componentDidMount()
//   {
//     console.warn("componentDidMount")

//   }
//   render()
//   {
//     console.warn("render")

//     return (
//       <div className="App">
//         <h1>Component Did Mount {this.state.name}</h1>
//         <button onClick={()=>this.setState({name:"Sidhu"})}>Update</button>
//       </div>
//     );
//   }
// }

// export default App;


// 11.shouldComponentUpdate life cycle method
// import './App.css';
// import React from 'react'
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state={
//       count:0
//     }
//   }
//   shouldComponentUpdate()
//   {
//     console.warn("shouldComponentUpdate",this.state.count)
//    if(this.state.count<5)
//    {
//      return true;
//    }

//   }

//   render() {
//     return (
//       <div className="App">
//         <h1> Should Component Update  {this.state.count}</h1>
//         <button onClick={()=>this.setState({count:this.state.count+1})}>Update Counter</button>
//       </div>
//     );
//   }
// }

// export default App;


// 12.componentWillUnmount life cycle method
// import './App.css';
// import React from 'react'
// import StudentUn from './components/StudentUn'
// class App extends React.Component {
//   constructor()
//   {
//     super();
//     this.state={
//       show:true
//     }
//   }
//   render() {
//     return (
//       <div className="App">
//         {
//           this.state.show?<StudentUn />
//           :<h4>Component is removed</h4>
//         }
//         <button onClick={()=>this.setState({show:false})}> Toogle Student Component</button>
//       </div>
//     )
//   }
// }

// export default App;



// 13.Hooks in ReactJs
// import './App.css';
// import React,{useState}from 'react'
// function App() {
//   const [data,setData]=useState("Anil")
//   return (
//     <div className="App">
//       <h1>Hooks in React {data}</h1>
//       <button onClick={()=>setData("Peter")}>Update State</button>
//     </div>
//   );
// }

// export default App;

// 14.useEffect Hook in ReactJs
// import './App.css';
// import React, { useEffect, useState } from 'react'
// function App() {
//   const [count, setCount] = useState(0)
//   useEffect(() => {
//     console.warn("use effect")
//   })
//   return (
//     <div className="App">
//       <h1>useEffect in React {count}</h1>
//       <button onClick={() => setCount(count + 1)}>Update Counter</button>
//     </div>
//   );
// }

// export default App;

// 15.useEffect with condition
// import './App.css';
// import React, { useEffect, useState } from 'react'
// function App() {
//   const [count, setCount] = useState(0)
//   useEffect(() => {
//     console.warn("use effect")
//   })
//   return (
//     <div className="App">
//       <h1>useEffect in React {count}</h1>
//       <button onClick={() => setCount(count + 1)}>Update Counter</button>
//     </div>
//   );
// }

// export default App;



// 16.style in ReactJs
// import './App.css';
// import './components/style.css'
// import style from './components/custom.module.css';
// import React from 'react'
// function App() {
//   const styleItem={color:'red',backgroundColor:'black'}
//   return (
//     <div className="App">
//       <h1 className="primary">Style type 1 in React js</h1>
//       {/* //Inline style */}
//       <h1 style={styleItem}>Style type 2 in React js</h1> 
//       <h1 className={style.success} >Style type 3 in React js</h1>
//     </div>
//   );
// }

// export default App;


// 17.INSTALL BOOTSTRAP
// import './App.css';
// import React from 'react'
// import {Button,Badge,Card} from 'react-bootstrap'
// function App() {
//   return (
//     <div className="App">
//       <h1>Install Bootstrap</h1>
//       <h1>
//     Example heading <Badge variant="light">New</Badge>
//   </h1>

//   <Card style={{ width: '18rem' }}>
//   <Card.Img variant="top" src="holder.js/100px180" />
//   <Card.Body>
//     <Card.Title>Card Title</Card.Title>
//     <Card.Text>
//       Some quick example text to build on the card title and make up the bulk of
//       the card's content.
//     </Card.Text>
//     <Button variant="primary">Go somewhere</Button>
//   </Card.Body>
// </Card>
//     </div>
//   );
// }

// export default App;


// 18.List with Bootstrap Table
// import './App.css';
// import React from 'react'
// import {Table} from 'react-bootstrap'
// function App() {
//   const users = [
//     { name: 'Anil', email: 'anil@test.com', contact: '111' },
//     { name: 'Burce', email: 'bruce@test.com', contact: '222' },
//     { name: 'Peter', email: 'peter@test.com', contact: '111' },
//     { name: 'Sam', email: 'sam@test.com', contact: '777' },
//   ]
//   return (
//     <div className="App">
//       <h1>List With Bootstrap Table</h1>
//       <Table striped variant="dark" >
//         <tbody>
//         <tr>
//           <td>Name</td>
//           <td>Email</td>
//           <td>Contacts</td>
//         </tr>
//         {
//           users.map((item,i)=>
//           item.contact==='111'?
//           <tr key={i}>
//           <td>{item.name}</td>
//           <td>{item.email}</td>
//         <td>{item.contact}</td>
//         </tr>:null
//           )
//         }
//         </tbody>
//       </Table>
//     </div>
//   );
// }

// export default App;


// 19. useMemo Hook
// import './App.css';
// import React, { useState } from 'react'
// function App() {
//   const [count, setData] = useState(1)
//   const [item, setItem] = useState(20)

//   const newApple=React.useMemo(
//     function appleTime() {
//       console.warn("Hello")
//       return 100 * count;
//     }
//   ,[item])
//   return (
//     <div className="App">
//       <h1>Hooks in React {count}</h1>
//       {newApple}
//       <button onClick={() => setData(count + 1)}>Update State</button>
//       <button onClick={() => setItem(item * 10)}>Update State</button>

//     </div>
//   );
// }

// export default App;


// 20.useRef Hook example
// import './App.css';
// import React,{useRef} from 'react'
// function App() {
//   let inputRef=useRef(null);
//   function controlInput()
//   {
//   //  inputRef.current.value="abc"
//   // inputRef.current.style.display="none"
//   inputRef.current.focus()
//   }
//   return (
//     <div className="App">
//       <h1>useRef in React </h1>
//       <input type="text" ref={inputRef} />
//       <button onClick={controlInput}>Handle Input</button>
//     </div>
//   );

// }

// export default App;


// 21.Route in React
// import { BrowserRouter,Routes,Route ,Link} from "react-router-dom";
// import './App.css';
// import Home from './components/Home';
// import About from './components/About';
// import UserCo from "./components/UserCo";

// function App(){
//     return (
//         <div className="App">
//             <BrowserRouter>
//             <Link to="/About">About</Link>
//             <br/>
//             <Link to="/">Home</Link>
//             <br/>
//             <Link to="/UserCo">User</Link>
//             <Routes>
//                 <Route path="/" element={<Home/>}></Route>
//                 <Route path="/About" element={<About/>}></Route>
//                 <Route path="/UserCo/:name" element={<UserCo/>}></Route>
//             </Routes>
//             </BrowserRouter>
//         </div>
//     );
// }
// export default App;


// 22. Routing
// import './App.css';
// import React from 'react'
// import { BrowserRouter as Router, Link, Route, BrowserRouter } from 'react-router-dom'
// function App() {
//   return (
//     <div className="App">
//         <BrowserRouter>
//       <Router>
//         <Link to="/home" >Home</Link>
//         <br></br>
//         <Link to="/about" >About</Link>
//         <Route path="/home" > <HOme /></Route>
//         <Route path="/about" > <ABout /></Route>


//       </Router>
//       </BrowserRouter>
//     </div>
//   );
// }

// function HOme() {
//   return (
//     <div>
//       <h1>Home Page</h1>
//       <p>This is my Home Page</p>
//     </div>
//   )
// }
// function ABout() {
//   return (
//     <div>
//       <h1>About Page</h1>
//       <p>This is my About Page</p>
//     </div>
//   )
// }
// export default App;



// 23. fetch API | GET method
// import './App.css';
// import React,{useEffect,useState} from 'react'
// function App() {
//   const [users,setUser]=useState([])
//   useEffect(()=>{
//     fetch("http://localhost:4000/todo").then((result)=>{
//       result.json().then((resp)=>{
//         // console.warn(resp)
//         setUser(resp)
//       })
//     })
//   },[])
//   console.warn(users)
//   return (
//     <div className="App">
//       <h1>Get API Call </h1>
//       <table border="1">
//        <tbody>
//        <tr>
//           <td>ID</td>
//           <td>Name</td>
//           <td>Email</td>
//           <td>Mobile</td>
//         </tr>
//         {
//           users.map((item,i)=>
//             <tr key={i}>
//             <td>{item.userId}</td>
//           <td>{item.name}</td>
//           <td>{item.email}</td>
//             <td>{item.mobile}</td>
//           </tr>
//           )
//         }
//        </tbody>
//       </table>
//     </div>
//   );
// }
// export default App;


// 24. GET chatgpt
// import React, { useState, useEffect } from 'react';

// function App() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(data => setData(data))
//       .catch(error => console.log(error));
//   }, []);

//   return (
//     <div>
//       <h1>Users</h1>
//       <ul>
//         {data.map(user => (
//           <li key={user.id}>
//             <h2>{user.name}</h2>
//             <p>{user.email}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;



// 25.POst chatgpt
// import React, { useState } from 'react';

// function MyComponent() {
//   const [formData, setFormData] = useState({});

//   const handleFormSubmit = event => {
//     event.preventDefault();

//     fetch('https://jsonplaceholder.typicode.com/users', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(formData),
//     })
//       .then(response => response.json())
//       .then(data => console.log(data))
//       .catch(error => console.error(error));
//   };

//   const handleInputChange = event => {
//     const { name, value } = event.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   return (
//     <form onSubmit={handleFormSubmit}>
//       <label>
//         Name:
//         <input type="text" name="name" onChange={handleInputChange} />
//       </label>
//       <label>
//         Email:
//         <input type="email" name="email" onChange={handleInputChange} />
//       </label>
//       <button type="submit">Submit</button>
//     </form>
//   );
// }
// export default MyComponent;


// 26.PUT chat Gpt
// import React, { useState, useEffect } from 'react';

// function MyComponent() {
//   const [formData, setFormData] = useState({});
//   const [dataId, setDataId] = useState(null);

//   useEffect(() => {
//     fetch('https://api.example.com/data/123')
//       .then(response => response.json())
//       .then(data => {
//         setDataId(data.id);
//         setFormData({ name: data.name, email: data.email });
//       })
//       .catch(error => console.error(error));
//   }, []);

//   const handleFormSubmit = event => {
//     event.preventDefault();

//     fetch(`https://api.example.com/data/${dataId}`, {
//       method: 'PUT',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(formData),
//     })
//       .then(response => response.json())
//       .then(data => console.log(data))
//       .catch(error => console.error(error));
//   };

//   const handleInputChange = event => {
//     const { name, value } = event.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   return (
//     <form onSubmit={handleFormSubmit}>
//       <label>
//         Name:
//         <input type="text" name="name" value={formData.name || ''} onChange={handleInputChange} />
//       </label>
//       <label>
//         Email:
//         <input type="email" name="email" value={formData.email || ''} onChange={handleInputChange} />
//       </label>
//       <button type="submit">Save</button>
//     </form>
//   );
// }
// export default MyComponent;


// 27.DELETE chatGPT
// import React, { useState, useEffect } from 'react';

// function MyComponent() {
//   const [dataId, setDataId] = useState(null);

//   useEffect(() => {
//     fetch('https://api.example.com/data/123')
//       .then(response => response.json())
//       .then(data => setDataId(data.id))
//       .catch(error => console.error(error));
//   }, []);

//   const handleDeleteClick = () => {
//     fetch(`https://api.example.com/data/${dataId}`, { method: 'DELETE' })
//       .then(response => console.log(response))
//       .catch(error => console.error(error));
//   };

//   return (
//     <div>
//       <p>Are you sure you want to delete this record?</p>
//       <button onClick={handleDeleteClick}>Delete</button>
//     </div>
//   );
// }
// export default MyComponent;






