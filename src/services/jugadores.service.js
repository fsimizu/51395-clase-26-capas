import { jugadoresModel } from '../DAO/models/jugadores.models.js';

class JugadoresService {
  getAll = () => {
    let jugadoresEncontrados = jugadoresModel.getAll();
    return jugadoresEncontrados;
  };

  createOne = (jugador) => {
    let jugadorCreado = jugadoresModel.createOne(jugador);
    return jugadorCreado;
  };

  editOne = (id, name, goles, importantes) => {
    if(!name || !goles || !importantes) {
      return "Faltan datos"
    }

    let jugadorBuscado = jugadoresModel.getOne(id);
    if (!jugadorBuscado) {return "Jugador no encontrado"};

    let jugadorModificado = jugadoresModel.editOne(id, name, goles, importantes);
    return jugadorModificado;
  };

  deleteOne = (id) => {
    let jugadorBuscado = jugadoresModel.getOne(id);
    if (!jugadorBuscado) {return "Jugador no encontrado"};
    let jugadorEliminado = jugadoresModel.deleteOne(id);
    return jugadorEliminado;
  };



}

export const jugadoresService = new JugadoresService();
