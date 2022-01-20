package co.com.sofka.dataBank.commands.api.dto;

import lombok.Data;

import java.math.BigDecimal;

@Data
public class RetirarDto {

    private String personaId;
    private BigDecimal monto;
}
