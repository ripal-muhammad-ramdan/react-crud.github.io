import React, {Component, Fragment} from 'react';
import CardProduct from '../../component/cardproduct/CardProduct';
import './Product.css';

class Product extends Component{
    state = {
        order: 0
    }

    onHandleChange = (newValue) => {
        this.setState({
            order: newValue
        })
    }

    render(){
        return(
            <Fragment>
                <div className='header'>
                    <div className='logo'>
                        <p>Sumber Rejeki</p>
                    </div>
                    <div className='troley'>
                        <img src="https://maxcdn.icons8.com/Share/icon/nolan/Shopping/shopping_cart1600.png"/>
                    </div>
                    <div className='count'>
                        <span>{this.state.order}</span>
                    </div>
                </div>
                <CardProduct onCounterChange = {(value) => this.onHandleChange(value)}/>
            </Fragment>
            
        )
    }
}

export default Product;