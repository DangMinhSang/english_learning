const words = [
  ['achieve','/əˈtʃiːv/','đạt được','verb','She worked hard to achieve her goal.'],
  ['afford','/əˈfɔːrd/','có đủ tiền/khả năng','verb','I cannot afford a new laptop right now.'],
  ['allow','/əˈlaʊ/','cho phép','verb','My parents allow me to study late.'],
  ['benefit','/ˈbenɪfɪt/','lợi ích; có lợi','noun / verb','Regular exercise has many benefits.'],
  ['challenge','/ˈtʃælɪndʒ/','thử thách','noun / verb','Learning English is a useful challenge.'],
  ['decision','/dɪˈsɪʒən/','quyết định','noun','It was a difficult decision.'],
  ['develop','/dɪˈveləp/','phát triển','verb','Reading helps develop your vocabulary.'],
  ['environment','/ɪnˈvaɪrənmənt/','môi trường','noun','We should protect the environment.'],
  ['experience','/ɪkˈspɪəriəns/','kinh nghiệm; trải nghiệm','noun / verb','She has experience working with children.'],
  ['improve','/ɪmˈpruːv/','cải thiện','verb','I want to improve my speaking.'],
  ['increase','/ɪnˈkriːs/','tăng lên; tăng','verb / noun','Exercise can increase your energy.'],
  ['manage','/ˈmænɪdʒ/','xoay xở; quản lý','verb','Can you manage your time well?'],
  ['opportunity','/ˌɒpəˈtjuːnəti/','cơ hội','noun','This job is a great opportunity.'],
  ['participate','/pɑːˈtɪsɪpeɪt/','tham gia','verb','Students should participate in class.'],
  ['prepare','/prɪˈpeə/','chuẩn bị','verb','I need to prepare for the exam.'],
  ['require','/rɪˈkwaɪə/','yêu cầu','verb','The course requires basic English.'],
  ['solution','/səˈluːʃən/','giải pháp','noun','We need to find a solution.'],
  ['suggest','/səˈdʒest/','đề nghị; gợi ý','verb','I suggest taking a short break.'],
  ['support','/səˈpɔːt/','hỗ trợ','noun / verb','My friends support my goals.'],
  ['variety','/vəˈraɪəti/','sự đa dạng','noun','The website offers a variety of exercises.']
];
let index = 0;
const card = document.getElementById('wordCard');
const progressBar = document.getElementById('progressBar');
const progressText = document.getElementById('progressText');
function renderWord(){
  const [word,ipa,meaning,pos,example] = words[index];
  card.innerHTML = `<div class="word-number">WORD ${index+1} / ${words.length}</div><div class="word">${word}</div><div class="ipa">${ipa}</div><div class="meaning">${meaning}</div><div class="example"><strong>${pos}</strong> · “${example}”</div>`;
  const percent = Math.round(((index+1)/words.length)*100);
  progressBar.style.width = percent + '%';
  progressText.textContent = percent + '%';
  document.getElementById('prevBtn').disabled = index === 0;
  document.getElementById('nextBtn').textContent = index === words.length-1 ? 'Done ✓' : 'Next →';
}
document.getElementById('prevBtn').onclick = () => { if(index>0){index--;renderWord();} };
document.getElementById('nextBtn').onclick = () => { if(index<words.length-1){index++;renderWord();} else { document.querySelector('.quiz-card').scrollIntoView({behavior:'smooth'}); } };
const quizData = [
  ['What does “achieve” mean?',['đạt được','quên đi','thay đổi'],'đạt được','“Achieve” means to successfully reach a goal.'],
  ['Which word means “cơ hội”?',['benefit','opportunity','support'],'opportunity','“Opportunity” means a chance to do or get something.'],
  ['“I want to ___ my English.”',['improve','require','afford'],'improve','“Improve” means to make something better.'],
  ['Which word means “giải pháp”?',['solution','challenge','variety'],'solution','“Solution” means an answer to a problem.'],
  ['“Students should ___ in class.”',['participate','increase','manage'],'participate','“Participate” means to take part in an activity.']
];
document.getElementById('quiz').innerHTML = quizData.map((q,i)=>`<div class="question"><p>${i+1}. ${q[0]}</p>${q[1].map(o=>`<label class="option"><input type="radio" name="q${i}" value="${o}"> ${o}</label>`).join('')}<div id="f${i}" class="feedback"></div></div>`).join('');
document.getElementById('submitBtn').onclick = () => {
  let score=0;
  quizData.forEach((q,i)=>{
    const a=document.querySelector(`input[name=q${i}]:checked`);
    const feedback=document.getElementById(`f${i}`);
    if(a && a.value===q[2]){
      score++;
      feedback.className='feedback correct';
      feedback.innerHTML=`✅ <span class="answer">Correct.</span> ${q[3]}`;
    } else {
      feedback.className='feedback wrong';
      feedback.innerHTML=`❌ <span class="answer">Incorrect.</span> Correct answer: <span class="answer">${q[2]}</span>. ${q[3]}`;
    }
  });
  const result=document.getElementById('result');
  result.hidden=false;
  result.innerHTML=`You scored <strong>${score}/${quizData.length}</strong>. ${score===quizData.length?'Excellent! 🎉 Review the explanations once more.':'Review the feedback under each question and try again.'}`;
  result.scrollIntoView({behavior:'smooth',block:'center'});
};
renderWord();
