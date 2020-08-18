import React from 'react';
import '../App.css'
const Footer=(props)=>{
    
        
    return(
        <div className="buttonBlock">
        <span>    <button onClick={props.navigatefirst} disabled={props.currentpage===1}>First</button></span>
            <span><button onClick={props.navigateprev} disabled={props.currentpage===1}>previous</button></span>
            <span>      <input type="text" value= {props.currentpage} /></span>
            <span>   <button onClick={props.navigatenext} disabled={props.currentpage===props.lastPage}>Next</button></span>
            <span>    <button onClick={props.navigatelast} disabled={props.currentpage===props.lastPage}>Last</button></span>
            <span id="pagesize">   <select id='pagesize'  onClick={(event)=>{props.handlepagesize(event)}}>
               <option value='5'>5</option> 
                <option value='10'>10</option> 
                <option value='20'>20</option> 
            </select></span>
        </div>
    )
}
export default Footer;