export const WhyChooseCard = ({ img, header, body }) => {
  const cardDiv = document.createElement("div");
  cardDiv.classList.add(
    "why-choose-card",
    "d-flex",
    "flex-column",
    "align-items-center",
    "align-items-lg-start"
  );

  cardDiv.innerHTML = `   
    <img class="pb-4" src="${img}" alt="">
    <h1 class="feature">${header}</h1>
    <p>
     ${body}
    </p>
          `;

  return cardDiv;
};
