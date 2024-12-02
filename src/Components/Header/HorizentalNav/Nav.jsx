import PropTypes from 'prop-types';

const Nav = () => {
    return (
        <div className='flex '>
             <p >Home</p>
             <p className='ml-4' >Recipes</p>
             <p className='ml-4'>About</p>
             <p className='ml-4'>Search</p>
        </div>
    );
};

Nav.propTypes = {
    
};

export default Nav;

