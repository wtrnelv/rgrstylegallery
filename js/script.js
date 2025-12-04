document.addEventListener("DOMContentLoaded", function () {

    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', function (e) {
            const txt = e.target.value.toLowerCase();
            document.querySelectorAll('.col .card').forEach(card => {
                const title = card.querySelector('.card-title').textContent.toLowerCase();
                card.closest('.col').style.display = title.includes(txt) ? '' : 'none';
            });
        });
    }

    const btn = document.getElementById('loadMoreBtn');
    const more = document.getElementById('moreStyles');
    if (btn && more) {
        btn.addEventListener('click', () => {
            more.style.display = 'flex';
            more.classList.add('fade-in');
            btn.style.display = 'none';
        });
    }

    const conv = document.getElementById('convertBtn');
    if (conv) {
        conv.addEventListener('click', () => {
            let r = +document.getElementById('rInput').value;
            let g = +document.getElementById('gInput').value;
            let b = +document.getElementById('bInput').value;
            if (isNaN(r)) return;
            let hex = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
            document.getElementById('hexResult').innerText = hex;
            document.getElementById('hexResult').style.backgroundColor = hex;
        });
    }
    document.querySelectorAll('.fav-btn').forEach(b => {
        b.addEventListener('click', function (e) {
            e.stopPropagation();
            this.querySelector('i').classList.toggle('text-danger');
            this.querySelector('i').classList.toggle('bi-heart-fill');
            this.querySelector('i').classList.toggle('bi-heart');
            document.getElementById('favCount').innerText = document.querySelectorAll('.bi-heart-fill.text-danger').length;
        });
    });

    let ex = false;
    document.addEventListener('mouseleave', e => {
        if (e.clientY < 0 && !ex) {
            new bootstrap.Modal(document.getElementById('exitModal')).show();
            ex = true;
        }
    });
});

document.querySelectorAll('.dropdown').forEach(d => {
    const menu = d.querySelector('.dropdown-menu');
    d.addEventListener('mouseenter', () => menu.classList.add('show'));
    d.addEventListener('mouseleave', () => menu.classList.remove('show'));
});

document.addEventListener('DOMContentLoaded', function () {
    const dateWidget = document.getElementById('dateWidget');

    if (dateWidget) {
        const now = new Date();

        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

        dateWidget.innerText = now.toLocaleDateString('uk-UA', options);
    }
});