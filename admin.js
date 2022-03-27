function format(d) {
  return `<table>
    <tr>
        <td>Client</td>
        <td> ${d.userName}</td>
    </tr>
    <tr>
        <td>Email</td>
        <td> ${d.userEmail}</td>
    </tr>
    <tr>
        <td>Year:</td>
        <td>${d.userYear}</td>
    </tr>
    <tr>
        <td>Date:</td>
        <td>${d.userDate}</td>
    </tr>
    <tr>
        <td>Hour:</td>
        <td>${d.hour}</td>
    </tr><tr>
        <td>Payment method:</td>
        <td>${d.payment}</td>
    </tr>
    <tr>
        <td>Order:</td>
        <td>${d.userOrder}</td>
    </tr>
    <tr>
        <td>ID:</td>
        <td>${d.id}</td>
    </tr><tr>
        <td>Total:</td>
        <td>${d.total}</td>
    </tr>
    <tr>
        <td>Products</td>
         ${d.products.map(function (product) {
           console.log(d.products);
           return `<ul>
                 <li>
                     Product:${product.name}
                 </li>
                 <li>Price: ${product.price}</li>
                 <li>Quantity: ${product.quantity}</li>
                 <li>Total: ${product.total}</li>
                </ul> `;
         })}
        </td>
    </tr>
    </table>`;
}
$(document).ready(function () {
  setTimeout(function () {
    var table = $("#tableAdmin").DataTable({
      data: finaldata,
      select: "single",
      columns: [
        {
          className: "details-control",
          orderable: false,
          data: null,
          dafaultContent: "",
          render: function () {
            return '<i style="hover:pointer" class="fa fa-plus-square" area-hidden="true"></i>';
          },
          width: "15px",
        },
        { data: "id" },
        { data: "userOrder" },
        { data: "userDate" },
        { data: "userName" },
        { data: "payment" },
        { data: "total" },
      ],
      order: [[1, "desc"]],
    });

    $("#tableAdmin tbody").on("click", "td.details-control", function () {
      var tr = $(this).closest("tr");
      var tdi = tr.find("i.fa");
      var row = table.row(tr);

      if (row.child.isShown()) {
        row.child.hide();
        tr.removeClass("shown");
        tdi.first().removeClass("fa-minus-square");
        tdi.first().addClass("fa-plus-square");
      } else {
        row.child(format(row.data())).show();
        tr.addClass("shown");
        tdi.first().removeClass("fa-plus-square");
        tdi.first().addClass("fa-minus-square");
      }
    });
  }, 4000);
});

const firebaseConfig = {
    apiKey: "AIzaSyAVnk5GjY15eRijQiM1-DE_hxMIK_lIUXE",
    authDomain: "ccl-project-24bed.firebaseapp.com",
    projectId: "ccl-project-24bed",
    storageBucket: "ccl-project-24bed.appspot.com",
    messagingSenderId: "460232947112",
    appId: "1:460232947112:web:0e59521a57a86fee57599d"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  var sales=[]
  firebaseConfig.firestore().collection("sales").onSnapshot(function(querySnapshot){
      querySnapshot.forEach(function(doc){
          console.log(doc.data())
          sales.push(doc.data())
      })
      finaldata=sales
  });


