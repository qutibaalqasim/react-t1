import React, { useEffect, useState } from 'react'

export default function Counter() {

    const [counter, setCounter] = useState(0);
    const [name, setName] = useState("qutiba");
 const increment = ()=>{
  setCounter(counter+1);
 }

 const decrement = ()=>{
  setCounter(counter-1);
 }
 const changeName =() =>{
    if(name == "qutiba"){
    setName("Ahmad");
    }else{
    setName("qutiba");
    }
 }

 const Hello = ()=>{
    console.log("Hello!");
 }

 const nameChanged = ()=>{
    console.log("Name changed!");
 }

 useEffect(()=>{
    Hello();
 },[counter]);
 
 useEffect(()=>{
    nameChanged();
 },[name]);
 
  return (
    <div>
    <h1>Counter: {counter}</h1>
    <button onClick={increment} className='btn btn-outline-success'>+</button>
    <button onClick={decrement} className='btn btn-outline-danger'>-</button>
    <h2>Name: {name}</h2>
    <button onClick={changeName}>change name</button>
    </div>
  )
}
