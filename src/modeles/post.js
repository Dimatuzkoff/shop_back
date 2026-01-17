import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    title: String,
    text: String,
    img_url: String, 
});

const Post = mongoose.model('Post', PostSchema);

export default Post;
