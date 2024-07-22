// 이미지 파일 목록
const images = [
    'img/bora.png',
    'img/bora1.png',
    'img/bora2.png',
    'img/bora3.png',
    'img/bora4.png',
    'img/bora5.png',
    'img/bora6.png',
    'img/bora7.png'
];

let currentImageIndex = 0;
const lastImages = []; // 최근에 표시된 이미지 인덱스를 저장

// 이미지 요소 가져오기
const imageElement = document.getElementById('main-image');

// 랜덤 인덱스 생성 함수
function getRandomIndex(max) {
    return Math.floor(Math.random() * max);
}

// 최근에 표시된 이미지를 업데이트
function updateLastImages(index) {
    lastImages.push(index);
    if (lastImages.length > 3) {
        lastImages.shift(); // 배열의 첫 번째 요소를 제거하여 최근 3개의 인덱스만 유지
    }
}

// 클릭 이벤트 핸들러
imageElement.addEventListener('click', () => {
    // 페이드 아웃 효과
    imageElement.classList.add('hidden1');
    
    // 효과가 끝나면 이미지 변경
    setTimeout(() => {
        let newIndex;
        do {
            newIndex = getRandomIndex(images.length);
        } while (newIndex === currentImageIndex || lastImages.includes(newIndex)); // 현재 이미지와 최근 3개의 이미지와 같은 경우를 방지

        // 이미지 소스 변경
        currentImageIndex = newIndex;
        imageElement.src = images[currentImageIndex];
        
        // 이미지가 변경된 후 클릭 애니메이션 제거
        setTimeout(() => {
            imageElement.classList.remove('hidden1');
        }, 10); // 10ms 대기 후 클래스를 제거하여 확대 효과 적용
        
        // 최근에 표시된 이미지 인덱스 업데이트
        updateLastImages(currentImageIndex);
    }, 500); // 페이드 아웃 시간과 동일해야 함
});
