import React from 'react';


const NavItem = async({data}) => {

    return (
        <div>
            { data.map((item) => (item.title))}
        </div>
    );
};

  
 
export default NavItem;