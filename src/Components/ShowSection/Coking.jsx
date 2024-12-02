const Coking = ( { currentCook  } ) => {
    console.log('cur',currentCook );
    const {recipe_name, preparing_time, calories, recipe_id} = currentCook;
    return (
        <div>
                <div className="overflow-x-auto">
                <table className="table">
                     {/* head */}
                     <thead>
                                <tr>
                                       <th></th>
                                       <th>Name</th>
                                      <th>Time</th>
                                     <th>Calories</th>
                                 </tr>
                     </thead>
                     <tbody>
                              {/* row 1 */}
                               <tr>
                                     <th>{recipe_id}</th>
                                     <td>{recipe_name}</td>
                                     <td>{preparing_time}</td>
                                     <td>{calories}</td>
                                    
                                </tr>
                               
                    </tbody>
                </table>
             </div>
        </div>
    );
};

export default Coking;