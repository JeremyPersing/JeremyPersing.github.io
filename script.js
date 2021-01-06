let text = 'Jeremy Persing Web Development';
let i = 0;
let speed = 75;

const typeWriter = () => {
    if (i < text.length) {
        document.getElementById('name').innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
    else {
        document.getElementById('arrow').style = 'visibility: visible';
    }
}

