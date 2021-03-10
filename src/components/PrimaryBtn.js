function PrimaryBtn({ name, index }) {
  return (
    <button className="pBtn" key={index}>
      {name}
    </button>
  );
}

export default PrimaryBtn;
