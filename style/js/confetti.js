var maxParticleCount = 150;
var particleSpeed = 2;
var colors = ["#ff718d", "#ff8da1", "#ffa7b6"];

function createParticle(x, y) {
    const particle = document.createElement('div');
    particle.className = 'confetti';
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    particle.style.transform = `rotate(${Math.random() * 360}deg)`;
    
    document.body.appendChild(particle);

    const animation = particle.animate([
        {
            transform: `translate(${(Math.random() - 0.5) * 500}px, ${window.innerHeight}px) rotate(${Math.random() * 520}deg)`,
            opacity: 0
        }
    ], {
        duration: Math.random() * 3000 + 2000,
        easing: 'cubic-bezier(0, .9, .57, 1)',
        delay: Math.random() * 200
    });

    animation.onfinish = () => particle.remove();
}

function spawnConfetti() {
    for (let i = 0; i < maxParticleCount; i++) {
        setTimeout(() => {
            createParticle(Math.random() * window.innerWidth, -20);
        }, Math.random() * 2000);
    }
}