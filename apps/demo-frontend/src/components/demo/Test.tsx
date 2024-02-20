interface TestProps  {
      name: string;
      age: number;
}




const Test = ({age, name}:TestProps) => {
  return (
    <div>name: {name}
      age: {age}
    </div>
  )
}

export default Test