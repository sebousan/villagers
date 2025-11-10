import './menu';
// import './toc';
import './video';


const modalElement = document.getElementById('modalVideo');
const videoModalElement = modalElement.getElementsByTagName('video')[0];
modalElement.addEventListener('hide.bs.modal', event => {
  videoModalElement.pause();
})
modalElement.addEventListener('shown.bs.modal', event => {
  videoModalElement.play();
})