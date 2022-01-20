package co.com.sofka.dataBank.queries.api.query;

import lombok.Data;

@Data
public class BuscarPersonaByIdQuery {
    private String personaId;

    public BuscarPersonaByIdQuery(String personaId) {
        this.personaId = personaId;
    }
}
