package co.com.sofka.dataBank.queries.api.controller;

import co.com.sofka.dataBank.queries.api.entity.Persona;
import co.com.sofka.dataBank.queries.api.query.BuscarPersonaByIdQuery;
import org.axonframework.queryhandling.QueryGateway;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/personas")
public class PersonaQueriesController {

    private final QueryGateway queryGateway;

    public PersonaQueriesController(QueryGateway queryGateway) {
        this.queryGateway = queryGateway;
    }

    @GetMapping("get-persona")
    public ResponseEntity<Persona> getPersona(@RequestParam String id){
        Persona persona = queryGateway.query(
                new BuscarPersonaByIdQuery(id),
                Persona.class
        ).join();

        if(persona == null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>(persona, HttpStatus.OK);
    }
}
