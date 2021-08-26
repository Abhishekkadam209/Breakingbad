import React from 'react';

const Paginate = ({len,itemsperpage,changePageNo}) => {

    const noPages =[];

    for(let i=1 ;i<=Math.ceil(len/itemsperpage);i++ ){
        noPages.push(i);
    }

    return(
        <nav >
            <ul className="pagination"  style={{position:"relative",left:"38%"}}>
                {noPages.map(number=>(
                    <li key={number} className="page-item">
                        <a  onClick={()=>changePageNo(number)} href="#" className="page-link">{number}</a>
                    </li>
                ))}
            </ul>
        </nav>
        
    );


}

export default Paginate