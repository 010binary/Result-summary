const button = document.getElementsByTagName("button");
const averageScore = document.querySelector("span");
const scoreReview = document.querySelector(".inside");

let badReview, goodReview;

badReview = "<span class=\"great\">opps</span>Your score is below average please try again";
goodReview = "<span class=\"great\">Great</span> You scored higher than 65% of the people who have taken these tests";
averageScore.textContent = "75"
if (averageScore.textContent >= 50 ) {
    scoreReview.innerHTML = goodReview;
}else {
    scoreReview.innerHTML = badReview;
    document.querySelector(".great").style.color = "red";
    scoreReview.style.color ="red";
    scoreReview.style.fontSize = "1.5rem"
}