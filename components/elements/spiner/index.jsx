const SpinerLoading = () => {
  return (
    <div className="body-spinner">
      <div className="overlay">
        <div id="loading">
          <span>s</span>
          <span>e</span>
          <span>a</span>
          <span>r</span>
          <span>c</span>
          <span>h</span>
          <span>i</span>
          <span>n</span>
          <span>g</span>
        </div>
        <div className="compass">
          <div className="compass-inner">
            <div className="north">N</div>
            <div className="east">E</div>
            <div className="west">W</div>
            <div className="south">S</div>
            <div className="main-arrow">
              <div className="arrow-up"></div>
              <div className="arrow-down"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpinerLoading;
