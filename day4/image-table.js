
function handleFile(event) {
    if(event) event.preventDefault();

    let file = document.getElementById('fileInput').files[0]

    // const file = event.target.files[0];
    if (file && file.type === 'text/csv') {
        const reader = new FileReader();
        reader.onload = function(e) {
            const csvData = e.target.result;
            parseCSV(csvData);
        };
        reader.readAsText(file);
    } else {
        alert('Please upload a valid CSV file.');
    }
}

function parseCSV(data) {
    const lines = data.split('\n');
    const tableBody = document.querySelector('#imageTable tbody');
    tableBody.innerHTML = '';
    console.log(lines)

    lines.forEach((line) => {
        const [imageUrl] = line.split(',');
        if (imageUrl) {
            const row = document.createElement('tr');
            
            // Create image cell
            const imgCell = document.createElement('td');
            const img = document.createElement('img');
            img.src = imageUrl;
            img.onerror = () => img.alter ='image not found';
            imgCell.appendChild(img);
            
            // Create download button cell
            const btnCell = document.createElement('td');
            const button = document.createElement('button');
            button.textContent = 'Download';
            button.onclick = () => downloadImage(imageUrl);
            btnCell.appendChild(button);
            
            row.appendChild(imgCell);
            row.appendChild(btnCell);
            tableBody.appendChild(row);
        }
    });
}

function downloadImage(url) {
    const link = document.createElement('a');
    link.href = url;
    document.body.appendChild(link);
    link.click();
}
