const Selector = ({ flavor, url, onClick }) => {
  return (
    <div className="main__selector" onClick={onClick}>
      <img src={url} className="image-container"></img>
      <div className="bg"></div>
    </div>
  );
};

export default Selector;
