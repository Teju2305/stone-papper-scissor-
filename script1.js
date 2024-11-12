function saveUsername() {
  let username1 = document.querySelector("#name").value;
  let lim = Number(document.querySelector("#count").value);
  if (username1.trim() === "" || lim <= 0) {
    alert("Please fill out both the Username and Rounds fields correctly.");
    return;
  }
  localStorage.setItem("limit", lim);
  localStorage.setItem("username", username1);
  window.location.href = "next.html";
}
