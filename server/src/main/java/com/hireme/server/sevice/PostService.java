package com.hireme.server.sevice;

import com.hireme.server.dto.PostDTO;
import com.hireme.server.model.PostModel;

import java.util.List;

public interface PostService {
    public PostModel savePost(PostDTO postDTO);

    public List<PostModel> getAllPosts();

}
