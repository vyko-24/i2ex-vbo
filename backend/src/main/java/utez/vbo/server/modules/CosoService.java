package utez.vbo.server.modules;

import org.springframework.stereotype.Service;

@Service
public class CosoService {
    public float makeIMC(DTO op) {
        float imc = op.getPeso() / (op.getEstatura() * op.getEstatura());
        return imc;
    }
}
