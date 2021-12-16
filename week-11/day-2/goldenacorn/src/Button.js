function Button(props) {
  return (
    <div>
      <button className='button' onClick={props.handleClick}>
        {props.label}
      </button>
    </div>
  );
}

export default Button;
