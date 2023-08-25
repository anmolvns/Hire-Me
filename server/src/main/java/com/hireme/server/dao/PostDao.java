package com.hireme.server.dao;

import com.hireme.server.model.PostModel;
import org.springframework.data.mongodb.repository.MongoRepository;


public interface PostDao extends MongoRepository<PostModel, String> {
}
