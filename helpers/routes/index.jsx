export const changeRoute = (link, router, save) => {
  const patt = new RegExp("https");
  const pattTwo = new RegExp("http");
  const res = patt.test(link);
  const resTwo = pattTwo.test(link);
  if (save) {
    sessionStorage.setItem("vacante", JSON.stringify(save));
  }
  if (res || resTwo) {
    window.open(link);
  } else {
    router.push(link);
  }
};

export const isExternalLink = (link) => {
  const patt = new RegExp("https");
  const pattTwo = new RegExp("http");
  const res = patt.test(link);
  const resTwo = pattTwo.test(link);
  if (res || resTwo) {
    return true;
  } else {
    return false;
  }
};
