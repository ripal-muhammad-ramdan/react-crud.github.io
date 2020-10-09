import React, {Component} from 'react';
// import FacebookComp from '../../component/FacebookComp/FacebookComp';
// import LifeCycleCom from '../LifeCycleCom/LifeCycleCom';
import BlogPost from '../BlogPost/BlogPost';
import '../../container/BlogPost/bootstrap.min.css';
// import Product from '../product/Product';


class Home extends Component{
    state = {
        showComponent: true
    }
    componentDidMount(){
        // setTimeout(() => {
        //     this.setState({
        //         showComponent: false
        //     })
        // }, 15000)
        
    }
    render(){
        return (
            <div>
                
                <h3 className='text-center'>CRUD data to API (ReactJS)</h3>
                <hr/>
                <BlogPost/>
            </div>
        )
    }
}

export default Home;