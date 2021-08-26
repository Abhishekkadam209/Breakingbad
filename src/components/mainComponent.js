import React, {useState ,useEffect} from 'react';
import axios from 'axios';
import Home from './homepage';
import { Switch, Route, Redirect ,BrowserRouter} from 'react-router-dom';
import Details from './detais';

 
const Main = () => {

    const [Characters,setCharacters]= useState([]);
    const [loading,setLoading] = useState( true);
    

    const fetchCharacters = async () =>{
        
        const data= await axios.get('https://www.breakingbadapi.com/api/characters');
        setCharacters(data);
        setLoading(false);

    }

    useEffect(()=>{

        fetchCharacters();
            
    },[]);

  
    return(
       
        <BrowserRouter>
            <Switch> 
                    <Route path="/home">  <Home  loading={loading} Characters={Characters.data} />   </Route>
                    <Route path="/character/:id"    component={Details} />    
                    <Redirect to="/home" />
            </Switch>
        </BrowserRouter>
            
    );
}

export default Main;