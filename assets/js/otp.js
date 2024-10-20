// function sendOTp(){
//     const email = document.getElementById('email');
//     const otpverify = document.getElementsByClassName('otpverify')[0];


//     let otp_val = Math.floor(Math.random() * 10000);

//     let emailbody = '<h2>Your OTP is </h2>${otp_val}';

//     Email.send({
//     SecureToken : "2505652b-6305-44c7-b495-8065040a7665",
//     To : email.value,
//     From : "sadmanmd225@gmail.com",
//     Subject : "SHOP.CO Account verification OTP",
//     Body : emailbody,
// }).then(
//     if (message === "OK") {
//         alert("OTP sent to you email " + email.value);

//         otpverify.style.display = "flex";
//         const otp_inp = document.getElementById('otp_inp');
//         const otp_btn = document.gettElementById('otp-btn');

//         otp_btn.addEventListener('click' , () =>{
//             if(otp_inp.value == otp_val){
//                 alert("Email address Verified.....");
//             }
//             else{
//                 alert("Invalid OTP");
//             }
//         })
//     }
// );
// }


function sendOTP() {
    const email = document.getElementById('email');
    const otpverify = document.getElementsByClassName('otpverify')[0];

    let otp_val = Math.floor(Math.random() * 10000);
    let emailbody = `<h2>Your OTP is </h2>${otp_val}`; // Use backticks for template literals

    Email.send({
        SecureToken: "2505652b-6305-44c7-b495-8065040a7665",
        To: email.value,
        From: "sadmanmd225@gmail.com",
        Subject: "SHOP.CO Account verification OTP",
        Body: emailbody,
    }).then((message) => { // Add parameter 'message'
        if (message === "OK") {
            alert("OTP sent to your email " + email.value);

            otpverify.style.display = "flex";
            const otp_inp = document.getElementById('otp_inp');
            const otp_btn = document.getElementById('otp-btn'); // Fix typo 'getElementById'

            otp_btn.addEventListener('click', () => {
                if (otp_inp.value == otp_val) {
                    alert("Email address Verified.....");
                } else {
                    alert("Invalid OTP");
                }
            });
        }
    }).catch(error => {
        alert("Error sending OTP: " + error.message); // Handle potential errors
    });
}
