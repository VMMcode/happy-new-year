const envelope = document.getElementById('envelope');

let step = 0;

envelope.addEventListener('click', () => {
  switch (step) {

    // 1️⃣ переворот (back → front)
    case 0:
      envelope.classList.add('flipped');
      step++;
      break;

    // 2️⃣ flap открывается, появляется край письма
    case 1:
      envelope.classList.add('open');
      step++;
      break;

    // 3️⃣ письмо наполовину
    case 2:
      envelope.classList.add('half-open');
      step++;
      break;

    // 4️⃣ письмо полностью, конверт исчезает
    case 3:
      envelope.classList.add('full-open');
      step++;
      break;

     // 🔁 сброс всего
    case 4:
      envelope.className = 'envelope';
      step = 0;
      break;

    default:
      break;
  }
});
