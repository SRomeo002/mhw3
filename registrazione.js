document.addEventListener("DOMContentLoaded", function() {
  const clientId = "Ov23li0YXM3SuIOPBrEA";
  const redirectUri = "http://127.0.0.1:8080/mhw3.html";
  
  const loginButton = document.getElementById("login-button");
  const loginResponse = document.getElementById("login-response");

  loginButton.addEventListener("click", function() {
      const authUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=user`;

      window.location.href = authUrl;
  });

  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get("code");

  if (code) {
      fetch(`http://127.0.0.1:8080/authenticate?code=${code}`)
          .then(response => response.json())
          .then(data => {
              loginResponse.innerHTML = JSON.stringify(data);
          })
          .catch(error => {
              console.error("Errore durante l'autenticazione:", error);
              loginResponse.innerHTML = "Errore durante l'autenticazione. Si prega di riprovare.";
          });
  }
});
