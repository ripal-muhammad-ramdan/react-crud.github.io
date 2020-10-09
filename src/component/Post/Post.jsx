import React from 'react';

const Post = (props) => {
    return(
                    <div class="card-body">
                {/* <div className='img-thumb'>
                    <img src="http://placeimg.com/150/100/tech://placeimg.com/200/150/tech" alt="" />
                </div> */}
                        <table class="table table-bordered">
                            <thead class="table-primary">
                                <tr>
                                    <th scope="col">Title</th>
                                    <th scope="col">Content</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <th scope="col">{props.data.title}</th>
                                <th scope="col">{props.data.body}</th>
                                <th scope="col"><button className='remove btn btn-danger text-white' onClick={() => props.remove(props.data.id)}>Remove</button> || <button className='update btn btn-warning text-white' onClick={() => props.update(props.data)}>Update</button></th>
                            </tbody>
                        </table>
                        {/* <p className='title'>{props.data.title}</p>
                        <p className='desc'>{props.data.body}</p> */}
                        
                        {/* <button className='update btn btn-outline-warning' onClick={() => props.update(props.data)}>Update</button> */}
                    
                    </div>
            
    )
}

export default Post;