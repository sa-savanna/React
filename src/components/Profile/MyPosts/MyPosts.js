import React from 'react'
import Post from './Post/Post'


const MyPosts = (props) => {
   
    let postElements = props.posts.map(p => <Post message={p.message} likes={p.likesCount} />)
    const newPostElement = React.createRef()

    const addPost = () => {
        // props.dispatch(addPostActionCreator())  => myPostContainer
        //через props мы прокинули метод dispatch и вызвали фнкцию, которая вызывает action, у которой есть св-во type
        props.addPost()
    }

    const onPostChange = () => {
        const text = newPostElement.current.value;
        props.updateNewPostActionCreator(text)
        // const action = updateNewPostActionCreator(text)
        // props.dispatch(action)  // => myPostContainer
    }

    return (
        <div>
            <div>
                <textarea
                    onChange={onPostChange}
                    ref={newPostElement}
                    value={props.newPostText}
                    cols="30" rows="10" />
            </div>
            <button onClick={addPost}>Add post</button>
            <button>Remove</button>
            {postElements}

        </div>

    )
}



export default MyPosts;