import CardAgente from "../../elements/cardAgentes";

const CardsAgentes = ({dataCards}) => {
  return (
    <>
      <div className="spacer agents">
        <div className="col-lg-8 col-lg-offset-2 col-sm-12">
          <div className="row">
            {dataCards.map((card) => (
              <CardAgente key={card.id} {...card} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CardsAgentes;
