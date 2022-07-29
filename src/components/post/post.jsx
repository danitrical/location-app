import { Avatar } from "@mui/material";
import { Space } from "../space/space";
import './post.css';
export const Post = () => {
    const userName = 'Danish';
    const userImage = undefined;
    return <>
    <div className="main">
        {/* Header of Post */}
        <div className="flex">
            <div className="m-r-10">
                {
                    userImage ? 
                    <img src={ userImage } alt="userImage" /> :
                    <Avatar />
                }
            </div>
            <h2>
              { userName }
            </h2>
        </div>
        {/* Image */}
        <div className="blackBox"></div>
        <Space />
        <div className="flex justify-between">
            <div>
                <h1  className="no-margin">
                    Title
                </h1>
                <p className="no-margin">
                    Date
                </p>
            </div>
            <div>
                <button className="m-r-10 editButton button">
                    Edit
                </button>
                <button className="deleteButton button">
                    Delete
                </button>
            </div>
        </div>
        <Space />
        <div className="flex">
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio omnis expedita officia aperiam? Illum quae, ducimus, adipisci impedit, nesciunt molestiae nisi cumque cum possimus at ea recusandae doloribus suscipit eaque.
            </p>
        </div>
        <Space />
        <div className="flex">
            <h3 className="m-r-10">Location: </h3>
            <h3> Longitude, Latitude</h3>
        </div>
    </div>
     
    </>
};
