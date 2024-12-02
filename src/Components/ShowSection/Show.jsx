const Show = ({ addItem,handelAnother }) => {
    const { recipe_name, preparing_time, calories, recipe_id } = addItem;
  
    return (
      <div className="border border-solid border-black ">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
                <th>Action</th> {/* Added a new header for the action column */}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{recipe_id}</td>
                <td>{recipe_name}</td>
                <td>{preparing_time}</td>
                <td>{calories}</td>
                <td>
                  <button
                    onClick={()=>handelAnother( addItem)}
                    className="btn btn-accent"
                  >
                    Accent
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
  export default Show;