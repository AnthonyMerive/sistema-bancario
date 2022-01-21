package co.com.sofka.dataBank.queries.api.controller;

import co.com.sofka.dataBank.queries.api.entity.Persona;
import co.com.sofka.dataBank.queries.api.query.BuscarPersonaByIdQuery;
import co.com.sofka.dataBank.queries.api.query.ObtenerPersonasQuery;
import org.axonframework.messaging.responsetypes.ResponseTypes;
import org.axonframework.queryhandling.QueryGateway;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*",
        methods = {RequestMethod.GET,
                RequestMethod.PUT,
                RequestMethod.POST,
                RequestMethod.DELETE}
)
@RequestMapping(value = "/personas")
public class PersonaQueriesController {

    private final QueryGateway queryGateway;

    public PersonaQueriesController(QueryGateway queryGateway) {
        this.queryGateway = queryGateway;
    }

    @GetMapping
    public List<Persona> getPersonas(){

        ObtenerPersonasQuery obtenerPersonasQuery = new ObtenerPersonasQuery();

        return queryGateway.query(obtenerPersonasQuery, ResponseTypes
                        .multipleInstancesOf(Persona.class))
                .join();

    }

    @GetMapping("get-persona/{id}")
    public ResponseEntity<Persona> getPersona(@PathVariable String id){
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
