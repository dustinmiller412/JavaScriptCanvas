const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

canvas.width = 700;
canvas.height = 900;

ctx.fillStyle = 'red';
ctx.fillRect(100, 100, 50, 150);
ctx.lineWidth = 10;
ctx.strokeStyle = 'blue';
ctx.strokeRect(100, 100, 50, 150);