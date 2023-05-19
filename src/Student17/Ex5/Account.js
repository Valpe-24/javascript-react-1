import React from 'react'
import { useState } from 'react';

export const Account = () => {
    let [show, setShow] = useState(false); 
    const clickHandler = () => {
      setShow(!show);
    }
  return (
    <div> Account Information 
        <table>
            <tr>
            <td>Balance</td>
            <td>$100,000</td>
            </tr>

            <tr>
            <td>Interest</td>
            <td>%5.0</td>
            </tr>


            <tr>
            <td>Account Number</td>
            <td>{show ? <span>11-1234</span>: null}</td>
            <td><button onClick={() => clickHandler()}>{show? "hide":"show"}</button></td>
            </tr>

        </table>
    </div>
  )
}
