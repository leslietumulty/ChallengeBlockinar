import "./styles.css";
axios
  .get("http://5e693ec6d426c00016b7ec9e.mockapi.io/CV1/infected")
  .then(res => {
    console.log(res);
  });
