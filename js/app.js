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

  get getDni() {
    return this.#dni;
  }

  get getSexo() {
    return this.#sexo;
  }

  get getPeso() {
    return this.#peso;
  }

  get getAltura() {
    return this.#altura;
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
  const contenedor = document.getElementById("contenedorGeneracion");
  contenedor.classList.toggle("d-none");

  const btn = document.getElementById("btnMostrarGeneracion");
  btn.textContent = contenedor.classList.contains("d-none")
    ? "Mostrar generación"
    : "Ocultar Mostrar generación";

  const persona = crearPersona();
  const [generacion, caracteristica] = persona.obtenerGeneracion();

  const resultado = document.getElementById("resultadoGeneracion");
  resultado.innerHTML = `<ul>
    <li>Nombre: ${persona.getNombre}</li>
    <li>Edad: ${persona.getEdad}</li>
    <li>Año de nacimiento: ${persona.getAnioNacimiento}</li>
    <li>Generación: ${generacion}</li>
    <li>Característica: ${caracteristica}</li>
  </ul>`;
};

const mayorEdad = (e) => {
  e.preventDefault();
  const contenedor = document.getElementById("contenedorEdad");
  contenedor.classList.toggle("d-none");

  const btn = document.getElementById("btnMayorEdad");
  btn.textContent = contenedor.classList.contains("d-none")
    ? "Mayor de edad"
    : "Ocultar Mayor de edad";

  const persona = crearPersona();
  const edadPersona = persona.mayorEdad();

  const parrafoMayorEdad = document.getElementById("resultadoMayorEdad");

  parrafoMayorEdad.innerHTML = `<ul>
    <li>Nombre: ${persona.getNombre}</li>
    <li>Edad: ${persona.getEdad}</li>
    <li>Estado: ${edadPersona}</li>
  </ul>`;
};

const mostrarDatos = (e) =>{
  e.preventDefault();
  const contenedor = document.getElementById("contenedorDatos");
  contenedor.classList.toggle("d-none");

  const btn = document.getElementById("btnMostraDatos");
  btn.textContent = contenedor.classList.contains("d-none")
    ? "Mostrar datos"
    : "Ocultar Mostrar datos";

  const persona = crearPersona();

  const resultado = document.getElementById("resultadoDatos");
  resultado.innerHTML = `<ul>
    <li>Nombre: ${persona.getNombre}</li>
    <li>Edad: ${persona.getEdad}</li>
    <li>DNI: ${persona.getDni}</li>
    <li>Sexo: ${persona.getSexo}</li>
    <li>Peso: ${persona.getPeso}</li>
    <li>Altura: ${persona.getAltura}</li>
    <li>Año de nacimiento: ${persona.getAnioNacimiento}</li>
  </ul>`;
}

const btnMostrarGeneracion = document.getElementById("btnMostrarGeneracion");
const btnMayorEdad = document.getElementById("btnMayorEdad");
const btnMostrarDatos = document.getElementById("btnMostraDatos");

btnMostrarGeneracion.addEventListener("click", mostrarGeneracion);
btnMayorEdad.addEventListener("click", mayorEdad);
btnMostrarDatos.addEventListener("click", mostrarDatos);