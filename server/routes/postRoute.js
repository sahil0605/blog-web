const express = require('express');
const router = express.Router();

const {postData , deletePost , updatePost , getAllPost , getMyPost} = require('../controller/post');
const auth = require('../middleware/auth');
router.post('/postData',auth,postData)
router.delete('/deletePost/:id',auth,deletePost);
router.put('/updatePost/:id',auth,updatePost);
router.get('/getAllPost',getAllPost)
router.get('/myPost',auth,getMyPost)

module.exports = router;

