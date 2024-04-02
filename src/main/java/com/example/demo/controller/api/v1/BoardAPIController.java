package com.example.demo.controller.api.v1;

import com.example.demo.entity.Board;
import com.example.demo.repository.BoardRepository;
import com.example.demo.service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.RedirectView;

import java.util.List;

@RestController
@RequestMapping("/api")
public class BoardAPIController {
    @Autowired
    private BoardService boardService;

    @PostMapping("/board/write")
    public RedirectView boardWrite(Board board) {
        boardService.write(board);
        return new RedirectView("http://localhost:3000/boards");
    }

    @GetMapping("/board/list")
    public ResponseEntity<List<Board>> boardList(Model model) {
        List<Board> boardList = boardService.listAll();
        return ResponseEntity.ok(boardList);
    }

    @GetMapping("/board/{id}")
    public ResponseEntity<Board> boardRead(@PathVariable("id") int id) {
        Board board = boardService.select(id);
        return ResponseEntity.ok(board);
    }

    @PostMapping("/board/{id}/update")
    public RedirectView boardUpdate(Board board) {
        boardService.update(board);
        return new RedirectView("http://localhost:3000/boards/"+board.getId());
    }

    @GetMapping("/board/{id}/delete")
    public RedirectView boardUpdate(@PathVariable("id") int id) {
        boardService.delete(id);
        return new RedirectView("http://localhost:3000/boards/");
    }
}
