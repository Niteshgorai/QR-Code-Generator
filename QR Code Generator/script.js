let imgBx = document.querySelector(".imgBx");
let qrText = document.querySelector("#qrText");
let downloadBtn = document.querySelector("#dQr");
const size = document.querySelector("#sizes");
let genBtn = document.querySelector("#generateBtn");
genBtn.addEventListener("click", (e) => {
  e.preventDefault();
  isEmpty();
});
downloadBtn.addEventListener("click", () => {
    let img = document.querySelector('.imgBx img');
    if (img !== null) {
        let imgAttr = img.getAttribute('src');
        downloadBtn.setAttribute('href', imgAttr);
    }
    else {
        downloadBtn.setAttribute('href', `${document.querySelector('canvas').toDataURL()}`);
    }
});
size.addEventListener("change", (e) => {
  size = e.target.value;
  isEmpty();
});
function isEmpty() {
  qrText.value.length > 0 ? GenerateQR() : qrText.classList.add("error");
}
function GenerateQR() {
  imgBx.style = "display:grid; place-content: center;";
  imgBx.innerHTML = "";
  new QRCode(imgBx, {
    text: qrText.value,
    height: size.value,
    width: size.value,
    colorLight: "#fff",
    colorDark: "#000",
  });
}
