import React, {Component} from 'react';
import '../../container/product/Product.css';

class CardProduct extends Component{
    state = {
        order: 0
    }

    handleChange = (newValue) => {
        this.props.onCounterChange(newValue);
    }

    handleplus = () => {
        this.setState({
            order: this.state.order + 1
        }, () => {
            this.handleChange(this.state.order);
        })
    }

    handleminus = () =>{
        if (this.state.order > 0) {
            this.setState({
                order: this.state.order - 1
            }, () => {
                this.handleChange(this.state.order);
            }) 
        }
        
    }

    render(){
        return(
                
                <div className='card'>
                    <div className='img-thumb-prod'>
                        <img style={{width: 200 + 'px'}} src="https://static.republika.co.id/uploads/images/inpicture_slide/daging-sapi-_160610081741-307.jpg"/>
                    </div>
                    <p className='prod-tittle'>Daging sapi</p>
                    <p className='prod-price'>Rp. 121.000</p>
                    <div className='counter'>
                        <button className='minus' onClick={this.handleminus}>-</button>
                        <input type="text" value={this.state.order}/>
                        <button className='plus' onClick={this.handleplus}>+</button>
                    </div>
                </div>
            
        )
    }
}

export default CardProduct;