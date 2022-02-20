import React, { useState,useEffect} from 'react';
import { Button,FormControl,InputLabel,Input } from '@material-ui/core';
import Todo from './Todo';
import './App.css';
import db from './firebase';
import firebase from 'firebase';

function App() {
  const [todos,setTodos] = useState([])
  const [input,setInput] = useState('')
  //when the app loads , we need to listen to the data and fetch new todos as they get added/removed
  useEffect(()=>{
    //this code fires when app.js loads
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot=>{
      console.log(snapshot.docs.map(doc => doc.data().todo))
      setTodos(snapshot.docs.map(doc =>({id: doc.id,todo:doc.data().todo})))
    })
  },[]);
  const addTodo = (event) =>{
    event.preventDefault() //stops refresh
    db.collection('todos').add({
      todo:input,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
    setTodos([...todos,input])
    setInput('') //clear up the input
  }
  return (
    <div className="App">
          <h1>hello world</h1>
      <form>
        <FormControl>
          <InputLabel>Write a Todo</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)}/>
        </FormControl>
        <Button  disabled={!input} type='submit' onClick={addTodo} variant="contained" color="primary">
          Add ToDo
        </Button>
      </form>
      <ul>
        {todos.map((todo) =>{
        return  <Todo todo={todo}/>
        })}
      </ul>
    </div>
  );
}

export default App;
