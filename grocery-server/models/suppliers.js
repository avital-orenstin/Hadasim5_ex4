import './App/css'
import { useState, useEffect } from 'react';
function Suppliers(){
    const [nameofcompony,setnameofcompony]=useState('');
    const [phonNumber,setphonNumber]=useState('');
    const [privatename,setprivatename]=useState('');
    const [goods,setgoods]=useState([]);
    const fetchSuppliers=async()=>{
        const response=await fetch('http://localhost:5000');
        const data=await response.json();
        setSuppliers(data);
    }
    useEffect(()=>{
        fetchSuppliers();
    },[])
    const editaSuppliers=(Suppliers)=>{
        setnameofcompony(Suppliers.nameofcompony);
        setphonNumber(Suppliers.phonNumber);
        setprivatename(Suppliers.privatename);
        setgoods(Suppliers.goods);
    }
    return (
        <div>
          <h2> Suppliers entry{privatename}</h2>
          <label>N ame Of The Compony</label>
            <input
                type="text"
                value={nameofcompony}
                onChange={(e) => setnameofcompony(e.target.value)}
            />

            <label>Phone Number</label>
            <input
                type="text"
                value={phonNumber}
                onChange={(e) => setphonNumber(e.target.value)}
            />
             <label>Phone Number</label>
            <input
                type="text"
                value={privatename}
                onChange={(e) => setgoods(e.target.value)}
            />
             <label>Phone Number</label>
            <input
                type="text"
                value={goods}
                onChange={(e) => setgoods(e.target.value)}
            />
        </div>
      );
    }
    