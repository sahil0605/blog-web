const Post = require("../models/post");

exports.postData = async (req, res) => {
  try {
    console.log(req.user.name);
    const { name } = req.user;
    const { title, description } = req.body;
    const newPost = new Post({
      title,
      description,
      createdBy: name,
    });
    await newPost.save();
    return res.status(201).json({
      message: "post saved",
    });
  } catch {
    (err) => {
      res.status(500).json({
        message: "internal server error",
        err,
      });
    };
  }
};

exports.deletePost = async (req, res) => {
  try {
    const postId = req.params.id;
    const existingPost = await Post.findById(postId);
    if (!existingPost) {
      return res.status(404).json({
        message: "post not found",
      });
    }
    await existingPost.deleteOne();
    return res.status(202).json({
      message: "post deleted",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "internal server error",
    });
  }
};

exports.updatePost = async(req,res)=>{
    try {
          const postId = req.params.id;
          const {title , description} =req.body ;
          const existingPost = await Post.findById(postId)
          if(!existingPost){
            return res.status(404).json({
                message:"post doesnt exist"
            })
          }
          existingPost.title = title;
          existingPost.description = description;
          await existingPost.save()
          return res.status(202).json(
            {
                message:"post updated"
            }
          )
    }catch(err){
        console.log(err)
           return res.status(500).json({
            message:"internal server error"
           })
    }
}
