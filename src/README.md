## TITULO DEL PROYECTO
Desarrollo de una página web para jugadores de pokemon Go.

## DEFINICIÓN DEL PROBLEMA
- No tener una página web que brinde información interactiva sobre las características principales de los pokemones.

## JUSTIFICACIÓN
Al no contar con una pagina web, se crea Pokemons' house, la cual ofrece a los usuarios informacion básica acerca de los pokemones.

## DESCRIPCIÓN DEL PROYECTO
Esta página esta desarrollada por un lenguaje de programación en javascript, HTML5 y CSS. La arquitectura del sistema web está diseñado con una interfaz amigable y fácil de usar  para el usuario, la página web constará de una página principal donde se muestra los diferentes pokemones con una informacion básica,ademas cuenta con el menú ordenar que tiene 2 submenús , donde se va a odenar a los pokemones de forma ascendente y descendente.Tambien cuenta con el menú filtrar que cuenta con 2 submenús , los cuales van a permitir filtrarlos por tipo y debilidades  , y mostrar el porcentaje sobre el total de pokemones; además cuenta con un buscador por el nombre de cada pokemon. 
 Al hacerle Click a cada pokemon nos mostrará una mayor información sobre este y estadísticas(gráficas en barras) en base a  sus ataques.

## OBJETIVOS
- Mostrar la página web de una forma dinamica y de facil acceso.
- Lograr un mayor conocimiento acerca de los pokemones.
- Lograr que los usuarios hagan una mejor eleccion de pokemones al momento de jugar.

## BENEFICIARIOS DIRECTOS E INDIRECTOS :

### DIRECTOS
- Jugadores de Pokemon Go
### INDIRECTOS
-Público en general.

## HISTORIAS DE USUARIO
### INVESTIGACIÓN 
Nuestro primer paso fue investigar a traves de las redes sociales a nuestros amigos y familiares cercanos sobre el juego de Pokémon Go y llegamos a la conclusión de dos tipos de usuarios para Pokemon's House:

#### USUARIOS NOVATOS:
Son aquellas personas que solo han escuchado del juego  y desean saber mas  acerca de estos pokemones como su nombre ,su tipo e información básica sobre el pokemon.

#### USUARIOS EXPERTOS:
Son personas que desean saber sobre las debilidades, resistencias y estadisticas de sus ataques  de cada pokemon para convertirse en mejores jugadores.
Basándonos en estos dos perfiles, se plantearon 5 historias de usuarios para trabajar.

## DISEÑO DEL PROTOTIPO
  * Boceto en [dibujo](https://drive.google.com/drive/folders/1cFwLdZ9CpQwSU3dnZLgQ1y9rO6OCe2mI?usp=sharing)
  En primer lugar fue diseñado de una manera simple para que el usuario pueda ingresar el número de tarjeta y que esta solo se pueda validar en una sola interfaz. 
  
  [![protipo-l-piz-y-papel.jpg](https://i.postimg.cc/DzbytDkJ/protipo-l-piz-y-papel.jpg)](https://postimg.cc/Y4MHFdSM)

  * Primer boceto en [figma](https://www.figma.com/file/HqJou5rSr0jKhGIVxh0bPA/Untitled?node-id=0%3A1)

  [![mi-primer-prototipo.png](https://i.postimg.cc/63MZQgqW/mi-primer-prototipo.png)](https://postimg.cc/phnrG0K4)


  ### RESUMEN(FEEDBACK)
  Al inicio mi prototipo era mas simple, pregunte a mis familiares si les gustaba la idea, me dijeron que debía mejorarlo y darle mas detalles a mi proyecto como colores, imagenes. Tambien tenía que especificar en mi diseño a que usuarios tenía que ser dirigido poniendole un titulo a mi página. Finalmente decidi hacer dos interfaces una pagina principal y otra donde se valida la tarjeta.

  ### PROTOTIPO FINAL
  En este [prototipo final](https://www.figma.com/file/FKQ58VEqJ90JipE3iHt8Uv/Untitled?node-id=0%3A1) se encuentra las dos interfaces:

  * Página principal:

  [![primera-p-g.png](https://i.postimg.cc/brQst5NS/primera-p-g.png)](https://postimg.cc/7JZHvmzq)

  * Página donde se valida la tarjeta:

  [![segunda-p-g.png](https://i.postimg.cc/vHs1sG3r/segunda-p-g.png)](https://postimg.cc/s1TfPCFx)


## PLAN DE ACCIÓN
  ### Instalación
   - Instalación y configuración de los programas Visual Studio Code, node.js, git bash
  ### Planificación 
   - Diseñar el prototipo en lápiz y papel
   - Diseñar el prototipo en figma
   - Documentación de mi proyecto
  ### Desarrollo proyecto
   - Entender sobre el algoritmo de Lunh
   - Dessarrolar el algoritmo de Luhn
   - Usar funciones 
   - Implementar validator.isValid
   - Diseñar interfaz 
   - Usar DOM
   - Usar eventos como el click 
   - Pruebas unitarias
   - Funcionabilidad del proyecto
   - Dessarrolar el algoritmo para la máscara de la tarjeta
   - Implementar validator.maskify
   - Desarrolar el algoritmo para la franquicia de las tarjetas
   - Usar expreciones regulares
   - Implentar validator.getIssuer
   - Implementar validator.getIssuer en el archivo validator.spec.js para que valide las franquicias de los tipos de  tarjetas
   - Completar el README.

  ### Maquetación y diseño
   - Crear la estructura de mi página con HTML5
   - Implementar de CSS 
   - Pedir feedback a un coach sobre el diseño e interfaz de la página

## CHECKLIST

Esta sección está para ayudarte a llevar un control de lo que vas completando.

### Parte Obligatoria

* [x] Usa VanillaJS.
* [x] Pasa linter (`npm run pretest`)
* [x] Pasa tests (`npm test`)
* [x] Pruebas unitarias cubren un mínimo del 70% de statements, functions y
  lines y branches.
* [ ] Incluye _Definición del producto_ clara e informativa en `README.md`.
* [ ] Incluye historias de usuario en `README.md`.
* [ ] Incluye _sketch_ de la solución (prototipo de baja fidelidad) en
  `README.md`.
* [ ] Incluye _Diseño de la Interfaz de Usuario_ (prototipo de alta fidelidad)
  en `README.md`.

* [ ] Incluye link a prototipo de alta fidelidad (Zeplin|Figma|Canva) en `README.md`.
* [ ] Incluye el `Plan de acción` (Objetivos de Aprendizaje priorizados) de cada programadora en el `README.md` o otro documento.
* [ ] Incluye el listado de problemas que detectaste a través de tests de
  usabilidad en el `README.md`.
* [ ] UI: Muestra lista y/o tabla con datos y/o indicadores.
* [ ] UI: Permite ordenar data por uno o más campos (asc y desc).
* [ ] UI: Permite filtrar data en base a una condición.
* [ ] UI: Es _responsive_.

### Parte Opcional: "Hacker edition"

* [x] Implementa `validator.getIssuer`.
* [x] Interfaz muestra la franquicia de la tarjeta



