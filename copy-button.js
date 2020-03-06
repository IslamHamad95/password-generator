function  copyButton() {
    let text = document.getElementById("generated-password");

  /* Select the text field */
  text.select();
  text.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");
  document.getElementById("textcopied").style.display = "block";
}