const words = [
  ['achieve','/əˈtʃiːv/','đạt được','She worked hard to achieve her goal.'],
  ['afford','/əˈfɔːrd/','có đủ tiền/khả năng','I cannot afford a new laptop right now.'],
  ['allow','/əˈlaʊ/','cho phép','My parents allow me to study late.'],
  ['benefit','/ˈbenɪfɪt/','lợi ích; có lợi','Regular exercise has many benefits.'],
  ['challenge','/ˈtʃælɪndʒ/','thử thách','Learning English is a useful challenge.'],
  ['decision','/dɪˈsɪʒən/','quyết định','It was a difficult decision.'],
  ['develop','/dɪˈveləp/','phát triển','Reading helps develop your vocabulary.'],
  ['environment','/ɪnˈvaɪrənmənt/','môi trường','We should protect the environment.'],
  ['experience','/ɪkˈspɪəriəns/','kinh nghiệm; trải nghiệm','She has experience working with children.'],
  ['improve','/ɪmˈpruːv/','cải thiện','I want to improve my speaking.'],
  ['increase','/ɪnˈkriːs/','tăng lên; tăng','Exercise can increase your energy.'],
  ['manage','/ˈmænɪdʒ/','xoay xở; quản lý','Can you manage your time well?'],
  ['opportunity','/ˌɒpəˈtjuːnəti/','cơ hội','This job is a great opportunity.'],
  ['participate','/pɑːˈtɪsɪpeɪt/','tham gia','Students should participate in class.'],
  ['prepare','/prɪˈpeə/','chuẩn bị','I need to prepare for the exam.'],
  ['require','/rɪˈkwaɪə/','yêu cầu','The course requires basic English.'],
  ['solution','/səˈluːʃən/','giải pháp','We need to find a solution.'],
  ['suggest','/səˈdʒest/','đề nghị; gợi ý','I suggest taking a short break.'],
  ['support','/səˈpɔːt/','hỗ trợ','My friends support my goals.'],
  ['variety','/vəˈraɪəti/','sự đa dạng','The website offers a variety of exercises.']
];
let index = 0;
const card = document.getElementById('wordCard');
const progressBar = document.getElementById('progressBar');
const progressText = document.getElementById('progressText');
function renderWord(){
  const [word,ipa,meaning,example] = words[index];
  card.innerHTML = `<div class="word-number">WORD ${index+1} / ${words.length}</div><div class="word">${word}</div><div class="ipa">${ipa}</div><div class="meaning">${meaning}</div><div class="example">“${example}”</div>`;
  const percent = Math.round(((index+1)/words.length)*100);
  progressBar.style.width = percent + '%';
  progressText.textContent = percent + '%';
  document.getElementById('prevBtn').disabled = index === 0;
  document.getElementById('nextBtn').textContent = index === words.length-1 ? 'Done ✓' : 'Next →';
}
document.getElementById('prevBtn').onclick = () => { if(index>0){index--;renderWord();} };
document.getElementById('nextBtn').onclick = () => { if(index<words.length-1){index++;renderWord();} else { document.querySelector('.quiz-card').scrollIntoView({behavior:'smooth'}); } };
const quizData = [
  ['What does “achieve” mean?',['đạt được','quên đi','thay đổi'],'đạt được'],
  ['Which word means “cơ hội”?',['benefit','opportunity','support'],'opportunity'],
  ['“I want to ___ my English.”',['improve','require','afford'],'improve'],
  ['Which word means “giải pháp”?',['solution','challenge','variety'],'solution'],
  ['“Students should ___ in class.”',['participate','increase','manage'],'participate']
];
document.getElementById('quiz').innerHTML = quizData.map((q,i)=>`<div class="question"><p>${i+1}. ${q[0]}</p>${q[1].map(o=>`<label class="option"><input type="radio" name="q${i}" value="${o}"> ${o}</label>`).join('')}</div>`).join('');
document.getElementById('submitBtn').onclick = () => {
  let score=0;
  quizData.forEach((q,i)=>{ const a=document.querySelector(`input[name=q${i}]:checked`); if(a && a.value===q[2]) score++; });
  const result=document.getElementById('result'); result.hidden=false;
  result.innerHTML=`You scored <strong>${score}/${quizData.length}</strong>. ${score===quizData.length?'Excellent! 🎉':'Review the words and try again.'}`;
  result.scrollIntoView({behavior:'smooth',block:'center'});
};
renderWord();
