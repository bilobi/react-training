import { Fragment,useEffect,useRef,useState } from 'react'
import { PeopleModel } from './models/people_model'
import './App.css'
// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import Input from "./component/input";

function App({ msg }: {msg: string }) {
  const [isTrue,setIsTrue]=useState(true)
  const [crowd, setCrowd]=useState<PeopleModel[]>([])
  const [firstName,setFirstName]=useState("")
  const [lastName,setLastName]=useState("")
  const [dob,setDob]=useState("")

  // Refs

  let firstNameRef=useRef<HTMLInputElement>(null);
  let lastNameRef=useRef<HTMLInputElement>(null);
  let dobRef=useRef<HTMLInputElement>(null);


  const toggleTrue=()=>{
    if(isTrue) setIsTrue(false)
    else setIsTrue(true)
  }

  let people:PeopleModel[];

  useEffect(()=>{
    console.log("useEfect is freind");
   people=[{
      id:1,
      firstName:"Mary",
      lastName:"Jones",
      dob:new Date("1997-03-01").toLocaleString()
    },{
      id:2,
      firstName:"Jhon",
      lastName:"Doe",
      dob:new Date("1999-03-21").toLocaleString()
    }] ;

    setCrowd(people);
    
  },[])

  const handleSubmit=(event:any)=>{
    event.preventDefault();
    addData(firstName,lastName,dob);
    setFirstName("")
    setLastName("")
    setDob("")

      if(firstNameRef.current != null){
      firstNameRef.current.value=""
    }
    if(lastNameRef.current != null){
      lastNameRef.current.value =""
    }
    if(dobRef.current != null){
      dobRef.current.value=Date.now().toLocaleString()
    }
      

  }
  const addData=(firstName:string,lastName:string,dob:string)=>{
    console.log(firstName,lastName,dob)
    const id=crowd.length+1
    const newData=new PeopleModel(id,firstName,lastName,dob);
    const newList=crowd.concat(newData);
    setCrowd(newList)
  }

  return (
    <Fragment>
      <h1 className="h1-green">{msg}</h1>
      <hr />
      {
          <Fragment>
            <p>The current value of isTrue is {isTrue?<>true</>:<>false</>}</p>
            <hr />
          </Fragment>
      }
      <a href="#" className='btn btn-outline-secondary' onClick={toggleTrue}>Toggle isTrue</a>
        <hr />
        <form autoComplete='off' onSubmit={handleSubmit}>
          <div className='mb-3'>
            <Input             
            type="text" 
            title='First Name'
            name="first-name"            
            autoComplete='first-name-new'
            onChange={(event)=>setFirstName(event.target.value)}
            className='form-control'
            ref={firstNameRef}
            />
          
            <Input 
            type="text" 
            title="Last Name"
            name="last-name"
            autoComplete='last-name-new'
            ref={lastNameRef}
            onChange={(event)=>setLastName(event.target.value)}
            className='form-control'/>
      
            <Input 
            type="date" 
            title="Date Of Birth"
            name="dob"
            autoComplete='dob-new'
            ref={dobRef}
            onChange={(event)=>setDob(event.target.value)}
            className='form-control'/>
          </div>
          <input type="submit" value="Submit" className='btn btn-primary'/>
          <hr />
          <div>
            First Name : {firstName} <br />
            Last Name  : {lastName} <br />
            DOB        : {dob}
          </div>
        </form>
        <hr />
        <h3>People</h3>
        <ul className="list-group">
        {    crowd.map((p)=>
          (<li key={p.id} className='list-group-item'>{p.firstName} {p.lastName}</li>)
        )}

        </ul>
      



    
    </Fragment>
  )
}

export default App
