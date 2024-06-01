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
    <div className='w-screen bg-whiteBG flex flex-col items-center gap-5 py-14'>
      <h2 className='text-4xl font-semibold'>
        A platform to benefit the entire team
      </h2>

      <div className='bg-gray-300 rounded-lg flex'>
        <button className='px-3 py-1 rounded-lg bg-white text-black'>
          Product Teams
        </button>
        <button className='px-3 py-1 rounded-lg text-gray-400'>
          DevOps/Platform Teams
        </button>
        <button className='px-3 py-1 rounded-lg text-gray-400'>
          Engineering Leaders
        </button>
      </div>
      <div className='flex w-10/12 gap-3 mx-auto my-0 justify-center'>
        {cardInfo.map((card) => (
          <div
            key={card.title}
            className='bg-white w-96 flex flex-col gap-3 p-4'
          >
            <img src='/check.svg' className='h-8 w-8' />
            <div>
              <h3 className='font-bold text-lg'>{card.title}</h3>
              <p className='text-gray-400'>{card.desc}</p>a
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefit;
