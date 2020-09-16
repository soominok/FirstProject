package com.example.demo.service;

import com.example.demo.entity.Board;
import com.example.demo.repository.BoardRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

// 구현체에다 Service 걸어줘야 함.
@Service
public class BoardServiceImpl implements BoardService {
    static final Logger log = LoggerFactory.getLogger(BoardServiceImpl.class);
    @Autowired
    private BoardRepository repository;

    @Override
    public void register(Board board) throws Exception {
        repository.create(board);
    }

    // boardNo를 읽는거니까 VueBoard가 아니고 boardNo을 사용.
    @Override
    public Board read(Long boardNo) throws Exception {
        // 여기서는 "" 로 써줘야 함.
        log.info("VudBoardService read(boardNo): " + boardNo);
        return repository.read(boardNo);
    }

    @Override
    public void modify(Board board) throws Exception {
        log.info("VueBoardService modify(board): " + board);
        repository.update(board);
    }

    @Override
    public void remove(Long boardNo) throws Exception {
        repository.delete(boardNo);
    }


    @Override
    public List<Board> list() throws Exception {
        return repository.list();
    }

    @Override
    public List<Board> search_title() throws Exception {
        return repository.search_title();
    }


}