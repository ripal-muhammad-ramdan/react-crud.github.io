import React, {Component} from 'react';
import './LifeCycleCom.css';

class LifeCycleCom extends Component{
    
    constructor (props){
        super(props);
        this.state = {
            count : 1
        }
        console.log('constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('getDerivedStateFromProps')
        return null;
    }

    componentDidMount(){
        console.log('componentDidMount')
        // setTimeout(() => {
        //     this.setState({
        //         count : 2
        //     })
        // }, 10000)
        
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('constrshouldComponentUpdatector')
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('getSnapshotBeforeUpdate')
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('componentDidUpdate')
    }

    componentWillUnmount(){
        console.log('componentWillUnmount')
    }

    changeCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render(){
        console.log('render')
        return(
        <button className='btn' onClick={this.changeCount}>Button Component {this.state.count}</button>
        )
    }
}

export default LifeCycleCom;