const container = document.querySelector('.container');
const input = document.getElementById('textInput');
const outputSection = document.getElementById('outputSection');
const resetBtn = document.getElementById('resetBtn');




const horrorSound = new Audio('Asset/sound.wav');


// Typing animation
input.addEventListener('input', (e) => {
    const char = e.data;
    if (!char) return; // ignore backspace

    const span = document.createElement('span');
    span.className = 'typing-effect';
    span.textContent = char;

    const rect = input.getBoundingClientRect();
    span.style.left = `${Math.random() * rect.width * 0.8}px`;
    span.style.top = `${Math.random() * 20}px`;

    input.parentElement.appendChild(span);
    setTimeout(() => span.remove(), 600);

    // Play horror sound on typing
    horrorSound.currentTime = 0;
    horrorSound.play();
});


const loader = document.getElementById('loader');

document.getElementById('generateBtn').addEventListener('click', () => {
    const text = input.value.trim();

    if (!text) {
        alert('Please enter text or number');
        return;
    }

    if (text.length > 30) {
        alert('Maximum 30 characters allowed. Please shorten your text.');
        return;
    }

    // Show loader and hide output
    loader.style.display = 'flex';
    outputSection.style.display = 'none';

    // After 5 seconds, generate codes and hide loader
    setTimeout(() => {
        loader.style.display = 'none';
        outputSection.style.display = 'flex';

        // Container animation
        container.classList.add('animate');
        setTimeout(() => container.classList.remove('animate'), 1000);

        // Generate QR Code
        const qrDiv = document.getElementById('qrcode');
        qrDiv.classList.remove('show');
        qrDiv.innerHTML = '';

        QRCode.toDataURL(text, { width: 150 }, (err, url) => {
            if (err) console.error(err);
            const img = document.createElement('img');
            img.src = url;
            qrDiv.appendChild(img);
            setTimeout(() => qrDiv.classList.add('show'), 50);
        });

        // Generate Barcode
        const barcode = document.getElementById('barcode');
        barcode.classList.remove('show');
        JsBarcode("#barcode", text, {
            format: "CODE128",
            lineColor: "#000",
            width: 2,
            height: 80,
            displayValue: true
        });
        setTimeout(() => barcode.classList.add('show'), 50);

    }, 1500); // 5 seconds delay
});


// Reset button
resetBtn.addEventListener('click', () => {
    input.value = '';
    document.getElementById('qrcode').innerHTML = '';
    document.getElementById('barcode').innerHTML = '';
    outputSection.style.display = 'none';
});


// Download button
document.getElementById('downloadBtn').addEventListener('click', () => {
    // Download QR Code
    const qrImg = document.querySelector('#qrcode img');
    if (qrImg) {
        const link = document.createElement('a');
        link.href = qrImg.src;
        link.download = 'qrcode(Mental).png';
        link.click();
    }

    // Download Barcode
    const barcodeSVG = document.getElementById('barcode');
    if (barcodeSVG) {
        const serializer = new XMLSerializer();
        const svgString = serializer.serializeToString(barcodeSVG);

        // Create canvas to draw SVG
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const img = new Image();

        const svgBlob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
        const url = URL.createObjectURL(svgBlob);

        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
            URL.revokeObjectURL(url);

            const link = document.createElement('a');
            link.href = canvas.toDataURL('image/png');
            link.download = 'barcode(Mental).png';
            link.click();
        };

        img.src = url;
    }
});
