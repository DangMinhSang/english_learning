const answer = document.getElementById('answer');
const count = document.getElementById('count');
const feedback = document.getElementById('feedback');
const checkBtn = document.getElementById('checkBtn');

function wordCount(text) {
  return text.trim() ? text.trim().split(/\s+/).length : 0;
}

answer.addEventListener('input', () => {
  const n = wordCount(answer.value);
  count.textContent = `${n} ${n === 1 ? 'word' : 'words'}`;
});

checkBtn.addEventListener('click', () => {
  const text = answer.value.trim();
  const n = wordCount(text);
  const lower = text.toLowerCase();
  const checks = [
    ['word count', n >= 80 && n <= 100],
    ['clear opening', /one useful habit|useful habit I have|habit that helps/i.test(text)],
    ['reason', /because|helps me|useful|so that/i.test(lower)],
    ['result', /as a result|therefore|makes a difference|feel|waste less|improve/i.test(lower)],
    ['linking words', ['because','so','also','but','as a result'].filter(w => lower.includes(w)).length >= 3],
    ['sentence endings', /[.!?]$/.test(text)]
  ];
  const score = checks.filter(([, ok]) => ok).length;
  const missing = checks.filter(([, ok]) => !ok).map(([label]) => label);
  feedback.className = `feedback ${score >= 4 ? 'correct' : 'wrong'}`;
  feedback.innerHTML = score >= 4
    ? `✅ <span class="answer">Good draft.</span> You passed ${score}/6 checks. Now reread it slowly and correct any grammar or spelling mistakes.`
    : `📝 <span class="answer">Keep improving.</span> You passed ${score}/6 checks. Review: <span class="answer">${missing.join(', ')}</span>. Use the sample answer as a guide, then try again.`;
  feedback.scrollIntoView({ behavior: 'smooth', block: 'center' });
});
