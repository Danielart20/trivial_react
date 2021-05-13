import React, {Fragment} from 'react';


const Categories = ({call, setShowQuestion, setCategorySelected }) => {
    
    

    var categories = [];

    for (let i = 0; i < call.length; i++) {
        categories.push(call[i].category);
    }

    return (
       <Fragment>
             {categories.map((c) =>{ 
                return <li onClick={() => {setCategorySelected({c}); setShowQuestion(true);}}>{c}</li>
                
             })}
                
             </Fragment> 
                
        
     );
}
 
export default Categories;