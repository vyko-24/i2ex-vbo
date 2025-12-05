package utez.vbo.server.modules;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/")
@CrossOrigin("*")
public class Controller {
    @Autowired
    private CosoService service;

    @PostMapping("")
    public ResponseEntity<?> imc(@RequestBody DTO dto) {
        float imc = service.makeIMC(dto);
        return ResponseEntity.ok(imc);
    }
}
