import './CardPizza.css'

const CardPizza = ({imagen, nombre, ingredientes, precio} ) => {
  return (
    <div className="Card" >
       <img className='imagen' src={imagen} alt={nombre}/>
      <div className="Titulo mb-3 m-lg-2">
       <h3>Pizza {nombre}</h3>
       </div>
       <hr />
       <p className='ingredientes mb-1 text-center'>Ingredientes:</p>
       <hr />
       <p className='text-center'>🍕 {ingredientes}</p>
       <hr />
       <p className='text-center'>${precio}</p>

       <div className="btn">
        <button className='btn-vermas'>Ver más 👀</button>
        <button className='btn-añadir'>Añadir 🛒</button>
       </div>
    </div>
  )
}

export default CardPizza
