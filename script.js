let chart;
let sequence = [];
let labels = [];
let currentN = 0;
let steps = 0;
let maxN = 0;
let isPaused = false;
let intervalId = null;
const speed = 400;

const ctx = document.getElementById('collatzChart').getContext('2d');
const bubbleTrail = document.getElementById('bubbleTrail');
const banner = document.getElementById('successBanner');

function initChart() {
    if (chart) chart.destroy();
    chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Value',
                data: sequence,
                borderColor: '#8b5cf6',
                backgroundColor: 'rgba(139, 92, 246, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.4,
                pointRadius: 0,
                pointHoverRadius: 6,
                pointHoverBackgroundColor: '#fff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: { 
                    beginAtZero: true, 
                    grid: { color: 'rgba(255,255,255,0.05)' },
                    ticks: { color: '#94a3b8', font: { family: 'Plus Jakarta Sans' } }
                },
                x: { display: false }
            },
            plugins: { legend: { display: false } },
            interaction: { intersect: false, mode: 'index' }
        }
    });
}

function createBubble(val) {
    const b = document.createElement('div');
    b.className = `bubble ${val % 2 === 0 ? 'even' : 'odd'}`;
    if (val === 1) b.classList.add('target');
    b.innerText = val.toLocaleString();
    return b;
}

function step() {
    if (isPaused || currentN < 1) return;

    if (currentN === 1) {
        clearInterval(intervalId);
        document.getElementById('pauseBtn').disabled = true;
        document.getElementById('startBtn').disabled = false;
        banner.style.display = 'block';
        document.getElementById('finalSteps').innerText = steps;
        return;
    }

    // Calculation
    if (currentN % 2 === 0) currentN /= 2;
    else currentN = (currentN * 3) + 1;

    steps++;
    if (currentN > maxN) maxN = currentN;
    sequence.push(currentN);
    labels.push(steps);

    // UI Updates
    document.getElementById('stat-current').innerText = currentN.toLocaleString();
    document.getElementById('stat-steps').innerText = steps;
    document.getElementById('stat-peak').innerText = maxN.toLocaleString();
    document.getElementById('stat-len').innerText = sequence.length;

    bubbleTrail.appendChild(createBubble(currentN));
    bubbleTrail.scrollTo({ left: bubbleTrail.scrollWidth, behavior: 'smooth' });
    chart.update();
}

// New Modal Elements
const errorModal = document.getElementById('errorModal');
const closeModal = document.getElementById('closeModal');

// Function to show modal
function showErrorMessage() {
    errorModal.style.display = 'flex';
}

// Function to hide modal
closeModal.addEventListener('click', () => {
    errorModal.style.display = 'none';
});

document.getElementById('startBtn').addEventListener('click', () => {
    const val = parseInt(document.getElementById('startInput').value);
    if (isNaN(val) || val <= 0) {
        showErrorMessage();
        return;
    }

    // Reset state for new run
    sequence = [val];
    labels = [0];
    currentN = val;
    steps = 0;
    maxN = val;
    isPaused = false;
    banner.style.display = 'none';
    bubbleTrail.innerHTML = '';
    bubbleTrail.appendChild(createBubble(val));

    initChart();
    document.getElementById('startBtn').disabled = true;
    document.getElementById('pauseBtn').disabled = false;
    document.getElementById('pauseBtn').innerText = "Pause";

    if (intervalId) clearInterval(intervalId);
    intervalId = setInterval(step, speed);
});

document.getElementById('pauseBtn').addEventListener('click', (e) => {
    isPaused = !isPaused;
    e.target.innerText = isPaused ? "Resume" : "Pause";
});

document.getElementById('resetBtn').addEventListener('click', () => {
    clearInterval(intervalId);
    location.reload();
});

// Initialize blank chart on load
initChart();

// Ensure chart resizes correctly on orientation change
window.addEventListener('resize', () => {
    if (chart) chart.resize();
});