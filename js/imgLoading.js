/*
*
* Ormi Front-end Project
* 작성자 : 하태민
* 파일명 : imgLoading.js
* 생성일 : 2024년 1월 21일
*
* */


const imageList = document.querySelector(".image_list");
let pageToFetch = 1;

async function fetchImages(pageNum){
try {
const response = await fetch('https://picsum.photos/v2/list?page='+pageNum+'&limit=6');
if (!response.ok) {
throw new Error('네트워크 응답에 문제가 있습니다.');
}

const datas = await response.json();
console.log(datas);

makeImageList(datas);

} catch (error) {
console.error('데이터를 가져오는데 문제가 발생했습니다 :', error);
}
}

function makeImageList(datas){
datas.forEach((item)=>{
    imageList.innerHTML = imageList.innerHTML + "<li><img src="+ item.download_url +" alt=''></li>";
});
}
