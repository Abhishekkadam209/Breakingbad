import React,{useState ,useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
  
const Details = ( props ) => {

    const [info,setInfo]= useState();
    const [loading,setLoading] = useState( true);
    const [quotes,setQuotes]= useState([]);

    const fetchCharacters = async () =>{
         
        const characterdata= await axios.get(`https://www.breakingbadapi.com/api/characters/${props.match.params.id}`);
         setInfo(characterdata.data[0]);
  
    }

    const fetchquotes= async () =>{

        const name=info.name.split(" ");
        const characterquote=await axios.get(`https://www.breakingbadapi.com/api/quote?author=${name[0]}+${name[1]}`);
         setQuotes(characterquote.data);
         setLoading(false);
    }

    useEffect(()=>{

        console.log("in loop");
        if(!info)
        fetchCharacters();

        if(info)
            fetchquotes();
            
    },[info]);

        
    if(loading){
        return(
            <div align="center">
                        <h1>Loading.....</h1>
            </div>
        );
    } 

   else{
 
        return(

             <div   style={{background:" #f9ecf9"}} >
                 <nav style={{height:"50px"}}>
                     <Link to="/home" style={{textDecoration:"none",position:"relative",left:"45%",top:"30%" }}>
                            <button  type="button" className="btn btn-secondary">Home</button>
                     </Link>
                 </nav>

                <div className="container">
                    <div className="row justify-content-around" style={{marginTop:"30px",marginBottom:"30px"}}>

                            <div className="col-md-4">
                                    <img src={info.img}  width="100%" />
                            </div>
                            <div className="col-md-6">
                                
                                <h1> Name : {info.name}</h1>
                                <br></br>
                                <h4>Date of birth : {info.birthday}</h4>
                                <h4> Status: {info.status}</h4> 
                                <h4> Nickname: {info.nickname}</h4> 
                                <h4> portrayed: {info.portrayed}</h4> 
                                
                            </div>
                        
                    </div> 

                    <div align="center" style={{marginTop:"30px",marginBottom:"30px"}} > 
                                <h1>--QUOTES--</h1>  
                    </div>

                    <div className="row">
 
                        {quotes.map((Q)=>{

                            
                            return(
                                <div className="col-12 mb-3 " key={Q.quote_id}  >
                                    
                                    <h5>
                                    : "{Q.quote}"
                                    </h5>
                                </div> 
                            );
 
                        })}
        
                    </div>

                </div>

                <nav style={{height:"100px"}}>
                     <Link to="/home" style={{textDecoration:"none",position:"relative",left:"45%",top:"30%" }}>
                            <button  type="button" className="btn btn-secondary">Home</button>
                     </Link>
                 </nav>

             </div>
          
            
        );

   }
    
}

export default Details;