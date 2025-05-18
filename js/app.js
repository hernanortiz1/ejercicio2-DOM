class persona {
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
}

const mostrarGeneracion = (e) => {
  e.preventDefault();
  // const anioNacimiento = document.getElementById("fechaNacimiento").value.trim();
  const datos = document.getElementsByTagName("input");
  console.log(datos);

  if (anioNacimiento >= 1930 && anioNacimiento <= 1948) {
    document.writeln(
      `<p>${
        this.#nombre
      } pertenece a Silent Generation, Caracteristica: Austeridad</p>`
    );
  } else if (anioNacimiento >= 1949 && anioNacimiento <= 1968) {
    document.writeln(
      `<p>${this.#nombre} pertenece a Baby Boom, Caracteristica: Ambición</p>`
    );
  } else if (anioNacimiento >= 1969 && anioNacimiento <= 1980) {
    document.writeln(
      `<p>${
        this.#nombre
      } pertenece a Generación X, Caracteristica: Obsesión por el exito</p>`
    );
  } else if (anioNacimiento >= 1981 && anioNacimiento <= 1993) {
    document.writeln(
      `<p>${
        this.#nombre
      } pertenece a Generación Y, Caracteristica: Frustración</p>`
    );
  } else if (anioNacimiento >= 1994 && anioNacimiento <= 2010) {
    document.writeln(
      `<p>${
        this.#nombre
      } pertenece a Generación Z, Caracteristica: Irreverencia</p>`
    );
  }
};

const btnMostrarGeneracion = document.getElementById("btnMostrarGeneracion");
btnMostrarGeneracion.addEventListener("click", mostrarGeneracion);
