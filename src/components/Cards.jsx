
const Cards = () => {
  return (
    <div className='flex flex-col items-center gap-10 py-20 bg-whiteBG'>
      <span className= 'px-6 py-1 bg-white rounded-xl'>
        fixing kb complexity
      </span>
      <p className= 'text-4xl font-bold text-center mb-0'>
      Dont let the complexity of Kubernetes leak into your engineering team
      </p>
    
      <div className='flex justify-center gap-8'>
        <div className= 'flex flex-col gap-8 p-5 bg-white rounded-3xl w-96'>
          <img src="/K8s Operator.png" alt="" />
          <span className= 'font-medium'>Abstract Away K8s Primitives</span>
          <p className='text-gray-400'>Deploy, manage and debug applications with end-to-end ownership without experiencing bottlenecks or battling Kubernetes hurdles.
          </p>
      </div>

      <div className='flex justify-center gap-8'>
        <div className= 'flex flex-col gap-8 p-5 bg-white rounded-3xl w-96'>
          <img src="/K8s.png" alt="" />
          <span className= 'font-medium'>Proactively Troubleshoot</span>
          <p className='text-gray-400'>Identify availability issues, misconfigurations, lack of resources, K8s anomalies and failed deploys w. feedback and health checks.
          </p>
      </div>

      <div className='flex justify-center gap-8'>
        <div className= 'flex flex-col gap-8 p-5 bg-white rounded-3xl w-96'>
          <img src="/Developer Tools.png" alt="" />
          <span className= 'font-medium'>Developer tools</span>
          <p className='text-gray-400'>Robust tooling that encompass a CLI, an extensive developer-interfaces and cloud-native CI/CD integrations.
          </p>
      </div>

      </div>
      </div>
      </div>
      </div>
);
};
      export default Cards;
