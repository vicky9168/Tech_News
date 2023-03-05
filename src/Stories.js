import React, { useEffect } from 'react'
import { useGlobalContext } from './Context';

const Stories = () => {
    // let isLoading = true;
    // let API = "https://hn.algolia.com/api/v1/search?query=...";
    
    // const fetchApiData= async(url) =>{
    //     try {
    //         const res =await fetch(url);
    //         const data = await res.json()
    //         console.log(data);
    //         // let isLoading = false;
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }


    // useEffect(() => {
    //   fetchApiData(API);
    
    // }, [])
    const{hits, isLoading,removePost} = useGlobalContext();
    // const name=useGlobalContext();

    if(isLoading){

        return (
             <>
        <h1>Loading...</h1>
        </>
        );
    }

  return (
    // <>
    <div className="stories-div">
    {/* <h2>My Tech New Post</h2> */}
    {hits.map((currPost) => {
        const{title, author, objectID, url, num_comments} = currPost;
        return (
        <div className="card" key={objectID}>
            <h2>{title}</h2>
            <p>
                By <span>{author}</span>  | <span>{num_comments}</span> comments
            </p>
            <div className="card-button">
                <a href={url} target="blank">
                    Read More
                </a>
                <a href="#" onClick={() =>removePost(objectID)}>
                    Remove
                    </a>
            </div>
        </div>
        /* <h2> {currPost.title} </h2>
        <p>{currPost.author}</p> */
        );
    })}
    </div>
    // </>
  );
};

export default Stories


