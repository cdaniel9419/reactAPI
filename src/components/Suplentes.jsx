import React from "react";
import { connect } from "react-redux";

const Suplentes =({suplentes}) =>(
    <section>
        <h2>Suplentes</h2>
        <div className="suplentes">
            {
                titulares.map(j =>(
                    <article className="suplente" key={j.id}>
                        <div>
                            <img src={j.foto} alt={j.nombre}/>
                            <button>X</button>
                        </div>
                        <p>{j.nombre}</p>
                    </article>
                ))
            }
        </div>
    </section>
)

const mapStateToProps = state =>({
    titulares: state.titulares
})
const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Suplentes)