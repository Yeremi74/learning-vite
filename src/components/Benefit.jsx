const Benefit = () => {
  const cardInfo = [
    {
      title: 'Straight from code to production',
      desc: 'Let developers independently deploy to K8 without any bottlenecks, steep K8 learning curves or unnecessary deployment stages.',
    },
    {
      title: 'Troubleshoot blazingly fast',
      desc: 'Identify issues, misconfigurations, lack of resources, and failed deploys, and resolve with rollbacks.',
    },
    {
      title: 'Unmatched Developer Experience',
      desc: 'Provide developers with a powerful platform that fits their workflows with a robust CLI and Dashboard.',
    },
  ];

  return (
    <div className='flex flex-col items-center gap-5  bg-whiteBG py-14'>
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
      <div className='flex justify-center w-10/12 gap-3 mx-auto my-0'>
        {cardInfo.map((card) => (
          <div
            key={card.title}
            className='flex flex-col gap-3 p-4 bg-white w-96'
          >
            <img src='/check.svg' className='w-8 h-8' />
            <div>
              <h3 className='text-lg font-bold'>{card.title}</h3>
              <p className='text-gray-400'>{card.desc}</p>a
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefit;
