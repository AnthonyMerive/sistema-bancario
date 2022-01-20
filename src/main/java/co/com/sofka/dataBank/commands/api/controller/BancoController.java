package co.com.sofka.dataBank.commands.api.controller;

import co.com.sofka.dataBank.commands.api.dto.CrearPersonaDto;
import co.com.sofka.dataBank.commands.api.dto.DepositarDto;
import co.com.sofka.dataBank.commands.api.dto.RetirarDto;
import co.com.sofka.dataBank.commands.api.service.PersonaCommandService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.concurrent.CompletableFuture;

@RestController
@RequestMapping(value = "/user-bank")
public class BancoController {

    @Autowired
    private final PersonaCommandService service;

    public BancoController(PersonaCommandService service) {
        this.service = service;
    }

    @PostMapping(value = "/crear-persona")
    public ResponseEntity<String> crearPersona(@RequestBody CrearPersonaDto request){
        try {
            CompletableFuture<String> response =
                    service.crearPersona(request);

            return  new ResponseEntity<>(response.get(), HttpStatus.CREATED);
        } catch (Exception e){

            return new ResponseEntity<>("Ha ocurrido un error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping(value = "/depositar")
    public ResponseEntity<String> depositar(@RequestBody DepositarDto request){
        try {
            service.depositar(request);
            return  new ResponseEntity<>("Deposito Realizado", HttpStatus.OK);
        } catch (Exception e){

            return new ResponseEntity<>("Ha ocurrido un error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping(value = "/retirar")
    public ResponseEntity<String> retirar(@RequestBody RetirarDto request){
        try {
            service.retirar(request);
            return  new ResponseEntity<>("Retiro Realizado", HttpStatus.OK);
        } catch (Exception e){

            return new ResponseEntity<>("Ha ocurrido un error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
