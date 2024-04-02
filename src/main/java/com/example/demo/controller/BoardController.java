package com.example.demo.controller;

import com.example.demo.entity.Board;
import com.example.demo.repository.BoardRepository;
import com.example.demo.service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
public class BoardController {
    @Autowired
    private BoardService boardService;
    @Autowired
    private BoardRepository boardRepository;

    @GetMapping("/board/write")
    public String boardWriteForm() {
        return "boardWrite";
    }

    @PostMapping("/board/write")
    public String boardWrite(Board board) {
        boardService.write(board);
        return "redirect:/board/list";
    }

    @GetMapping("/board/list")
    public String boardList(Model model) {
        List<Board> boardList = boardRepository.findAll();
        model.addAttribute("boardList", boardList);
        System.out.println(boardList);
        return "/boardList";
    }


}
