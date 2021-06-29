package com.koreait.facebook.feed;

import com.koreait.facebook.feed.model.FeedEntity;
import com.koreait.facebook.security.IAuthenticationFacade;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class FeedService {

    @Autowired
    private FeedMapper mapper;

    @Autowired
    private IAuthenticationFacade auth;

    public int reg(MultipartFile[] imgArr, FeedEntity param) {
        if(imgArr == null && param.getCtnt() == null) { return 0; }
        param.setIuser(auth.getLoginUserPk());
        //t_feed
        int result = mapper.insFeed(param);

        System.out.println(param);
        return 1;
    }
}
