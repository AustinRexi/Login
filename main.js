document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector("#login");
  const signupForm = document.querySelector("#signup");
  document.querySelector("#linksignup").addEventListener("click", () => {
    loginForm.classList.add("hide");
    signupForm.classList.remove("hide");
  });
  document.querySelector("#linklogin").addEventListener("click", () => {
    signupForm.classList.add("hide");
    loginForm.classList.remove("hide");
  });
});
