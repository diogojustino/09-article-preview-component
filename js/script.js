const shareButton = document.getElementById("shareBTN");
shareButton?.addEventListener("click", handleToggleShareCard);

const shareCard = document.getElementById("share_card");

const hideBTN = document.getElementById("hideBTN");
hideBTN?.addEventListener("click", handleToggleShareCard);

function handleToggleShareCard() {
  shareButton?.classList?.toggle("active");

  shareCard?.classList?.toggle("active");
}

document.addEventListener("click", (event) => {
  const hideShareCard = !(
    shareButton.contains(event.target) || shareCard.contains(event.target)
  );
  console.log(hideShareCard);
  if (hideShareCard) {
    shareButton?.classList?.remove("active");
    shareCard?.classList?.remove("active");
  }
});
