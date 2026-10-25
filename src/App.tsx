import EmployeeCards from "./EmployeeCards"

const cards = [
 {id: 1, description: "Manages digital marketing campaigns and scoial media strategy. Highly skilled SEO and content creation", name: "Maria Rodriguez", title: "Marketing Manager"},
 {id: 2, description: "Handles customer inquiries and provides technical support. Know for excellent communication and problem-solving skills", name: "Theodore Carter Junior", title: "Customer Service Representive"},
 {id: 3, description: " Creates user-friendly interfaces and visual designs", name: "Chloe Lee", title: "UX/UI Designer"},
];

function App() {
  return (
    <div>

        <div className="grind gap-4">
     {cards.map(cards=>(
       <EmployeeCards
      key={cards.id}
      description={cards.description}
      name={cards.name}
      title={cards.title}
      />
    ))}
    </div>

    </div>
  )
}

export default App
