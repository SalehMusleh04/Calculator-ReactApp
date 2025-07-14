import logo from './logo.svg';
import './App.css';
import calc from './assets/images/calc.png'
import {useState,useRef} from "react"; 

function App() {

  const inputRef = useRef(null);
  
  const [result , setResult] = useState(0); 
   
  function add(e){
    e.preventDefault();  // forms فبدي امنع السلوك الافتراضي اله وهو اعادة تحميل الصفحة عند الضغط ... وهاي مفيدة جدا وغالبا تستخدم مع ال  form وانا داخل ال  plus بستخدمها لما بدي امنع السلوك الافتراضي لهذا الشيء وهون انا عندي هاي الكبسة تاعت ال 
    setResult((result) => result + Number(inputRef.current.value)) // Number ل  String استخدمتها عشان احول ال  Number هاي ال  
  }

  function subtract(e){
    e.preventDefault(); 
  setResult((result) => result - Number(inputRef.current.value))  
  }

  function multiply(e){
     e.preventDefault(); 
      setResult((result) => result * Number(inputRef.current.value))  
  }
  
  function divide(e){
    e.preventDefault(); 
      setResult((result) => result / Number(inputRef.current.value))  
  }
  function reset_Input(e){
     e.preventDefault(); 
      inputRef.current.value = 0
  }
   function reset_Result(e){
     e.preventDefault(); 
      setResult((result) => result = 0)  
  }
  return (
    <>

     <h1>Simplest Working Calculator</h1>
     <div >
      <form className='calc-container'> 
      <p id='result'>Result : {result}</p>
       <input pattern="[0-9]" ref={inputRef} type='text' id='field' placeholder="Type a number" />
       <div className='btns'>
       <div className='btns1'>
         <button onClick={add} className='btn'>Add</button>
         <button onClick={subtract} className='btn'>Subtract</button>
         <button onClick={multiply} className='btn'> Multiply</button>
         <button onClick={divide} className='btn'>Divide</button>
       </div>

      <br/> 
     <div className='btns2'>
     <button onClick={reset_Input} className='btn'>Reset Input</button>
      <button onClick={reset_Result} className='btn'>Reset Result</button>
     </div>

     </div>
</form>
  </div>
    </>
  );
}

export default App;
