# SokfaBANK:

![Despliegue](https://res.cloudinary.com/df8qzqymf/image/upload/v1642782652/Captura_de_pantalla_2022-01-21_112040_px8wl6.png)

## Descripcion:

Se realizo una aplicacion web centrada en la implementacion del patron de diseño CQRS, para esto se tomo en cuenta el caso hipotetico
de tener un dominio de Banco, este tendria un sub-dominio Core que seria contabilidad, en este se centro el
desarrollo del back-end, llevando el contro de cuentas, depositos y retiros, tambien se creo un perfil de usuario 
admin a traves de la autenticacion de firebase.

- **El usuario normal:**
  Tiene acceso al command de crearCuenta y a las queries de consultar saldo y a los command de depositar y retirar.

- **El Admin:**
  Tiene acceso a la querie de getCuentas, podra observar los datos de todas las cuentas y sus estados, para acceder a admin las credenciales
  son: || correo: "admin@admin.com" || contraseña: "admin1234" || sin comillas.
  
## Pasos para despliegue local:
 
 **Backend:**
 
  - Debes tener instalado JAVA y MAVEN con la configuracion de sus respectivas variables de entorno.
  - Abre el proyecto y correlo, sugerido IntelliJi IDEA.
  - El proyecto se desplegara en el puerto 8081, bajo la direccion: http://localhost:8081/swagger-ui.html
  - Puedes acceder a la base de datos H2 a traves de la direccion: http://localhost:8081/h2-console
  
  **Frontend:**
  
  - Debes tener yarn ya que el proyecto se realizo con vite y se instalo el proyecto en base a yarn por tanto los scripts de 
    npm (npm install, npm run, npm build) no estaran disponibles.
  - Abre la consola en la carpeta "web" del proyecto y ejecuta "yarn install".
  - Inicia el servidor de desarrollo ejecutando el comando "yarn dev".
  - El proyecto se desplegara en el puerto 3000, bajo la direccion: http://localhost:3000

## Perspectiva Back-end

El backend se centro en realizar una API RestFull de consumo a traves de una BD relacional en el cual se almacena
los eventos de dominio y las entidades creadas usando H2 y spring-boot, bajo la implementacion del patron de diseño 
CQRS en el cual contamos con nuestras queries y commands con un event-store a traves de Axon framework.

## Perspectiva Front-end

El frontend se centro en el consumo de esta API accediendo a sus end-point, se crearon las UI y UX usando React y 
Redux para el manejo de los estados globales y consumo de la API-Rest a traves de los actions, tambien se validaron rutas privadas ya
que se creo un perfil de administracion donde puedes consultar todas las cuentas bancarias creadas.

## Despliegues:

### Despliegue Backend:

![Despliegue](https://res.cloudinary.com/df8qzqymf/image/upload/v1642782652/Captura_de_pantalla_2022-01-21_112218_wzshrf.png)

![Despliegue](https://res.cloudinary.com/df8qzqymf/image/upload/v1642782652/Captura_de_pantalla_2022-01-21_112255_jzn1yu.png)

![Despliegue](https://res.cloudinary.com/df8qzqymf/image/upload/v1642782652/Captura_de_pantalla_2022-01-21_112531_ikt08z.png)

### Despliegue Frontend:

![Despliegue](https://res.cloudinary.com/df8qzqymf/image/upload/v1642782652/Captura_de_pantalla_2022-01-21_112109_ynt3va.png)
