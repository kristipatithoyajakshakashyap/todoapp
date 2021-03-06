import React, {useState} from 'react';
import db from './firebase'
import {Button,List,ListItem,ListItemText,Modal} from '@material-ui/core';
import DeleteForevereIcon from '@material-ui/icons/DeleteForever';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  paper:{
    position:'absolut',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border:'2px sodil #000',
    padding: theme.spacing(2,4,3),
  }
}))
function Todo(props){
  const classes = useStyles();
  const [open,setOpen] = useState(false);
  const [input,setInput] = useState();
  const handleOpen = () =>{
    setOpen(true)
  }
  const updateTodo = () =>{
    db.collection('todos').doc(props.todo.id).set({
      todo: input
    },{ merge: true });
    setOpen(false);
  }
  return (
    <>
      <Modal
          open={open}
          onClose={e => setOpen(false)}
      >
      <div className={classes.paper}>
        <h1>I am Modal</h1>
        <input placeholder={props.todo.todo} value= {input} onChange={event => setInput(event.target.value)}/>
        <Button onClick={updateTodo}>Update Todo</Button>
      </div>
    </Modal>
      <List>
        <ListItem>
          <ListItemText primary='Todo' secondary={props.todo.todo}/>
          <Button onClick={e => setOpen(true)}>Edit</Button>
          <DeleteForevereIcon onClick={event => db.collection('todos').doc(props.todo.id).delete()}/>
        </ListItem>
      </List>
    </>
  )
}

export default Todo;
