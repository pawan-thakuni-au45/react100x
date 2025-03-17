


//this was the frist day to write some code and we just have created simple connect wallet with airdrop functionaility

import { useState } from "react"

//custom hook
//today we learn coustom hook==>it is a powerful feature in react that let us encapsulate and reuse some stateful logic acroos our components



function useCount(){
  const [count,setCount]=useState(0)

  function countnum(){
    setCount(count=>count+1);
  }
  return {
    count:count,
    countnum:countnum
  }


}
function App() {
  
  
 
  return <div>
   frgrg
  <CountNumber/>
  
  </div>
}

function CountNumber(){

  const{count,countnum}=useCount();

  return <div> <button style={{color:"white"}}  onClick={countnum}>count :{count} </button>
  </div>
}

export default App



