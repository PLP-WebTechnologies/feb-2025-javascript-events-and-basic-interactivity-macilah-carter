// 1. Event Handling
document.getElementById('clickBtn').addEventListener('click', () => {
    alert('Button was clicked!');
  });
  
  document.getElementById('hoverText').addEventListener('mouseenter', () => {
    document.getElementById('hoverText').textContent = 'You hovered!';
  });
  
  document.getElementById('keypressInput').addEventListener('keypress', (e) => {
    console.log(`You typed: ${e.key}`);
  });
  
  // Bonus: double-click or long press
  let timeout;
  const secret = document.getElementById('secretBox');
  
  secret.addEventListener('dblclick', () => {
    alert('Secret double-click activated! 🤫');
  });
  
  secret.addEventListener('mousedown', () => {
    timeout = setTimeout(() => {
      alert('Long press detected! 🤐');
    }, 1000);
  });
  secret.addEventListener('mouseup', () => clearTimeout(timeout));
  
  // 2. Interactive Elements
  document.getElementById('colorBtn').addEventListener('click', function () {
    this.style.backgroundColor = 'purple';
    this.textContent = 'Color Changed!';
  });
  
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const tabNumber = tab.getAttribute('data-tab');
      document.getElementById('tabContent').textContent = `This is content for Tab ${tabNumber}`;
    });
  });
  
  // 3. Form Validation
  const form = document.getElementById('myForm');
  const password = document.getElementById('password');
  const feedback = document.getElementById('feedback');
  
  password.addEventListener('input', () => {
    if (password.value.length < 8) {
      feedback.textContent = 'Password must be at least 8 characters';
    } else {
      feedback.textContent = '';
    }
  });
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (password.value.length < 8) {
      alert('Password too short!');
    } else {
      alert('Form submitted successfully!');
    }
  });
  