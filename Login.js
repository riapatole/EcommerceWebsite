var firebaseConfig = {
    apiKey: "AIzaSyAv64R3Hk7IbutDPD78rt8OZglXPaI-abA",
    authDomain: "ccl-project-3770e.firebaseapp.com",
    projectId: "ccl-project-3770e",
    storageBucket: "ccl-project-3770e.appspot.com",
    messagingSenderId: "857935630313",
    appId: "1:857935630313:web:d85bebddae1c16811c4578",
    measurementId: "G-W2M6BYYTYE"
  };

  firebase.initializeApp(firebaseConfig);

var x =document.getElementById("userName");
var p =document.getElementById("userPassword");

document.getElementById("formLogin").addEventListener("submit",(ee)=>{
    ee.preventDefault();
    console.log(x.value);
    console.log(p.value);
    firebase.auth().signInWithEmailAndPassword(x.value,p.value).then(()=>{
        swal.fire({
            position:'center',
            icon:'success',
            title:Welcome,
            text:'Access Granted',
    });
        x.value='';
        p.value='';
            setTimeout(()=>{
                loadPage();
            },3000);
    })
    .catch((error)=>{
        swal.fire({
            position:'center',
            type:'error',
            title:'Error',
            text:'Access Denied',

    });
        x.value='';
        p.value='';
    });
    function loadPage(){
        window.location.href="admin.html";
    }

});