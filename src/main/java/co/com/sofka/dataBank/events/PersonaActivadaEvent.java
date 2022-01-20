package co.com.sofka.dataBank.events;

public class PersonaActivadaEvent extends BaseEvent<String>{

    private final String estado;

    public PersonaActivadaEvent(String id, String status) {
        super(id);
        this.estado = status;
    }

    public String getEstado() {
        return estado;
    }
}
