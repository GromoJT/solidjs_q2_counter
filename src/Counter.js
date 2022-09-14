import {createSignal} from "solid-js"


export default ()=>{
    const [count,setCount] = createSignal(0);

    return(
        

<div className="grid grid-rows-3 grid-flow-col h-25 max-h-25">
<div className="row-span-3 text-white bg-blue-500">
<div className="grid grid-rows-2 grid-cols-2 grid-flow-col text-xl px-2">
            <div className="row-span-1 col-span-2 text-center mt-6 mb-2">{count}</div>
            <button className="row-span-1 col-span-1 text-center border-2 mx-1 text-xl" onClick={()=>setCount(count() +1)}>+1</button>
            <button className="row-span-1 col-span-1 text-center border-2 mx-1 text-xl" onClick={()=>setCount(count() -1)}>-1</button>
        </div>
</div>
<div className="row-span-1 col-span-2 bg-blue-100 p-2 text-3xl">
  <div>Name: solidjs_counter</div>
</div>
<div className="row-span-2 col-span-2 bg-red-500 p-2 text-center text-2xl">
  <div>Framework: solid-js</div>
  <div>Language: JavaScript</div>
  <div>CSS: Tailwind</div>
</div>
</div>


    )

}

/*

 <div className="flex content-center flex-wrap bg-gray-200 border-red-300">
            <div className="w-1/2 p-1 text-center border-2 border-black">Licznik = {count}</div>
            <button onClick={()=>setCount(count() +1)}>+1</button>
            <button onClick={()=>setCount(count() -1)}>-1</button>
        </div>

*/ 