// 이미지 파일 목록
const images = ['bora.png', 'bora1.png'];
let currentImageIndex = 0;

// 이미지 요소 가져오기
const imageElement = document.getElementById('main-image');

// 클릭 이벤트 핸들러
imageElement.addEventListener('click', () => {
    
    // 페이드 아웃 효과
    imageElement.classList.add('hidden');
    
    // 효과가 끝나면 이미지 변경
    setTimeout(() => {
        // 다음 이미지로 변경
        currentImageIndex = (currentImageIndex + 1) % images.length;
        imageElement.src = images[currentImageIndex];
        
        // 페이드 인 효과
        imageElement.classList.remove('hidden');
    }, 500); // 페이드 아웃 시간과 동일해야 함
});
