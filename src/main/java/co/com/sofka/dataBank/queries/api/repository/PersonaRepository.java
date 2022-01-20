package co.com.sofka.dataBank.queries.api.repository;

import co.com.sofka.dataBank.queries.api.entity.Persona;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PersonaRepository extends JpaRepository<Persona, String> {
}
