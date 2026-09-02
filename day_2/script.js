const questions = [
  ['Why did Minh want to change his routine?', ['He wanted to sleep better and feel less tired.','He wanted to spend more time online.','He wanted to buy a new phone.'], 'He wanted to sleep better and feel less tired.'],
  ['What was Minh’s first rule?', ['No phone for thirty minutes before bedtime.','No books after dinner.','No social media during breakfast.'], 'No phone for thirty minutes before bedtime.'],
  ['What did he do instead of checking his phone?', ['He played games.','He prepared for the next day and read.','He went outside.'], 'He prepared for the next day and read.'],
  ['What changed after a few weeks?', ['He had less energy.','He slept less.','He fell asleep more easily and had more energy.'], 'He fell asleep more easily and had more energy.'],
  ['What lesson did Minh learn?', ['Only big plans can change habits.','Small daily actions can make a difference.','Habits cannot be changed.'], 'Small daily actions can make a difference.']
];
const quiz = document.getElementById('quiz');
quiz.innerHTML = questions.map((q,i)=>`<div class="question"><p>${i+1}. ${q[0]}</p>${q[1].map(o=>`<label class="option"><input type="radio" name="q${i}" value="${o}"> ${o}</label>`).join('')}</div>`).join('');
const progressBar=document.getElementById('progressBar');
const progressText=document.getElementById('progressText');
progressBar.style.width='20%'; progressText.textContent='20%';
document.getElementById('submitBtn').onclick=()=>{
  let score=0;
  questions.forEach((q,i)=>{const a=document.querySelector(`input[name=q${i}]:checked`); if(a&&a.value===q[2]) score++;});
  const result=document.getElementById('result'); result.hidden=false;
  result.innerHTML=`You scored <strong>${score}/${questions.length}</strong>. ${score>=4?'Great reading! 🎉':'Review the passage and try again.'}`;
  progressBar.style.width='100%'; progressText.textContent='100%';
  result.scrollIntoView({behavior:'smooth',block:'center'});
};
