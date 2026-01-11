// service-worker.js 파일을 프로젝트 폴더에 생성하고 아래 코드를 추가합니다.

// 서비스 워커 등록
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('service-worker.js')
        .then(registration => {
          console.log('서비스 워커 등록 완료:', registration.scope);
        })
        .catch(error => {
          console.log('서비스 워커 등록 실패:', error);
        });
    });
  }
  