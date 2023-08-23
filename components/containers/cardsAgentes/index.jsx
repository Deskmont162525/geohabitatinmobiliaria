import CardAgente from "../../elements/cardAgentes";

const CardsAgentes = ({ dataCards }) => {
  return (
    <>
      <div className="spacer agents">
        <div className="col-lg-10 col-sm-12">
          <div>
            {dataCards
              .filter((card) => card.agente !== null)
              .map((card) => (
                <CardAgente key={card.id} {...card} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CardsAgentes;
