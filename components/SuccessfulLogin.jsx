import {useNavigate} from 'react-router-dom';


export default function SuccessfulLogin(){
  const navigate = useNavigate();
  

  
  return(
    <div className="text-left m-5">
      LOGIN WAS SUCCESSFUL
      <br/>
      <button onClick={() => {navigate("/")}}> Return To Home </button>
    </div>
  )
}