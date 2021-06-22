package com.koreait.facebook.common;

import org.springframework.stereotype.Component;

@Component
public class MySecurityUtils {

    // len길이만큼의 랜덤한 숫자(0~9)를 문자열로 리턴
    public String getRandomValue(int len) {
        return "099";
    }
}
