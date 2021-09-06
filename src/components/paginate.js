import React from 'react';
  
const Paginate = ({len,itemsperpage,changePageNo}) => {

    const noPages =[];

    for(let i=1 ;i<=Math.ceil(len/itemsperpage);i++ ){
        noPages.push(i);
    }

    return(
        
        <div  >
                <ul className="pagination"  >
                {noPages.map(number=>(
                    <li key={number} className="page-item" >
                        <a style={{color:"black"}} onClick={()=>changePageNo(number)} href="#" className="page-link">{number}</a>
                    </li>
                  ))}
                  </ul>
        </div>
        
    );
 
}

export default Paginate