export default function Block(props) {
    // console.log(props);
  return (
        <div className="block" onClick={props.onClick}>{props.value}</div>  
  );
}
