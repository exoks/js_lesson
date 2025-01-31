
function Demo(props) {
  return (
    <>
      <h1> This is a new component </h1>
      <p>
        Hello, {props.data.name}
        <br/>
        Your age is {props.data.age}
      </p>
    </>
  );
}

export default Demo;
