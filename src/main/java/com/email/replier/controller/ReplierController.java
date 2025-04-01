package com.email.replier.controller;

import java.util.Map;

import org.springframework.ai.chat.client.ChatClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping
@CrossOrigin("*")
public class ReplierController {

    private final ChatClient chatClient;

    public ReplierController(ChatClient.Builder chatClientBuilder) {
        this.chatClient = chatClientBuilder.build();
    }
    
    @PostMapping("/reply")
    public ResponseEntity<String> getEmail(@RequestBody Map<String, String> request) {
        try {
            String message = request.get("message");
            String tone = request.get("tone");
            String aiResponse = chatClient
                                .prompt("Generate a reply to this message: " + message + ", in a " + tone + " tone")
                                .call()
                                .content();

            aiResponse = aiResponse.replaceAll("(?s)<think>.*?</think>", "").trim();

            return ResponseEntity.ok(aiResponse);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error processing chat: " + e.getMessage());
        }
    }
}
