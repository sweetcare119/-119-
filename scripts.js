
const reviews = [
  { name: "김**님", short: "정말 섬세하고 따뜻한 케어였어요!", detail: "처음에는 남자 관리사라 걱정했는데, 부산 토닥이 스타일로 여성전용마사지가 이렇게 만족스러울 수 있구나 싶었어요. 정중하고 조심스러운 케어에 감동받았습니다. 재방문 의사 100%입니다." },
  { name: "이**님", short: "공간도 힐링 그 자체! 실력도 최고였어요💆‍♀️", detail: "청결하고 아늑한 부산 여성전용마사지 중 가장 정성스러운 공간이었어요. 관리사님도 친절하고 섬세해서 다음엔 친구랑 함께 올 생각이에요." },
  { name: "박**님", short: "말이 필요 없는 힐링 케어! 정말 감동이에요😊", detail: "부산토닥이 같은 감성으로 마사지를 받을 수 있어서 진짜 만족했어요. 프라이빗한 분위기 덕분에 혼자서도 편하게 힐링할 수 있었어요." },
  { name: "최**님", short: "걱정은 사라지고 편안함만 가득했어요✨", detail: "이곳은 부산에서도 여성전용이라 믿고 찾을 수 있었어요. 마사지 하나하나가 정성스럽고 따뜻해서 다음에도 꼭 예약할 거예요." },
  { name: "정**님", short: "또 받고 싶어지는 마법 같은 손길💖", detail: "여성전용마사지라 그런지 케어 하나하나가 정말 세심하고 믿음이 갔어요. 마음이 안정되고 자존감도 회복되는 기분이었어요." },
  { name: "한**님", short: "세심한 터치에 감탄했습니다", detail: "따뜻하고 정중한 분위기 속에서 섬세한 케어를 받았어요. 다음날 아침 몸이 가볍게 풀려서 정말 좋았어요. 감사합니다💫" },
  { name: "윤**님", short: "정성어린 케어에 몸과 마음이 편안했어요", detail: "부산에서 여성전용마사지를 찾는다면 이곳을 추천하고 싶어요. 서비스도 응대도 만족스러웠고 안심하고 이용할 수 있었어요." },
  { name: "강**님", short: "프라이빗한 분위기에서 최고의 만족🥰", detail: "조용하고 프라이빗한 환경에서 편하게 받을 수 있었어요. 예약부터 마무리까지 모든 게 매끄럽고 배려 깊었어요." },
  { name: "배**님", short: "매 순간 정성이 느껴졌어요", detail: "마사지뿐 아니라 말투, 분위기, 향기까지 섬세하게 신경 쓴 느낌이에요. 토닥이는 듯한 케어에 진심으로 만족했습니다." },
  { name: "유**님", short: "가격 이상의 서비스에 감동이에요✨", detail: "여성전용샵이라서인지 배려가 느껴졌고, 처음부터 끝까지 정성 가득한 응대 덕분에 기분 좋게 마무리했어요. 다음에도 또 이용할 거예요!" },
  { name: "서**님", short: "혼자만 알고 싶은 곳이에요☺️", detail: "마사지 기술도 훌륭하지만, 무엇보다 사소한 부분까지 신경 써주는 태도에서 믿음이 갔어요. 자주 이용할 것 같아요." }
];

const reviewsPerPage = 5;
let currentPage = 1;

function displayReviews(page) {
  const container = document.getElementById("reviewContainer");
  container.innerHTML = "";
  const start = (page - 1) * reviewsPerPage;
  const end = start + reviewsPerPage;

  reviews.slice(start, end).forEach((r) => {
    const summary = document.createElement("div");
    summary.className = "review-summary";
    summary.innerHTML = `<strong style='color:#d6336c;'>${r.name}</strong> &nbsp;|&nbsp; <span style='color:#444;'>${r.short}</span>`;
    summary.onclick = function () {
      detail.style.display = detail.style.display === 'block' ? 'none' : 'block';
    };

    const detail = document.createElement("div");
    detail.className = "review-detail";
    detail.innerText = r.detail;

    container.appendChild(summary);
    container.appendChild(detail);
  });
}

function setupPagination() {
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);
  const pagination = document.getElementById("pagination");
  pagination.innerHTML = "";

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.innerText = i;
    btn.className = i === currentPage ? "active" : "";
    btn.onclick = function () {
      currentPage = i;
      displayReviews(currentPage);
      setupPagination();
    };
    pagination.appendChild(btn);
  }
}

displayReviews(currentPage);
setupPagination();
