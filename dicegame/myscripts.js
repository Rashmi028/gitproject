var ran=Math.random();
ran=ran*6;
ran=Math.floor(ran)+1;
// console.log(ran);
document.querySelector(".dice .img1").setAttribute("src", `CD:\New folder (2)\WEB DEV\CSS\dicegame\dice${ran}.png`);
document.querySelector(".dice .img2").setAttribute("src", `CD:\New folder (2)\WEB DEV\CSS\dicegame\dice${ran}.png`);