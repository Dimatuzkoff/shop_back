import express from "express";
import Post from "../modeles/post.js";

const router = express.Router();

router.get("/posts", async (req, res) => {
    const posts = await Post.find({});
    res.json(posts);
});

router.get("/post/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        if (!post) {
            return res.status(404).send("Post not found");
        }

        res.json(post);
    } catch (error) {
        console.error("Error fetching post:", error);
        res.status(500).send("Error fetching post");
    }
});


router.post("/post", (req, res) => {
    const post = new Post(req.body);
    post
        .save()
        .then(() => {
            res.send("post saved successfully");
        })
        .catch((error) => {
            res.status(500).send("Error saving post");
        });
});

router.put("/post", async (req, res) => {
    try {
        const id = req.body._id;
        const post = await Post.findByIdAndUpdate(id, req.body, { new: true });
        res.json(post);
    } catch (error) {
        console.error("Error updating post:", error);
        res.status(500).send("Error updating post");
    }
});

router.delete("/post/:id", (req, res) => {
    const postId = req.params.id;
    Post.findByIdAndDelete(postId)
        .then(() => {
            console.log("Post deleted successfully");
            res.send("Post deleted successfully");
        })
        .catch((error) => {
            console.error("Error deleting post:", error);
            res.status(500).send("Error deleting post");
        });
});


export default router;
