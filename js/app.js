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

const validarFormulario = () => {
  const nombre = document.getElementById("nombre");
  const edad = document.getElementById("edad");
  const dni = document.getElementById("dni");
  const sexo = document.getElementById("sexo");
  const peso = document.getElementById("peso");
  const altura = document.getElementById("altura");
  const anioNacimiento = document.getElementById("anioNacimiento");

  let errores = [];

  if (!nombre.value.trim()) {
    errores.push("El nombre es obligatorio.");
  } else if (nombre.value.length < 2 || nombre.value.length > 40) {
    errores.push("El nombre debe tener entre 2 y 40 caracteres.");
  }

  const edadVal = parseInt(edad.value);
  if (!edad.value) {
    errores.push("La edad es obligatoria.");
  } else if (edadVal < 1 || edadVal > 120) {
    errores.push("La edad debe estar entre 1 y 120.");
  }

  if (!sexo.value) {
    errores.push("Debe seleccionar un sexo.");
  }

  if (!dni.value.trim()) {
    errores.push("El DNI es obligatorio.");
  } else if (dni.value.length < 6 || dni.value.length > 8) {
    errores.push("El DNI debe tener entre 6 y 8 caracteres.");
  }

  if (!peso.value) {
    errores.push("El peso es obligatorio.");
  } else if (peso.value < 1 || peso.value > 120) {
    errores.push("El peso debe estar entre 1 y 120.");
  }

  if (!altura.value) {
    errores.push("La altura es obligatoria.");
  } else if (altura.value < 1 || altura.value > 300) {
    errores.push("La altura debe estar entre 1 y 300.");
  }

  const anioVal = parseInt(anioNacimiento.value);
  if (!anioNacimiento.value) {
    errores.push("El año de nacimiento es obligatorio.");
  } else if (anioVal < 1900 || anioVal > 2025) {
    errores.push("El año de nacimiento debe estar entre 1900 y 2025.");
  }

  if (errores.length > 0) {
    alert("Corrige los siguientes errores:\n\n" + errores.join("\n"));
    return false;
  }

  return true;
};

const mostrarGeneracion = (e) => {
  e.preventDefault();
  if (!validarFormulario()) return;

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
  if(!validarFormulario()) return;

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

const mostrarDatos = (e) => {
  e.preventDefault();
  if(!validarFormulario()) return;

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
};

const btnMostrarGeneracion = document.getElementById("btnMostrarGeneracion");
const btnMayorEdad = document.getElementById("btnMayorEdad");
const btnMostrarDatos = document.getElementById("btnMostraDatos");

btnMostrarGeneracion.addEventListener("click", mostrarGeneracion);
btnMayorEdad.addEventListener("click", mayorEdad);
btnMostrarDatos.addEventListener("click", mostrarDatos);
