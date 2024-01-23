const toggle = document.getElementById('toggle-cbx');
const toggleLabel = document.getElementById('toggle-label');

toggle.addEventListener('change', (event) => {
    let checked = event.target.checked;
    document.body.classList.toggle('dark');

    if (checked) {
        toggleLabel.innerHTML = '<i class="fa-solid fa-sun"></i>';
        toggleLabel.style.color = 'yellow';
    } else {
        toggleLabel.innerHTML = '<i class="fa-solid fa-moon"></i>';
        toggleLabel.style.color = 'var(--color2)';
    }
})