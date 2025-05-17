const persona = {
    nombre: "",
    edad: 0,
    dni: "",
    sexo: "",
    peso: 0,
    altura: 0,
    anioNacimiento: 0,
}

const mostrarGeneracion = (e) =>{
   e.preventDefault();
    const anioNacimiento = document.getElementById("fechaNacimiento").value.trim();

     if (anioNacimiento >= 1930 && anioNacimiento <= 1948) {
      document.writeln(`<p>${this.#nombre} pertenece a Silent Generation, Caracteristica: Austeridad</p>`);
    } else if (anioNacimiento >= 1949 && anioNacimiento <= 1968) {
      document.writeln(`<p>${this.#nombre} pertenece a Baby Boom, Caracteristica: Ambición</p>`);
    } else if (anioNacimiento >= 1969 && anioNacimiento <= 1980) {
      document.writeln(`<p>${this.#nombre} pertenece a Generación X, Caracteristica: Obsesión por el exito</p>`);
    } else if (anioNacimiento >= 1981 && anioNacimiento <= 1993) {
      document.writeln(`<p>${this.#nombre} pertenece a Generación Y, Caracteristica: Frustración</p>`);
    } else if (anioNacimiento >= 1994 && anioNacimiento <= 2010) {
      document.writeln(`<p>${this.#nombre} pertenece a Generación Z, Caracteristica: Irreverencia</p>`);
    }
}