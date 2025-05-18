class Persona {
  #nombre;
  #edad;
  #dni;
  #sexo;
  #peso;
  #altura;
  #anioNacimiento;

  constructor(nombre, edad, dni, sexo, peso, altura, anioNacimiento) {
    this.#nombre = nombre;
    this.#edad = edad;
    this.#dni = dni;
    this.#sexo = sexo;
    this.#peso = peso;
    this.#altura = altura;
    this.#anioNacimiento = anioNacimiento;
  }

  get getNombre() {
    return this.#nombre;
  }

  get getEdad() {
    return this.#edad;
  }

  get getAnioNacimiento() {
    return this.#anioNacimiento;
  }

  obtenerGeneracion() {
    const anio = this.#anioNacimiento;
    if (anio >= 1930 && anio <= 1948)
      return ["Silent Generation", "Austeridad"];
    if (anio >= 1949 && anio <= 1968) return ["Baby Boom", "Ambición"];
    if (anio >= 1969 && anio <= 1980)
      return ["Generación X", "Obsesión por el éxito"];
    if (anio >= 1981 && anio <= 1993) return ["Generación Y", "Frustración"];
    if (anio >= 1994 && anio <= 2010) return ["Generación Z", "Irreverencia"];
  }

  mayorEdad() {
    const edad = this.#edad;
    if (edad >= 18) {
      return "Mayor de edad";
    } else {
      return "Menor de edad";
    }
  }
}

const crearPersona = () => {
  const datos = document.getElementsByTagName("input");
  return new Persona(
    datos[0].value,
    parseInt(datos[1].value),
    datos[2].value,
    document.getElementById("sexo").value,
    datos[3].value,
    datos[4].value,
    parseInt(datos[5].value)
  );
};

const mostrarGeneracion = (e) => {
  e.preventDefault();
  const btnMostrarGeneracion = document.getElementById("btnGeneracion");
  btnMostrarGeneracion.classList.toggle("d-none");

  const persona = crearPersona();

  const [generacion, caracteristica] = persona.obtenerGeneracion();

  const parrafoMostrarGeneracion = document.getElementById(
    "resultadoGeneracion"
  );
  parrafoMostrarGeneracion.innerHTML = `<ul>
  <li>Nombre: ${persona.getNombre}</li>
  <li>Edad: ${persona.getEdad}</li>
  <li>Año de nacimiento: ${persona.getAnioNacimiento}</li>
  <li>Generación: ${generacion}</li>
  <li>Caracteristica: ${caracteristica}</li>
  </ul>`;
};

const mayorEdad = (e) => {
  e.preventDefault();
  const btnMayorEdad = document.getElementById("btnEdad");
  btnMayorEdad.classList.toggle("d-none");

  const persona = crearPersona();
  const edadPersona = persona.mayorEdad();

  const parrafoMayorEdad = document.getElementById("resultadoMayorEdad");
  parrafoMayorEdad.innerHTML = `<ul>
  <li>Nombre: ${persona.getNombre}</li>
  <li>Edad: ${persona.getEdad}</li>
  <li>Estado: ${edadPersona}</li>
  </ul>`;
};

const btnMostrarGeneracion = document.getElementById("btnMostrarGeneracion");
const btnMayorEdad = document.getElementById("btnMayorEdad");

btnMostrarGeneracion.addEventListener("click", mostrarGeneracion);
btnMayorEdad.addEventListener("click", mayorEdad);
