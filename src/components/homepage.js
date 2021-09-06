import React ,{  useState} from 'react'; 
import {
    Card,  CardBody,
    CardTitle,Col,Row,Container,CardImg,
    Dropdown, DropdownToggle, DropdownMenu, DropdownItem 
  } from 'reactstrap';
 import { Link } from 'react-router-dom';
import Paginate from './paginate';


  
const renderCard = ( items  ) =>{
   
    const cards = items.map((character )=>{
          
            
        return(
        
        
            <Col   xs="12" md={{size: 3 , offset:1}}  style={{ paddingTop:"15px",paddingBottom:"15px" }}  key={character.char_id}   >     
                    <Card    style={{ height: "600px",width:"300px" }}>
                        <Link to={`/character/${character.char_id}`} style={{textDecoration:"none" ,color:"black"}} >
                            <CardBody style={{textAlign :"center"}}>
                                <CardTitle tag="h3" >{character.name}</CardTitle>
                            </CardBody>
                            <CardImg   src={character.img} alt="Card image cap"  height = "260px" />
                            <CardBody>
                                <div>
                                <h6> Name : {character.name}</h6>
                                            <h6>Date of birth : {character.birthday}</h6>
                                            <h6> Status: {character.status}</h6> 
                                            <br></br>
                                            
                                </div>
                                <div align="center"> <h5>Occupation</h5> {character.occupation.map((ocp,index)=>(<h6 key={index}>{ocp}</h6>))} </div> 
                                {/* <CardText>  
                                             
                                </CardText> */}
                            </CardBody>    
                        </Link>
                    </Card>  
            </Col>

      );
     
  
    });

    return(cards);

  }




 const Home = ({loading,Characters,status,changeStatus}) =>{

        const [pageno,setPageno] =useState(1);
        
        const [dropdownOpen, setDropdownOpen] = useState(false);
        
        const toggle = () => setDropdownOpen(prevState => !prevState);
         
        const changePageNo= (number) => setPageno(number);
        


    if(loading){

            return(
                <div align="center"><h1>Loading.....</h1></div>
            );
    }
    else {
           
    //    console.log(  "Characters" + JSON.stringify(Characters));
            const itemssPerPage=10;
            let lasttitem=0;
            let firstitem=0;
            let items=[];

            if(Characters.length<=10){
                items=Characters;
            }
            else{
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
            }
            
          
    
            


            return(

                <div >
                   
                    
                    <div style={{background:" #f9ecf9"}} >
                        <Container fluid={true} >
                        <Row>
                            <Col  xs="12" md={{size:3,offset:1}} > 
                             <Paginate len={Characters.length} itemsperpage={itemssPerPage} changePageNo={changePageNo}  /> 
                            </Col>
                             <Col  xs="12" md={{size:3,offset:5}}>
                                <Dropdown isOpen={dropdownOpen} toggle={toggle}  >
                                    <DropdownToggle caret  style={{background:"white",color:"black",width:"200px"}}>  
                                      {status}
                                    </DropdownToggle>
                                    <DropdownMenu container="body" >
                                    <DropdownItem onClick={()=>changeStatus("All")} >All</DropdownItem>
                                    <DropdownItem onClick={()=>changeStatus("Alive")}  >Alive</DropdownItem>
                                    <DropdownItem onClick={()=>changeStatus("Presumed dead")}  >Presumed dead</DropdownItem>
                                    <DropdownItem onClick={()=>changeStatus("Deceased")}  >Deceased</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </Col>
                        </Row>  
                         <Row > {renderCard(items  )}  </Row>  
                         
                         {/* <Row>
                            <Col  xs="12" md={{size:3,offset:1}} > 
                             <Paginate len={ Characters.length} itemsperpage={itemssPerPage} changePageNo={changePageNo}  /> 
                            </Col>
                        </Row>    */}
                        </Container>
                    </div>
                    
                </div> 
            );
     }
    
 }


 export default Home;