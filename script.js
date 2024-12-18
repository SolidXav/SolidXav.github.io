// Tło Three.js
const canvas = document.querySelector('#background');
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const starGeometry = new THREE.BufferGeometry();
const starMaterial = new THREE.PointsMaterial({ color: 0xffffff });
const starsCount = 1000;
const positions = [];

for (let i = 0; i < starsCount; i++) {
  positions.push((Math.random() - 0.5) * 2000);
  positions.push((Math.random() - 0.5) * 2000);
  positions.push((Math.random() - 0.5) * 2000);
}

starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
const stars = new THREE.Points(starGeometry, starMaterial);
scene.add(stars);

function animate() {
  requestAnimationFrame(animate);
  stars.rotation.x += 0.0005;
  stars.rotation.y += 0.0005;
  renderer.render(scene, camera);
}

animate();

window.addEventListener('DOMContentLoaded', (event) => {
  // Funkcje zmieniające język
  document.getElementById("polish-language").addEventListener("click", () => {
    setLanguage("pl");
  });

  document.getElementById("english-language").addEventListener("click", () => {
    setLanguage("en");
  });

  // Funkcja zmieniająca tekst na podstawie wybranego języka
  function setLanguage(language) {
    if (language === "pl") {
      document.querySelector('.header h1').textContent = "Xav";
      document.querySelector('.header p').textContent = "Ksawery Szkudlarski";
      
      const timelineItems = document.querySelectorAll('.timeline-item');
      timelineItems[0].querySelector('.details h3').textContent = "Serwery Gier";
      timelineItems[0].querySelector('.details ul').innerHTML = `
        <li>Zarządzanie serwerami gier, konfiguracja i optymalizacja</li>
        <li>Naprawa błędów i usprawnianie wydajności serwera.</li>
        <li>Zarządzanie bazami danych i statystykami graczy</li>
      `;
      timelineItems[1].querySelector('.details h3').textContent = "Liceum Ogólnokształcące";
      timelineItems[1].querySelector('.details ul').innerHTML = `
        <li>Rozwój umiejętności analitycznych.</li>
        <li>Zdobycie solidnej wiedzy z zakresu informatyki i matematyki.</li>
        <li>Umiejętność działania pod presją czasu.</li>
      `;
      timelineItems[2].querySelector('.details h3').textContent = "Turniej Trójgamiczny";
      timelineItems[2].querySelector('.details ul').innerHTML = `
        <li>Tworzenie gier w Unity przy użyciu C#.</li>
        <li>Praca zespołowa i zarządzanie projektem przez Git.</li>
        <li>Optymalizacja gier, testowanie i debugowanie.</li>
      `;
      document.querySelector('.contact h2').textContent = "Kontakt";
      document.querySelectorAll('.contact div')[0].innerHTML = '<img src="chat.png" alt="Mail" class="inline-icon"> <span>Email: szkudlarski.ksawery@gmail.com</span>';
      document.querySelectorAll('.contact div')[1].innerHTML = '<img src="headphone.png" alt="Discord" class="inline-icon"> <span>Discord: don_xavier</span>';
    } else if (language === "en") {
      document.querySelector('.header h1').textContent = "Xav";
      document.querySelector('.header p').textContent = "Ksawery Szkudlarski";
      
      const timelineItems = document.querySelectorAll('.timeline-item');
      timelineItems[0].querySelector('.details h3').textContent = "Game Servers";
      timelineItems[0].querySelector('.details ul').innerHTML = `
        <li>Managing game servers, configuration, and optimization.</li>
        <li>Bug fixing and improving server performance.</li>
        <li>Managing databases and player statistics.</li>
      `;
      timelineItems[1].querySelector('.details h3').textContent = "High School";
      timelineItems[1].querySelector('.details ul').innerHTML = `
        <li>Developing analytical skills.</li>
        <li>Gaining solid knowledge of computer science and mathematics.</li>
        <li>Ability to work under pressure.</li>
      `;
      timelineItems[2].querySelector('.details h3').textContent = "Turniej Trójgamiczny";
      timelineItems[2].querySelector('.details ul').innerHTML = `
        <li>Creating games in Unity using C#.</li>
        <li>Teamwork and project management using Git.</li>
        <li>Optimizing games, testing, and debugging.</li>
      `;
      document.querySelector('.contact h2').textContent = "Contact";
      document.querySelectorAll('.contact div')[0].innerHTML = '<img src="chat.png" alt="Mail" class="inline-icon"> <span>Email: szkudlarski.ksawery@gmail.com</span>';
      document.querySelectorAll('.contact div')[1].innerHTML = '<img src="headphone.png" alt="Discord" class="inline-icon"> <span>Discord: don_xavier</span>';
    }
  }
});
