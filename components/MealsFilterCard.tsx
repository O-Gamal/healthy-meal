import { useState } from "react";


const prepTimes = ['5 min', '10 min', '15 min', '30 min', '45 min', '1 hour', 'more than one hour'];
const calories = ['100', '200', '300', '500', '800', 'more than 800'];

const MealsFilterCard = () => {
  const [selectedPrepTime, setSelectedPrepTime] = useState(null)
  const [selectedCal, setSelectedCal] = useState(null)

  const handleClearFilter = () => {
    setSelectedPrepTime(null);
    setSelectedCal(null);
  }

  return (
    <section className="bg-green overflow-x-auto rounded-md p-8 space-y-5 bg-[url('/static/img/leaves.png')] bg-no-repeat bg-bottom bg-[length:220px] ">
      <h1 className="text-dark-primary font-bold text-2xl">Filter Meals</h1>
      <section className="space-y-2">
        <div className="flex gap-2 items-center text-lg">
          {prepTimes.map(
            (prepTime) => <span key={prepTime} className={` whitespace-nowrap cursor-pointer px-3 rounded ${selectedPrepTime === prepTime ? 'bg-dark-secondary text-white' : 'bg-white text-dark-primary'}`} onClick={() => setSelectedPrepTime(prepTime)}>{prepTime} Meals</span>
          )}
        </div>
        <div className="flex gap-2 items-center text-lg">
          {calories.map(
            (calorie) => <span key={calorie} className={`whitespace-nowrap cursor-pointer px-3 rounded ${selectedCal === calorie ? 'bg-dark-secondary text-white' : 'bg-white text-dark-primary'}`} onClick={() => setSelectedCal(calorie)}>{calorie} Cal Meals</span>
          )}
          <button onClick={handleClearFilter} className="text-dark-primary whitespace-nowrap border-dark-primary  rounded-md px-2 font-semibold hover:bg-gunmetal hover:text-white transition-colors duration-200">Clear Filter</button>
        </div>
      </section>
    </section>
  )
}
export default MealsFilterCard