import React, { useRef } from 'react'

function StudentMarkSheet() {

    let firstNameInputRef = useRef();
    let lastNameInputRef = useRef();
    let engInputRef = useRef();
    let hinInputRef = useRef();
    let telInputRef = useRef();
    let mathInputRef = useRef();
    let sciInputRef = useRef();
    let socInputRef = useRef();
    let gkInputRef = useRef();
    let compInputRef = useRef();

    let resultParaRef = useRef();

    let firstNameResultSpanRef = useRef();
    let lastNameResultSpanRef = useRef();
    let engResultSpanRef = useRef();
    let hinResultSpanRef = useRef();
    let telResultSpanRef = useRef();
    let mathResultSpanRef = useRef();
    let sciResultSpanRef = useRef();
    let socResultSpanRef = useRef();
    let gkResultSpanRef = useRef();
    let compResultSpanRef = useRef();
  return (
    <div>
    <form>
        <h2>STUDENT MARKSHEET</h2>
    <div>
      <label>FIRST NAME</label>
      <input ref={firstNameInputRef} onFocus={()=>{
        firstNameInputRef.current.style.backgroundColor = "#2a2f36";
      }}
      onBlur={()=>{
        firstNameInputRef.current.style.backgroundColor = "";
      }}></input>
      <span ref={firstNameResultSpanRef}></span>
    </div>
    <div>
      <label>LAST NAME</label>
      <input ref={lastNameInputRef} onFocus={()=>{
        lastNameInputRef.current.style.backgroundColor = "#2a2f36";
      }}
        onBlur={()=>{
            lastNameInputRef.current.style.backgroundColor = "";
      }}></input>
      <span ref={lastNameResultSpanRef}></span>
    </div>
    <div>
      <label>ENGLISH</label>
      <input type="number" ref={engInputRef} onChange={()=>{
        let marks = Number(engInputRef.current.value);
        console.log(marks >=35?"Pass":"Fail")
        engResultSpanRef.current.innerHTML = marks >= 35? "😁 Pass":"😭 Fail";
      }}
      onFocus={()=>{
        engInputRef.current.style.backgroundColor = "#2a2f36";
      }}
      onBlur={()=>{
        engInputRef.current.style.backgroundColor = "";
      }}></input>
      <span ref={engResultSpanRef}></span>
    </div>
    <div>
      <label>HINDI</label>
      <input type="number" ref={hinInputRef} onChange={()=>{
        let marks = Number(hinInputRef.current.value);
        console.log(marks >=35?"Pass":"Fail")
        hinResultSpanRef.current.innerHTML = marks >= 35? "😁 Pass":"😭 Fail";
      }}
      onFocus={()=>{
        hinInputRef.current.style.backgroundColor = "#2a2f36";
      }}
      onBlur={()=>{
        hinInputRef.current.style.backgroundColor = "";
      }}></input>
      <span ref={hinResultSpanRef}></span>
    </div>
    <div>
      <label>TELUGU</label>
      <input type="number" ref={telInputRef} onChange={()=>{
        let marks = Number(telInputRef.current.value);
        console.log(marks >=35?"Pass":"Fail")
        telResultSpanRef.current.innerHTML = marks >= 35? "😁 Pass":"😭 Fail";
      }}
      onFocus={()=>{
        telInputRef.current.style.backgroundColor = "#2a2f36";
      }}
      onBlur={()=>{
        telInputRef.current.style.backgroundColor = "";
      }}></input>
      <span ref={telResultSpanRef}></span>
    </div>
    <div>
      <label>MATHEMATICS</label>
      <input type="number" ref={mathInputRef} onChange={()=>{
        let marks = Number(mathInputRef.current.value);
        console.log(marks >=35?"Pass":"Fail")
        mathResultSpanRef.current.innerHTML = marks >= 35? "😁 Pass":"😭 Fail";
      }}
      onFocus={()=>{
        mathInputRef.current.style.backgroundColor = "#2a2f36";
      }}
      onBlur={()=>{
        mathInputRef.current.style.backgroundColor = "";
      }}></input>
      <span ref={mathResultSpanRef}></span>
    </div>
    <div>
      <label>SCIENCE</label>
      <input type="number" ref={sciInputRef} onChange={()=>{
        let marks = Number(sciInputRef.current.value);
        console.log(marks >=35?"Pass":"Fail")
        sciResultSpanRef.current.innerHTML = marks >= 35? "😁 Pass":"😭 Fail";
      }}
      onFocus={()=>{
        sciInputRef.current.style.backgroundColor = "#2a2f36";
      }}
      onBlur={()=>{
        sciInputRef.current.style.backgroundColor = "";
      }}></input>
      <span ref={sciResultSpanRef}></span>
    </div>
    <div>
      <label>SOCIAL STUDIES</label>
      <input type="number" ref={socInputRef} onChange={()=>{
        let marks = Number(socInputRef.current.value);
        console.log(marks >=35?"Pass":"Fail")
        socResultSpanRef.current.innerHTML = marks >= 35? "😁 Pass":"😭 Fail";
      }}
      onFocus={()=>{
        socInputRef.current.style.backgroundColor = "#2a2f36";
      }}
      onBlur={()=>{
        socInputRef.current.style.backgroundColor = "";
      }}></input>
      <span ref={socResultSpanRef}></span>
    </div>
    <div>
      <label>GENERAL KNOWLEDGE</label>
      <input type="number" ref={gkInputRef} onChange={()=>{
        let marks = Number(gkInputRef.current.value);
        console.log(marks >=35?"Pass":"Fail")
        gkResultSpanRef.current.innerHTML = marks >= 35? "😁 Pass":"😭 Fail";
      }}
      onFocus={()=>{
        gkInputRef.current.style.backgroundColor = "#2a2f36";
      }}
      onBlur={()=>{
        gkInputRef.current.style.backgroundColor = "";
      }}></input>
      <span ref={gkResultSpanRef}></span>
    </div>
    <div>
      <label>COMPUTER</label>
      <input type="number" ref={compInputRef} onChange={()=>{
        let marks = Number(compInputRef.current.value);
        console.log(marks >=35?"Pass":"Fail")
        compResultSpanRef.current.innerHTML = marks >= 35? "😁 Pass":"😭 Fail";
      }}
      onFocus={()=>{
        compInputRef.current.style.backgroundColor = "#2a2f36";
      }}
      onBlur={()=>{
        compInputRef.current.style.backgroundColor = "";
      }}></input>
      <span ref={compResultSpanRef}></span>
    </div>

    <div>
        <button type="button" onClick={()=>{

            let firstName = (firstNameInputRef.current.value);
            let lastName = (lastNameInputRef.current.value);
            let engMarks = Number(engInputRef.current.value);
            let hinMarks = Number(hinInputRef.current.value);
            let telMarks = Number(telInputRef.current.value);
            let mathMarks = Number(mathInputRef.current.value);
            let sciMarks = Number(sciInputRef.current.value);
            let socMarks = Number(socInputRef.current.value);
            let gkMarks = Number(gkInputRef.current.value);
            let compMarks = Number(compInputRef.current.value);
 

            let totalMarks = engMarks+hinMarks+telMarks+mathMarks+sciMarks+socMarks+gkMarks+compMarks;
            let perc = ((totalMarks/800)*100).toFixed(2);


            resultParaRef.current.innerHTML = `${firstName} ${lastName} got total marks of ${totalMarks} with ${perc}%`

        }}   >Result</button>
    </div>
        <p ref={resultParaRef}></p>
        </form>
    </div>
   
  )
}

export default StudentMarkSheet
