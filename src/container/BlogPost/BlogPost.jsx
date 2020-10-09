import React, { Component, Fragment } from 'react';
import Post from '../../component/Post/Post';
import './BlogPost.css';
import './bootstrap.min.css';
import axios from 'axios';

class BlogPost extends Component {
    state = {
        post: [],
        formBlogPost: {
            id: 1,
            title: '',
            body: '',
            userId: 1
        },
        isUpdate: false
    }

    getPostAPI = () => {
        axios.get('http://localhost:3004/post?_sort=id&_order=desc')
            .then((res) => {
                this.setState({
                    post: res.data
                })
            })
    }

    postDataToAPI = () => {
        axios.post('http://localhost:3004/post', this.state.formBlogPost).then((res) => {
            console.log(res);
            this.getPostAPI();
            this.setState({
                formBlogPost: {
                    id: 1,
                    title: '',
                    body: '',
                    userId: 1
                }
            })
        })
    }

    putDataToAPI = () => {
        axios.put(`http://localhost:3004/post/${this.state.formBlogPost.id}`, this.state.formBlogPost).then(res => {
            console.log(res);
            this.getPostAPI();
            this.setState({
                isUpdate: false,
                formBlogPost: {
                    id: 1,
                    title: '',
                    body: '',
                    userId: 1
                }
            })
        })
    }

    handleRemove = (data) => {
        axios.delete(`http://localhost:3004/post/${data}`).then((res) => {
            this.getPostAPI();
        })
    }

    handleUpdate = (data) => {
        console.log(data);
        this.setState({
            formBlogPost: data,
            isUpdate: true
        })

    }

    handleAdd = (event) => {
        let formBlogPostNew = { ...this.state.formBlogPost };
        let timesStamp = new Date().getTime();

        if (!this.state.isUpdate) {
            formBlogPostNew['id'] = timesStamp;
        }
        formBlogPostNew[event.target.name] = event.target.value;
        this.setState({
            formBlogPost: formBlogPostNew
        })

    }

    handleSubmit = () => {
        if (this.state.isUpdate) {
            this.putDataToAPI();
        } else {
            this.postDataToAPI();
        }
    }

    componentDidMount() {
        this.getPostAPI();
    }

    render() {
        return (
            <Fragment>
                <div className='card-body'>
                    <div className='form-group'>
                        <label htmlFor="title">Title</label>
                        <input type="text" value={this.state.formBlogPost.title} className='form-control' name="title" placeholder='Add Title' onChange={this.handleAdd} /><br />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="body">Content</label>
                        <textarea name="body" value={this.state.formBlogPost.body} className='form-control' id="body" cols="10" rows="5" placeholder='Add Content' onChange={this.handleAdd}></textarea>
                    </div>
                    <div className='form-group'>
                        <button className='submit btn btn-primary' onClick={this.handleSubmit}>Save</button>
                    </div>

                </div>
                {
                    this.state.post.map(post => {
                        return <Post key={post.id} data={post} remove={this.handleRemove} update={this.handleUpdate} />
                    })
                }
            </Fragment>

        )
    }
}

export default BlogPost;