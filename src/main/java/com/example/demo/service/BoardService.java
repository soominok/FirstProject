package com.example.demo.service;

import com.example.demo.entity.Board;

import java.util.List;

public interface BoardService {
    public void register(Board board) throws Exception;
    public Board read(Long boardNo) throws Exception;
    public void modify(Board board) throws Exception;

    // remove는 객체로 지우는 것이 아니라 번호로 지우니까 Long boardNo로 적어주면 됨!
    public void remove(Long boardNo) throws Exception;
    public List<Board> list() throws Exception;

    public List<Board> search_title() throws Exception;

}