function bukaPop(){
    let form = document.getElementsByClassName("form-tambah")[0];
    let container = document.getElementsByClassName("container")[0];

    container.className = "container_blur";
    form.style.display = "block";
}

function tutupPop(){
    let form = document.getElementsByClassName("form-tambah")[0];
    let container = document.getElementsByClassName("container_blur")[0];

    container.className = "container";
    form.style.display = "none";
}

function tambahData() {
    let kegiatan = document.getElementById("kegiatan").value;
    let tanggal = document.getElementById("tanggal").value;
    let waktu = document.getElementById("waktu").value;
    
    let table = document.getElementsByClassName("table")[0];
    let row = document.createElement('tr');

    if ((kegiatan =="") || (tanggal == "") || (waktu == "")) {
        alert("Input Tidak boleh kosong");
    } else {
        tambahBaris(kegiatan, row);
        tambahBaris(tanggal, row);
        tambahBaris(waktu, row);
        let tombol = document.createElement('td');
        tombol.innerHTML = `<button class="tombol-hapus" type="button" onclick="hapusData(this)">Hapus</button>`;
        row.appendChild(tombol);
        table.appendChild(row);
        tutupPop();
    };
};

function tambahBaris (data, row) {
    let table_data = document.createElement('td');
    let text_node = document.createTextNode(data);

    table_data.appendChild(text_node);
    row.appendChild(table_data);
};

function hapusData(button){
    let baris = button.parentNode.parentNode
    baris.parentNode.removeChild(baris)
}