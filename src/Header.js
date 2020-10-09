import React from 'react';

class Header extends React.Component{
    render(){
      return(
        <div>Ini adalah header react js <br></br>
          <button onClick={() => {alert("Hai")}}>Boleh kenalan ? </button>
        </div>
      );
    }
  }

export default Header;