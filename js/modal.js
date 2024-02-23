/*
*
* Ormi Front-end Project
* 작성자 : 하태민
* 파일명 : modal.js
* 생성일 : 2024년 1월 19일
*
* */


const open = document.getElementById('open');
const close = document.getElementById('close');
const modal = document.querySelector('.modal-wrapper');

open.onclick = () => {
    modal.style.display = 'flex';
};

close.onclick = () => {
    modal.style.display = 'none';
};