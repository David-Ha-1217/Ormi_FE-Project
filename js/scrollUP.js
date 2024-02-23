
// Ormi Front-end Project
// 작성자 : 하태민
// 파일명 : common.js
// 생성일 : 2024년 1월 18일

// footer > div.footer_cat > div.top_arrow
const $topBtn = document.querySelector(".img_hover");

$topBtn.onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
}