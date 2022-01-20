package co.com.sofka.dataBank.queries.api.service;

import co.com.sofka.dataBank.events.DepositadoEvent;
import co.com.sofka.dataBank.events.PersonaActivadaEvent;
import co.com.sofka.dataBank.events.PersonaCreadaEvent;
import co.com.sofka.dataBank.events.RetiradoEvent;
import co.com.sofka.dataBank.queries.api.entity.Persona;
import co.com.sofka.dataBank.queries.api.query.BuscarPersonaByIdQuery;
import co.com.sofka.dataBank.queries.api.query.ObtenerPersonasQuery;
import co.com.sofka.dataBank.queries.api.repository.PersonaRepository;
import lombok.extern.slf4j.Slf4j;
import org.axonframework.eventhandling.EventHandler;
import org.axonframework.queryhandling.QueryHandler;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
public class PersonaQueriesService {

    private final PersonaRepository repository;

    public PersonaQueriesService(PersonaRepository repository) {
        this.repository = repository;
    }

    @EventHandler
    public void on(PersonaCreadaEvent personaCreadaEvent){
        log.info("Manejando 'PersonaCreadaEvent'...");

        Persona persona = new Persona();
        persona.setPersonaId(personaCreadaEvent.getId());
        persona.setBalance(personaCreadaEvent.getBalance());
        persona.setEstado("CREADO");

        repository.save(persona);
    }

    @EventHandler
    public void on(PersonaActivadaEvent personaActivadaEvent){
        log.info("Manejando 'PersonaActivadaEvent'...");

        Persona persona =
                repository.findById(personaActivadaEvent
                                .getId())
                        .orElse(null);

        if (persona != null){
            persona.setEstado(personaActivadaEvent.getEstado());
            repository.save(persona);
        }

    }

    @EventHandler
    public void on(DepositadoEvent depositadoEvent){
        log.info("Manejando 'DepositadoEvent'...");

        Persona persona =
                repository.findById(depositadoEvent
                                .getId())
                        .orElse(null);

        if (persona != null){
            persona.setBalance(persona
                    .getBalance()
                    .add(depositadoEvent
                            .getMonto()));

            repository.save(persona);
        }
    }

    @EventHandler
    public void on(RetiradoEvent retiradoEvent){
        log.info("Manejando 'RetiradoEvent'...");

        Persona persona =
                repository.findById(retiradoEvent
                                .getId())
                        .orElse(null);

        if (persona != null){
            persona.setBalance(persona
                    .getBalance()
                    .subtract(retiradoEvent
                            .getMonto()));

            repository.save(persona);
        }
    }

    @QueryHandler
    public List<Persona> handle(ObtenerPersonasQuery query){
        log.info("Manejando 'ObtenerPersonasQuery'...");

        return repository.findAll();
    }

    @QueryHandler
    public Persona handle(BuscarPersonaByIdQuery query){
        log.info("Manejando 'BuscarPersonaByIdQuery'...");

        return repository.findById(query
                .getPersonaId())
                .orElse(null);
    }

}
