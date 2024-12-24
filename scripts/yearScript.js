console.log('Hello Developer!');
console.log('Welcoming for Putra');

const divInput0 = document.getElementById("input0");
const divInput1 = document.getElementById("input1");
const nInput0 = document.getElementById("nickname");
const pA = document.getElementById("pAccess");
const pD = document.getElementById("pDenied");
const submit0 = document.getElementById("buttonNext0");
const submit1 = document.getElementById("buttonNext1");
const loading0 = document.getElementById("loading0");
const hobbyOption0 = document.getElementById("hobbyOption0");
const hobbyOption1 = document.getElementById("hobbyOption1");
const hobbyOption2 = document.getElementById("hobbyOption2");


    window.location.assign = "main.index";
    localStorage.setItem("byName", nInput0.value);
    localStorage.setItem("byOption0", hobbyOption0.value);
    localStorage.setItem("byOption1", hobbyOption1.value);
    localStorage.setItem("byOption2", hobbyOption2.value);

function buttonNext0() {
    if (nInput0.value !== "") {
        console.log('Data Name Saved!');
        localStorage.setItem("byName", nInput0.value);
        pA.style.display = "block";
        pD.style.display = "none";

        setTimeout(() => {
            console.log('Next Inputs..');
            divInput0.style.animation = "inputOut 1s linear";
            setTimeout(() => {
                divInput0.style.display = "none";
                setTimeout(() => {
                    divInput1.style.visibility = "visible";
                }, 500);
            }, 900);
        }, 3500);
    }
    else {
        console.log('This Input Is Blank!');
        pA.style.display = "none";
        pD.style.display = "block";

        setTimeout(() => {
            console.log('Fill The Blank Input..');
            pA.style.display = "none";
            pD.style.display = "none";
        }, 3500);
    }
}

function buttonNext1() {
    console.log('Choose Options Checked..');
    setTimeout(() => {
        if (hobbyOption0.value === "OptionHChoose" || hobbyOption1.value === "OptionHChoose" || hobbyOption2.value === "OptionHChoose") {
            console.log("Please Choose a Hobby.");
            alert("Ada Hobi Yang Kosong!");
        } 
        else {
            const checked = window.confirm('Kamu Yakin Dengan Pilihan Hobimu?');
            
            if (checked === true) {
                console.log('All Options Saved!'); 
                localStorage.setItem("byOption0", hobbyOption0.value);
                localStorage.setItem("byOption1", hobbyOption1.value);
                localStorage.setItem("byOption2", hobbyOption2.value);
                loading0.style.display = "block";
                submit1.style.display = "none";
                setTimeout(() => {
                    console.log('Saved All Options..');
                    divInput1.style.animation = "inputOut 1s linear";
                    setTimeout(() => {
                        divInput1.style.display = "none";
                    }, 900);
                }, 4700);
            } 
            else {
                console.log('Fill Again');
                hobbyOption0.value = "OptionHChoose";
                hobbyOption1.value = "OptionHChoose";
                hobbyOption2.value = "OptionHChoose";
            }
        }
    }, 1200);

}



// // Set tanggal target ke 1 Januari 2025
// const targetDate = new Date('2025-01-01T00:00:00'); // 1 Januari 2025, jam 00:00

// // Ambil tombolnya
// const button = document.getElementById('myButton');

// // Fungsi buat ngecek countdown
// function checkCountdown() {
//     const currentDate = new Date();
//     const timeDifference = targetDate - currentDate; // selisih waktu

//     if (timeDifference <= 0) {
//         // Kalo waktunya udah sampe target, enable tombol
//         button.disabled = false;
//         button.innerHTML = 'Tombol Aktif!'; // bisa ganti text sesuai keinginan
//     } else {
//         // Kalo belum, disable tombol dan kasih countdown text
//         button.disabled = true;
//         const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
//         const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//         const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
//         const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

//         button.innerHTML = `Tombol aktif dalam ${days} hari ${hours} jam ${minutes} menit ${seconds} detik`;
//     }
// }

// // Panggil fungsi pertama kali
// checkCountdown();

// // Set interval tiap detik untuk update countdown
// setInterval(checkCountdown, 1000);
