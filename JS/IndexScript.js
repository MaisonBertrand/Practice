document.addEventListener('DOMContentLoaded', function () {
    const fileListContainer = document.getElementById('file-list');

    // List of file names (you can fetch this dynamically or from a server)
    const fileNames = ['BreadcrumbTable.html', 'FormatCamera.html', 'mouseEvents.html'];

    fileNames.forEach(function (fileName) {
        const link = document.createElement('a');
        link.href = `./html/${fileName}`; // Set the path to your HTML files

        const cube = document.createElement('div');
        cube.classList.add('cube');
        cube.textContent = fileName.replace('.html', '');

        link.appendChild(cube);
        fileListContainer.appendChild(link);
    });
});