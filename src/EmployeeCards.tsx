
function EmployeeCards({description,name,title}) {
  return (
    <div className="border p-4 rounded">
        <p>{description}</p>
        <h2>{name}</h2>
        <h3>{title}</h3>
    </div>
  )
}

export default EmployeeCards