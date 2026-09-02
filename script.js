const words=[
['achieve','/əˈtʃiːv/','đạt được','She worked hard to achieve her goal.'],
['advice','/ədˈvaɪs/','lời khuyên','My teacher gave me useful advice.'],
['afford','/əˈfɔːd/','có đủ khả năng chi trả','I cannot afford a new laptop yet.'],
['avoid','/əˈvɔɪd/','tránh','Try to avoid unnecessary mistakes.'],
['benefit','/ˈbenɪfɪt/','lợi ích','Exercise has many health benefits.'],
['challenge','/ˈtʃælɪndʒ/','thử thách','Learning a language is a challenge.'],
['confident','/ˈkɒnfɪdənt/','tự tin','She feels confident about the exam.'],
['decision','/dɪˈsɪʒən/','quyết định','It was a difficult decision.'],
['develop','/dɪˈveləp/','phát triển','I want to develop my English skills.'],
['environment','/ɪnˈvaɪrənmənt/','môi trường','We should protect the environment.'],
['experience','/ɪkˈspɪəriəns/','kinh nghiệm','This job gave me valuable experience.'],
['improve','/ɪmˈpruːv/','cải thiện','Reading can improve your vocabulary.'],
['increase','/ɪnˈkriːs/','tăng','We need to increase our productivity.'],
['instead','/ɪnˈsted/','thay vào đó','I walked instead of taking a taxi.'],
['manage','/ˈmænɪdʒ/','xoay xở, quản lý','Can you manage your time well?'],
['opportunity','/ˌɒpəˈtʃuːnəti/','cơ hội','This is a great opportunity to learn.'],
['prevent','/prɪˈvent/','ngăn chặn','Regular checks can prevent problems.'],
['require','/rɪˈkwaɪə/','yêu cầu','The course requires basic English.'],
['solution','/səˈluːʃən/','giải pháp','We need a simple solution.'],
['support','/səˈpɔːt/','hỗ trợ','Friends can support you when things are hard.']
];
let current=0;
const quiz=[
 ['She worked hard to ___ her goal.','achieve',['avoid','achieve','require','support']],
 ['I cannot ___ a new laptop yet.','afford',['afford','prevent','develop','manage']],
 ['Reading can ___ your vocabulary.','improve',['increase','improve','challenge','decide']],
 ['This is a great ___ to learn.','opportunity',['environment','decision','opportunity','advice']],
 ['We need a simple ___.','solution',['solution','benefit','experience','support']]
];
function renderWord(){const w=words[current];document.getElementById('wordCard').innerHTML=`<div class="word-number">WORD ${current+1} / ${words.length}</div><div class="word">${w[0]}</div><div class="ipa">${w[1]}</div><div class="meaning">${w[2]}</div><div class="example">“${w[3]}”</div>`;document.getElementById('prevBtn').disabled=current===0;document.getElementById('nextBtn').disabled=current===words.length-1;updateProgress()}
function updateProgress(){const p=Math.round((current/(words.length-1))*100);document.getElementById('progressBar').style.width=`${p}%`;document.getElementById('progressText').textContent=`${p}%`}
function renderQuiz(){document.getElementById('quiz').innerHTML=quiz.map((q,i)=>`<div class="question"><p>${i+1}. ${q[0]}</p>${q[2].map(o=>`<label class="option"><input type="radio" name="q${i}" value="${o}"> ${o}</label>`).join('')}</div>`).join('')}
document.getElementById('prevBtn').onclick=()=>{if(current>0){current--;renderWord()}};
document.getElementById('nextBtn').onclick=()=>{if(current<words.length-1){current++;renderWord()}};
document.getElementById('submitBtn').onclick=()=>{let score=0;quiz.forEach((q,i)=>{const a=document.querySelector(`input[name=q${i}]:checked`);if(a&&a.value===q[1])score++});const box=document.getElementById('result');box.hidden=false;box.textContent=`Your score: ${score}/${quiz.length} (${Math.round(score/quiz.length*100)}%). ${score===quiz.length?'Excellent! 🎉':'Review the words and try again.'}`};
renderWord();renderQuiz();
