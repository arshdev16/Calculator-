import React,{ useState } from 'react';

function Main() {
  let [space,setSpace] = useState(' ')
  let listener = (e)=>{
    if(e.target.value === "C")return setSpace(' ')
    if(e.target.value === "+/-")return setSpace(space-space*2)
    if(e.target.value === "%")return setSpace(space+='%')
    // eslint-disable-next-line
    if(e.target.value === "=")return setSpace(eval(space))
    else return setSpace(space+=e.target.value)    
    
  }
  return (
    <div className="d-flex justify-content-center flex-column container w-75 bg-dark mt-4"> 
    <input className="form-control" value={space} disabled/>
    <table className="d-flex flex-column justify-content-evenly">
     <tr>
      <th className="w-50 col-md-4"><button value="C" onClick={listener} type="button" className="btn justify-content-center  btn-dark">C</button></th>
      <th className="w-50 col-md-4"><button value="+/-" onClick={listener} type="button" className="btn justify-content-center  btn-dark">+/-</button></th>
      <th className="w-50 col-md-4"><button value="%" onClick={listener} type="button" className="btn justify-content-center  btn-dark">%</button></th>
      <th className="w-50 col-md-4"><button value="/" onClick={listener} type="button" className="btn justify-content-center  btn-warning">÷</button></th>
    </tr>
    <tr className="justify-content-evenly"> 
      <th className="w-50 col-md-4"><button value="7" onClick={listener} type="button" className="btn justify-content-center  btn-dark">7</button></th>
      <th className="w-50 col-md-4"><button value="8" onClick={listener} type="button" className="btn justify-content-center  btn-dark">8</button></th>
      <th className="w-50 col-md-4"><button value="9" onClick={listener} type="button" className="btn justify-content-center  btn-dark">9</button></th>
      <th className="w-50 col-md-4"><button value="*" onClick={listener} type="button" className="btn justify-content-center  btn-warning">×</button></th>
    </tr>
    <tr className="justify-content-evenly"> 
      <th className="w-50 col-md-4"><button value="4" onClick={listener} type="button" className="btn justify-content-center  btn-dark">4</button></th>
      <th className="w-50 col-md-4"><button value="5" onClick={listener} type="button" className="btn justify-content-center  btn-dark">5</button></th>
      <th className="w-50 col-md-4"><button value="6" onClick={listener} type="button" className="btn justify-content-center  btn-dark">6</button></th>
      <th className="w-50 col-md-4"><button value="-" onClick={listener} type="button" className="btn justify-content-center  btn-warning">-</button></th>
    </tr>
    <tr className="justify-content-evenly"> 
      <th className="w-50 col-md-4"><button value="1" onClick={listener} type="button" className="btn justify-content-center  btn-dark">1</button></th>
      <th className="w-50 col-md-4"><button value="2" onClick={listener} type="button" className="btn justify-content-center  btn-dark">2</button></th>
      <th className="w-50 col-md-4"><button value="3" onClick={listener} type="button" className="btn justify-content-center  btn-dark">3</button></th>
      <th className="w-50 col-md-4"><button value="+" onClick={listener} type="button" className="btn justify-content-center  btn-warning">+</button></th>
    </tr>
    <tr className="justify-content-evenly"> 
      <th className="w-50 h-50 col-md-4"><button value="0" onClick={listener} type="button" className="btn justify-content-center  btn-dark">0</button></th>
      <th className="w-50 h-50 col-md-4"><button value="." onClick={listener} type="button" className="btn justify-content-center  btn-dark">.</button></th>
      <th className="w-50 h-50 col-md-4"><button value="=" onClick={listener} type="button" className="btn justify-content-center  btn-warning">=</button></th>
    </tr>
    </table>
    </div>
  );
}

export default Main;
