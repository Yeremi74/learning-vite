import { useState } from 'react';

const Benefit = () => {
  const cardInfo = [
    // primer objeto
    {
      title: 'Straight from code to production',
      desc: 'Let developers independently deploy to K8 without any bottlenecks, steep K8 learning curves or unnecessary deployment stages.',
    },
    // segundo objeto
    {
      title: 'Troubleshoot blazingly fast',
      desc: 'Identify issues, misconfigurations, lack of resources, and failed deploys, and resolve with rollbacks.',
    },
    // tercer objeto
    {
      title: 'Unmatched Developer Experience',
      desc: 'Provide developers with a powerful platform that fits their workflows with a robust CLI and Dashboard.',
    },
  ];
  const [clicked, setClicked] = useState(null);

  return (
    <div className='flex flex-col items-center gap-10 bg-whiteBG py-14'>
      <h2 className='text-4xl font-semibold'>
        A platform to benefit the entire team
      </h2>

      <div className='flex bg-gray-300 rounded-lg'>
        <button className='px-3 py-1 text-black bg-white rounded-lg'>
          Product Teams
        </button>
        <button className='px-3 py-1 text-gray-400 rounded-lg'>
          DevOps/Platform Teams
        </button>
        <button className='px-3 py-1 text-gray-400 rounded-lg'>
          Engineering Leaders
        </button>
      </div>
      {/* ****** En tailwind tenemos clases que se pueden combinar con otras clases, como lo son hover:, active: y en este caso tenemos sm:, md: y lg: */}
      {/* ****** sm son las siglas de small, md son las siglas de medium y lg de large en ingles */}
      {/* ****** para poder crear un diseño responsive debemos utilzar 2 de estas 3 clases */}
      {/* ****** primero debemos crear la vista para telefonos, para esta vista no utilizamos ninguna clase anterior mencionada, simplemente colocamos las clases normales de tailwind */}
      {/* ****** luego tenemos que hacer la vista para pantallas medianas y grandes, para medianas utilizamos md:, y para pantallas grandes utilizamos lg: */}
      {/* ****** en este caso lo unico que estamos haciendo responsive son las columnas del contenedor padre */}
      {/* ****** para vistas de telefonos estamos utilizando grid-cols-1 */}
      {/* ****** para vistas medianas estamos utilizando md:grid-cols-2*/}
      {/* ****** y para vistas grandes utilizamos lg:grid-cols-3 */}
      {/* ****** con la vista de telefono NO utilizamos sm: ya que al haber md: y lg:, la clase sin estos atributos extras pasa a ser la vista predeterminada para telefonos */}

      <div className='grid justify-center w-10/12 grid-cols-1 gap-3 mx-auto my-0 md:grid-cols-2 lg:grid-cols-3'>
        {/* Estoy tomando objeto del arreglo que esta mas arriba, con el map recorro cada objeto y creo las cartas con la informacion de cada objeto*/}
        {/* creo la variable card para sacar la informacion del objeto, y la variable i es una variable que toma la posicion del objeto, es decir, el primer objeto del arreglo tiene la posicion 0, el segundo objeto tiene la posicion 1, y el tercer objeto tiene la posicion 2, esa posicion se coloca en la variable i, esto funciona en automatico, asi funciona el map, la primera variable es para la informacion y la segunda variable es para la posicion */}
        {cardInfo.map((card, i) => (
          <div
            key={card.title}
            //  al colocar javascript la clase se escribe diferente, ahora es de la siguiente manera: className={`clases`}, es importante utilizar las comillas invertidas
            // ${clicked === i && '-translate-y-7'} este codigo lee el estado clicked, y si es igual a i se ejecuta la clase -translate-y-7
            className={`flex flex-col gap-3 p-4 bg-white transition-all ${
              clicked === i && '-translate-y-7'
            }`}
            // con el onclick actualizo mi estado para que tenga el valor de la posicion del objeto
            onClick={() => setClicked(i)}
          >
            <img src='/check.svg' className='w-8 h-8' />
            <div>
              <h3 className='text-lg font-bold'>{card.title}</h3>
              <p className='text-gray-400'>{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefit;
