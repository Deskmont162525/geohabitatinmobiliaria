import { CircularProgress, Grid, Typography } from "@material-ui/core";
import React from "react";
import { ContainerGeneral } from "../../containers/ContainerGeneral";
const urlImage = `/${process.env.NEXT_PUBLIC_BASE_PATH}/imagesPages/noSesion.gif`;
const NoSession = ({ message }) => {
  return (
    <ContainerGeneral>
      <div className="container-redi">
        <div style={{ paddingTop: 18 }}>
          <Grid className="grid-redi">
            <Typography className="title-redi">Vaya</Typography>
            <Typography className="subtitle-redi">{message}</Typography>
            <img className="image-redi" src={urlImage} alt="checkSucces" />
          </Grid>
        </div>
        <CircularProgress size={40} style={{ marginLeft: 5 }} />
        <Typography className="link-redi">Redirigiendo al DASHBOARD</Typography>
      </div>
    </ContainerGeneral>
  );
};

export default NoSession;
