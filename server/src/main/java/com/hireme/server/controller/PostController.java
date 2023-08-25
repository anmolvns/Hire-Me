package com.hireme.server.controller;

import com.hireme.server.constants.APIConstants;
import com.hireme.server.dto.PostDTO;
import com.hireme.server.model.PostModel;
import com.hireme.server.sevice.PostService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Slf4j
@RequiredArgsConstructor
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class PostController {

    final PostService postService;

    @PostMapping(APIConstants.Save_POST)
    public PostModel savePost(@Valid @RequestBody PostDTO postDTORequest){
        log.info("Saving post #####");

        return this.postService.savePost(postDTORequest);

    }

    @GetMapping(APIConstants.Get_All_POSTS)
    public List<PostModel> getAllPosts(){
        log.info("Getting all posts ######");
        return this.postService.getAllPosts();
    }


}
