function setName(){
    let name = document.getElementById("nameInput").value;
    if(name===""){
        alert("Nama harus diisi");
        return;
    }
    document.getElementById("welcome").innerText =
        "Hi " + name + ", Welcome To Our Website";
}

document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("messageText").value;

    if(name==="" || email==="" || phone==="" || message===""){
        alert("Semua field wajib diisi!");
        return;
    }

    document.getElementById("result").innerHTML =
        `<p><b>Nama:</b> ${name}</p>
         <p><b>Email:</b> ${email}</p>
         <p><b>Phone:</b> ${phone}</p>
         <p><b>Pesan:</b> ${message}</p>`;

    this.reset();
});