// import "regenerator-runtime/runtime.js";
import "./styles.scss";
import { whyChooseData } from "./js/util/whyChooseData.js";
import { WhyChooseCard } from "./js/components/whyChooseCard";
import { articlesData } from "./js/util/articlesData.js";
import { ArticleCard } from "./js/components/articleCard";

const displayWhyChooseCards = () => {
  const cardsContainer = document.querySelector("#why-choose-container");

  whyChooseData.forEach((data) => {
    const card = WhyChooseCard(data);
    cardsContainer.appendChild(card);
  });
};

const displayArticlesCards = () => {
  const cardsContainer = document.querySelector("#articles-container");

  articlesData.forEach((data) => {
    const card = ArticleCard(data);
    cardsContainer.appendChild(card);
  });
};

const displayPageContent =()=>{
    displayWhyChooseCards()
    displayArticlesCards()
}

displayPageContent();
