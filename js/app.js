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
}

const mostrarGeneracion = (e) => {
  e.preventDefault();
  const btnMostrarGeneracion = document.getElementById("btnGeneracion");

  btnMostrarGeneracion.classList.toggle("d-none");

  const datos = document.getElementsByTagName("input");
  console.log(datos);
  const nombre = datos[0].value;
  const edad = parseInt(datos[1].value);
  const dni = datos[2].value;
  const sexo = document.getElementById("sexo").value;
  const peso = datos[3].value;
  const altura = datos[4].value;
  const anioNacimiento = parseInt(datos[5].value);

  const persona = new Persona(
    nombre,
    edad,
    dni,
    sexo,
    peso,
    altura,
    anioNacimiento
  );
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

const btnMostrarGeneracion = document.getElementById("btnMostrarGeneracion");
btnMostrarGeneracion.addEventListener("click", mostrarGeneracion);
