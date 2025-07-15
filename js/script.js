const shareButton = document.getElementById("shareBTN");
if (shareButton) { 
    shareButton.addEventListener("click", handleToggleShareCard);
}

const hideBTN = document.getElementById("hideBTN");
if (hideBTN) {
  hideBTN.addEventListener("click", handleToggleShareCard);
}

function handleToggleShareCard() { 

  shareButton?.classList?.toggle('active')
  const shareCard = document.getElementById("share_card");
  shareCard?.classList?.toggle("active");

}