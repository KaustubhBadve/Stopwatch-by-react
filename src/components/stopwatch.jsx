import React,{useState} from 'react'

// function msToTime(duration) {
//     var milliseconds = Math.floor((duration % 1000) / 100),
//       seconds = Math.floor((duration / 1000) % 60),
//       minutes = Math.floor((duration / (1000 * 60)) % 60),
//       hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  
//     hours = (hours < 10) ? "0" + hours : hours;
//     minutes = (minutes < 10) ? "0" + minutes : minutes;
//     seconds = (seconds < 10) ? "0" + seconds : seconds;
  
//     return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
// }



const Stopwatch = () => {
    const [watch, setWatch] = useState(0)
    const [timerID, settimerID] = useState(null)    

const Start=()=>{

if(!timerID){
    const id=setInterval(()=>{
        if(watch==10)
        {
            clearInterval(id)
        }
        else{
            setWatch((watch)=>watch+1)
            settimerID(id)
        }
    },100)
}
return ()=>{
    clearInterval(timerID)
}

}

const Pause=()=>{
    clearInterval(timerID)
    settimerID(null)
}

const Reset=()=>{
    clearInterval(timerID)
    setWatch(0)
    settimerID(null)
}

    return (
      <div>
    <h1>Timer</h1>
    {/* <h1>{msToTime(watch)}</h1> */}
    {<h1>{watch}</h1>}
    <div>
    <button onClick={Start}>Start</button>
    <button onClick={Pause}>Pause</button>
    <button onClick={Reset}>Reset</button>
    </div>
    </div>
  )
}

export default Stopwatch