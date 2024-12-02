import './App.css'
import Headertext from './Components/Header/HeaderText/Headertext'
import Nav from './Components/Header/HorizentalNav/Nav'
import SearPro from './Components/Header/Sear_Pro/Sear_Pro'
import MainBody from './Components/Main/MainBody/MainBody'
import Our from './Our'
import { useEffect, useState } from 'react'
import Cards from './Components/Cards/Cards'
import Show from './Components/ShowSection/Show'
import Notification from './Notification'
import Coking from './Components/ShowSection/Coking'




function App() {
  const [addItems , setItems ] = useState([]) ;
  const [currentlyCooking, setCurrentlyCooking] = useState([]);
  const [showToast, setShowToast] = useState(false);

 
  const handelButton = (id) => {
    if (addItems.some((item) => item.recipe_id === id.recipe_id)) {
      setShowToast(true); // Show the toast
      setTimeout(() => {
        setShowToast(false); // Hide the toast after 2 seconds
      }, 2000);
    } else {
      const newItems = [...addItems, id];
      setItems(newItems);
    }
  };
  const handelPreparing = (item) => {
    // Move the item from Want to Cook to Currently Cooking
    setCurrentlyCooking([...currentlyCooking, item]);
    // Remove the item from addItems
    setItems(addItems.filter((i) => i.recipe_id !== item.recipe_id));
  };

     const [cards , setCards] = useState([]);

    useEffect( ()=>{
          fetch('recipi.json')
          .then(res => res.json())
          .then(data => setCards(data))
    },[])
  return (
    <div>
        
             {
            showToast && <Notification  message = "Your purchase has been confirmed!"></Notification>
             }
            
             
        <header className='flex justify-between items-center py-10 px-10'>
             <Headertext></Headertext>
             <Nav></Nav>
            <SearPro></SearPro>
        </header>
         
         <div className='Master-container2 px-10'>
             <MainBody></MainBody>
         </div>
        <Our></Our>
        <div className='mt-16'>
           <div  className=' flex justify-center space-x-6'>
               <div className='grid grid-cols-2 items-center  gap-6'>
                       {
                        cards.map((card,idx) => <Cards key={idx} handelAnother={() => handelPreparing(card)}   handelButton = {handelButton} card = {card}></Cards>)
                            } 
                 </div>
                <div>
                   <div className=' tt text-center '>
                    <h1>Want to Cook {addItems.length} </h1>
     


                  {
                    
                     addItems.map((addItem ,idx) => <Show handelAnother={() => handelPreparing(addItem)}  key={idx} addItem={addItem} ></Show>)
                   }
                   
                   </div>
                   <hr/>
                   <div className=' text-center'>
                        <h1>Currently cooking  {currentlyCooking.length} </h1>
                        {
                          currentlyCooking.map((currentCook,idx) => <Coking key={idx} currentCook ={currentCook}></Coking>)
                        }
                        
                   </div>
                </div>
                
           </div>
                   
        </div>
      
      
      
    </div>
  )
}

export default App
