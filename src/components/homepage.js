import React ,{useState} from 'react'; 
import {
    Card, CardText, CardBody,
    CardTitle,Col,Row,Container
  } from 'reactstrap';
 import { Link } from 'react-router-dom';
import Paginate from './paginate';


 
 

const renderCard = (CharactersArry) =>{
  
      const cards = CharactersArry.map((character )=>{
          
          return(
               
                 
                    <Col xs="12" md="4" key={character.char_id}>
                        <div className="mt-5"  key={character.char_id}>   
                            <Link to={`/character/${character.char_id}`} style={{textDecoration:"none" ,color:"#660033"}} >
                                <Card className="mb-2"  style={{background : "#f7e6ff",height: "600px",width:"300px"}}>
                                    <CardBody style={{textAlign :"center"}}>
                                        <CardTitle tag="h3" >{character.name}</CardTitle>
                                    </CardBody>
                                    <img width="100%" src={character.img} alt="Card image cap"  height = "260px" />
                                    <CardBody>
                                        <CardText> 
                                                <div>
                                                        
                                                    <h6> Name : {character.name}</h6>
                                                    <h6>Date of birth : {character.birthday}</h6>
                                                    <h6> Status: {character.status}</h6> 
                                                    <br></br>
                                                    <div align="center"> <h5>Occupation</h5> {character.occupation.map((ocp,index)=>(<h6 key={index}>{ocp}</h6>))} </div>
                                        
                                                </div>
                                        </CardText>
                                    </CardBody>    
                                </Card> 
                            </Link>
                        </div>  
                    </Col>
                
              
          );
      });

      return(cards);

  }




 const Home = ({loading,Characters}) =>{

        const [pageno,setPageno] =useState(1);
         
        const changePageNo= (number) => setPageno(number);




    if(loading){

            return(
                <div align="center"><h1>Loading.....</h1></div>
            );
    }
    else {
            
            const itemssPerPage=10;
            let lasttitem=0;
            let firstitem=0;
            let items=[];
            
            if(pageno<=Math.floor(Characters.length/itemssPerPage)){
                lasttitem =pageno*itemssPerPage;
                firstitem = lasttitem-itemssPerPage;
                
                items= Characters.slice(firstitem,lasttitem);
            }
            else{
                    lasttitem=Characters.length;
                firstitem=Math.floor(Characters.length/itemssPerPage)*itemssPerPage;
                items= Characters.slice(firstitem,lasttitem);
            }
    



            return(

                <div>
                    <div style={{background:"#cc66cc",width:"100%",color:"#4d1933",height:"100px"  }}>
                            
                            <div  style={{ position:"relative",left:"40%",top:"20%" }}>
                                <h1>  Breaking Bad  </h1>
                            </div>
                                    
                    </div>
                    
                    <div style={{background:" #f9ecf9"}} >
                        <Container>
                            <Paginate len={Characters.length} itemsperpage={itemssPerPage} changePageNo={changePageNo}  />  
                            <Row > {renderCard(items)}  </Row>  
                            <Paginate len={Characters.length} itemsperpage={itemssPerPage} changePageNo={changePageNo}  />    
                        </Container>
                    </div>
                    
                </div> 
            );
     }
    
 }


 export default Home;