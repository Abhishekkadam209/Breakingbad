import React, {useState ,useEffect} from 'react';
import axios from 'axios';
import Home from './homepage';
import { Switch, Route, Redirect ,BrowserRouter} from 'react-router-dom';
import Details from './detais';
import HeaderComponent from './headercomponent';
 
const Main = () => {

    const [Characters,setCharacters]= useState([]);
    const [loading,setLoading] = useState( true);
    const [status,setStatus] = useState("All");

    const changeStatus = (status)=>{
        setStatus(status);
    }
    

    const fetchCharacters = async () =>{
        
        const data= await axios.get('https://www.breakingbadapi.com/api/characters');
        setCharacters(data);
        setLoading(false);

    }

    useEffect(()=>{

        fetchCharacters();
            
    },[]);


    if(loading){
        return(
       
            
            <BrowserRouter>
                <HeaderComponent/>
                <Switch> 
                        <Route path="/home">  <Home  loading={loading} 
                            Characters={ 
                             Characters.data
                            } 
                            status={status} changeStatus={changeStatus} />   </Route>
                        <Route path="/character/:id"    component={Details} />    
                        <Redirect to="/home" />
                </Switch>
            </BrowserRouter>
                
        );
    }
    else{
        return(
       
            <BrowserRouter>
              <HeaderComponent/>
                <Switch> 
                        <Route path="/home">  <Home  loading={loading} 
                            Characters={
                                Characters.data.filter((val)=>{
    
                                    if(status==="All")
                                        return val;
                                    else{
                                        if(val.status===status)
                                            return val;
                                    }
    
                                })
     
                            } 
                            status={status} changeStatus={changeStatus} />   </Route>
                        <Route path="/character/:id"    component={Details} />    
                        <Redirect to="/home" />
                </Switch>
            </BrowserRouter>
                
        );
    }
 
}

export default Main;