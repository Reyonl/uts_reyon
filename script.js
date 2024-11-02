
function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('hidden');
}

function highlightMenu(menuItemId) {
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => item.classList.remove('bg-slate-700', 'text-white'));
    
    const selectedItem = document.getElementById(menuItemId);
    selectedItem.classList.add('bg-slate-700', 'text-white');
}

function showPage(pageId, menuItemId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.add('hidden'));

    document.getElementById(pageId).classList.remove('hidden');
    highlightMenu(menuItemId);
}

document.addEventListener('DOMContentLoaded', () => {
    showPage('dashboardPage', 'dashboardMenu');
});






    // Fungsi untuk load halaman karyawan
    function loadKaryawanPage() {
        fetch('karyawan.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('content').innerHTML = data;
            })
            .catch(error => console.error('Error loading page:', error));
    }

    // Contoh cara memanggil fungsi ini
    loadKaryawanPage();

