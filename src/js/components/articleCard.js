export const ArticleCard = ({ img, by, header, body }) => {
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card", "article-card");

  cardDiv.innerHTML = `   
    <img
    src="${img}"
    class="card-img-top"
    alt="..."
  />
  <div class="card-body">
    <h6>By ${by}</h6>
    <h5 class="card-title">${header}</h5>
    <p class="card-text">
     ${body}
    </p>
  </div>
            `;

  return cardDiv;
};
