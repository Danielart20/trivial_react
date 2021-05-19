const Categories = ({call, setShowQuestion, setCategorySelected }) => {

    return (
       <div>
         {call.map((c, key) =>{ 
            return <li key={key} onClick={() => {setCategorySelected(c); setShowQuestion(true);}}>{c.category}</li>
            
         })}          
      </div> 
                
        
     );
}
 
export default Categories;