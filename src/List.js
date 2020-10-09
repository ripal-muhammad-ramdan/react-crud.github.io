import React from 'react';
import Image from './Image';

class List extends React.Component{
    render(){
        return(
            <div>
                <Image/>
                <ol>
                    <li>satu</li>
                    <li>dua</li>
                    <li>tiga</li>
                </ol>
            </div>
        )
    }
}

export default List;