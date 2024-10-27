function data(){
    let curent_data = new Date();
    let year = curent_data.getFullYear();
    return year;
    console.log(year);
}
document.getElementById('data').innerHTML = data();

