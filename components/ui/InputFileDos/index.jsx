import { Button, Typography } from "@material-ui/core";
import { parseCookies } from "nookies";
import React from "react";
import { useStylesInputFile } from "./InputFile.style";
const url = process.env.NEXT_PUBLIC_URL_BACK;

const InputFileDos = ({ label, nameForm, setState, state, helperText, id_user }) => {
  const classes = useStylesInputFile();

  const [failedFile, setFailedFile] = React.useState(false);
  const [successFile, setSuccessFile] = React.useState(false);
  const [nameFile, setNameFile] = React.useState("");

  async function subirArchivo() {
    let fileInput = document.getElementById(nameForm);

    var myHeaders = new Headers();
    // myHeaders.append("Authorization", `Bearer ${token}`);

    var formdata = new FormData();
    // formdata.append("name", nameForm);
    formdata.append("image", fileInput.files[0]);
    // formdata.append("contenedor", dni);
    // formdata.append("uuid", numberRandom);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    if (fileInput.files[0].size / 1024 / 1024 <= 2) {
      fetch(`${url}/agentes/agente/upload/${id_user}`,
        requestOptions
      )
        .then((response) => response.json())
        .then((resul) => {
          const { code, result } = resul;
          if (code == 200) {
            setState({
              ...state,
              [nameForm]: `${result?.fileName}`,
            });
            setNameFile(fileInput.files[0].name);
            setFailedFile(false);
            setSuccessFile(true);
          }
        })
        .catch((error) => {
          // console.log("error", error);
          alert(`error ${error}`)
          setFailedFile(false);
          setSuccessFile(true);
        });
    } else {
      setSuccessFile(false);
      setFailedFile(true);
    }
  }

  return (
    <div className={classes.containerInput}>
      <label style={{ display: "block" }}>{label}</label>
      <Button
        variant="contained"
        component="label"
        fullWidth
        className={classes.btnFile}
      >
        <img
          src="/images/upload.svg"
          alt="UploadIcon"
          style={{ marginRight: 10 }}
        ></img>
        <Typography className={classes.text}>
          Adjunta aquí el documento
        </Typography>
        <input
          type="file"
          hidden
          id={nameForm}
          onChange={subirArchivo}
          accept="image/*"
        />
      </Button>
      <p className={classes.error}>{helperText}</p>
      {successFile && (
        <p className={classes.success}>
          Archivo subido correctamente : {nameFile}
        </p>
      )}
      {failedFile && (
        <p className={classes.error}>
          No se permite archivos con peso mayor a 2mb
        </p>
      )}
    </div>
  );
};

export default InputFileDos;
