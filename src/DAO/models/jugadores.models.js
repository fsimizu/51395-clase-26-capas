let jugadores = [
  { id: '123', name: 'juan roman', goles: 10000, importantes: 'casi todos definitivos' },
  { id: '456', name: 'cresto', goles: 100, importantes: 'casi ninguno' },
];

class JugadoresModel {
  getAll = () => {
    let jugadoresEncontrados = jugadores;
    return jugadoresEncontrados;
  };
  createOne = (jugador) => {
    jugador.id = Math.floor(Math.random() * 1000);
    jugadores.push(jugador);
    return jugador;
  };
  getOne = (id) => {
    let jugadorBuscado = jugadores.find(obj => obj.id === id);
    return jugadorBuscado;
  };
  editOne = (id, name, goles, importantes) => {
    let jugadorModificado = jugadores.find(obj => obj.id === id);
    jugadorModificado.name = name;
    jugadorModificado.goles = goles;
    jugadorModificado.importantes = importantes;
    return jugadorModificado;
  };
  deleteOne = (id) => {
    let jugadorEliminadoIndex = jugadores.findIndex(obj => obj.id == id);
    let jugadorEliminado = jugadores.splice(jugadorEliminadoIndex,1);
    return "Jugador eliminado";
  };
}

export const jugadoresModel = new JugadoresModel();
