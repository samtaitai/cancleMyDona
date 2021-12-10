var reasons = [
  {id:0, content:'낙선계정 조사하는 척만 하기'},
  {id:1, content:'비대위 엎고 사임 무르기'},
  {id:2, content:'댓글만 달아도 당기위에 제소하기'},
  {id:3, content:'타로 낄끼빠빠 못하기'},
  {id:4, content:'회의록 감추고 밀실정치하기'}
]

function showReason(num) {
  let result = reasons[num].content;
document.getElementById('display').innerHTML = result;
};

function pickReason(num) {
  let result = reasons[num].content;
  return result
}

function randomNumsShow(min, max) {
  const random = Math.floor(Math.random() * (max-min+1))+min;
   showReason(random);
}

function randomNumsPick(min, max) {
  const random = Math.floor(Math.random() * (max-min+1))+min;
  let result = pickReason(random);
  return result
  }

function shareTwitter() {
let shareText = '당비 중단은 당원의 권리!';
let shareUrl = 'https://www.womensparty.kr/member/login.php'

window.open("https://twitter.com/intent/tweet?text=" + shareText + "&url=" + shareUrl);
}

function test() {
  alert('옛다');
}
