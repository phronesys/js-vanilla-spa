import views from "../views/home.html";

export default () => {
  const divElement = document.createElement("div");
  divElement.classList = "text-primary"; // this is using bootstrap
  divElement.innerHTML = views;

  // document.getElementById('btnClick') the same as below
  // using this will throw error, because there is no btnClick in the document
  // const btnClick =  document.querySelector('#btnClick');
  // the workaround is to search in the divElement instead
  const btnClick = divElement.querySelector("#btnClick");
  btnClick.addEventListener("click", () => {
    alert("Lo sé");
  });

  return divElement;
};
