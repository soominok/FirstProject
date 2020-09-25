package com.example.demo.repository;

import com.example.demo.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface MemberRepository extends JpaRepository<Member, Long> {
    public List<Member> findByUserId(String userId);

    @Query("select m.userNo, m.userPw, m.userName, m.userEmail, m.regDate from Member m")
    public List<Object[]> listAllMember();

    //@Query("select m.userId, m.userEmail from member where m.userEmail like '")
    //public List<Member> findId(Member member);

}