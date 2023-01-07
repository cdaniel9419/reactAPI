import { createStore } from "redux";

const initialState = {
  jugadores: [
    {
      id: 1,
      nombre: "whatever",
      foto: "https://img.freepik.com/vector-premium/perfil-avatar-hombre-icono-redondo_24640-14044.jpg",
    },
    {
      id: 2,
      nombre: "whatever2",
      foto: "https://cdn.icon-icons.com/icons2/1736/PNG/512/4043260-avatar-male-man-portrait_113269.png",
    },
    {
      id: 3,
      nombre: "whatever3",
      foto: "https://cdn.icon-icons.com/icons2/1736/PNG/512/4043238-avatar-boy-kid-person_113284.png",
    },
    {
      id: 4,
      nombre: "whatever4",
      foto: "https://cdn.icon-icons.com/icons2/1736/PNG/512/4043252-child-girl-kid-person_113255.png",
    },
  ],
  titulares: [],
  suplentes: [],
};

const reducerEntrenador = (state = initialState, action) => {
  if (action.type === "AGREGAR-TITULAR") {
    return {
      ...state,
      titulares: state.titulares.concat(action.jugador),
    };
  }
  return state;
};

export default createStore(reducerEntrenador);
