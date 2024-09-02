import { ReactComponent as PerformanceIcon } from "../../assets/HiringAndOnboarding/Second Section/performance.svg";

const Card = ({ icon, title, content }) => {
  const Icon = icon || PerformanceIcon;
  return (
    <div className="bg-white rounded-lg h-[20.75rem] w-[25rem] p-10 flex flex-col gap-5">
      <Icon className="card-icon mx-auto" />
      <p className="text-center">{title}</p>
      <p className=" font-light font-nunito text-xl">{content}</p>
    </div>
  );
};

export const EmployeeCards = ({ cardData }) => {
  return (
    <div className="py-10 px-5 flex flex-wrap justify-center gap-10">
      {cardData.map((card) => (
        <Card key={card.title} icon={card.icon} title={card.title} content={card.content} />
      ))}
    </div>
  );
};

const EvaluateEmployee = ({CardData}) => {
  return (
    <section className="bg-[#AFF4C6] py-20">
      <h1 className="px-10 text-4xl font-semibold text-gurugeeks-orange-700">
        Evaluate Employees
      </h1>
      <EmployeeCards cardData={CardData} />
    </section>
  );
};

export default EvaluateEmployee;
