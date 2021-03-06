module.exports = ({
  fullname,
  phone,
  description,
  email,
  address,
  birthday,
  gender,
  school,
  degree,
  rank,
  salary,
  foreignLanguage,
}) => {
  const today = new Date();
  return `
    <!doctype html>
    <html>
       <head>
          <meta charset="utf-8">
          <title>PDF Result Template</title>
          <style>
             .invoice-box {
             max-width: 800px;
             margin: auto;
             padding: 30px;
             border: 1px solid #eee;
             box-shadow: 0 0 10px rgba(0, 0, 0, .15);
             font-size: 16px;
             line-height: 24px;
             font-family: 'Helvetica Neue', 'Helvetica',
             color: #555;
             }
             .margin-top {
             margin-top: 50px;
             }
             .justify-center {
             text-align: center;
             }
             .invoice-box table {
             width: 100%;
             line-height: inherit;
             text-align: left;
             }
             .invoice-box table td {
             padding: 5px;
             vertical-align: top;
             }
             .invoice-box table tr td:nth-child(2) {
             text-align: right;
             }
             .invoice-box table tr.top table td {
             padding-bottom: 20px;
             }
             .invoice-box table tr.top table td.title {
             font-size: 45px;
             line-height: 45px;
             color: #333;
             }
             .invoice-box table tr.information table td {
             padding-bottom: 40px;
             }
             .invoice-box table tr.heading td {
             background: #eee;
             border-bottom: 1px solid #ddd;
             font-weight: bold;
             }
             .invoice-box table tr.details td {
             padding-bottom: 20px;
             }
             .invoice-box table tr.item td {
             border-bottom: 1px solid #eee;
             }
             .invoice-box table tr.item.last td {
             border-bottom: none;
             }
             .invoice-box table tr.total td:nth-child(2) {
             border-top: 2px solid #eee;
             font-weight: bold;
             }
             @media only screen and (max-width: 600px) {
             .invoice-box table tr.top table td {
             width: 100%;
             display: block;
             text-align: center;
             }
             .invoice-box table tr.information table td {
             width: 100%;
             display: block;
             text-align: center;
             }
             }
          </style>
       </head>
       <body>
          <div class="invoice-box">
             <table cellpadding="0" cellspacing="0">
                <tr class="top">
                   <td colspan="2">
                      <table>
                         <tr>
                            <td class="title"><img  src="https://i2.wp.com/cleverlogos.co/wp-content/uploads/2018/05/reciepthound_1.jpg?fit=800%2C600&ssl=1"
                               style="width:100%; max-width:156px;"></td>
                            <td>
                               Ng??y t???o: ${`${today.getDate()}. ${
                                 today.getMonth() + 1
                               }. ${today.getFullYear()}.`}
                            </td>
                         </tr>
                      </table>
                   </td>
                </tr>
                <tr class="information">
                   <td colspan="2">
                      <table>
                         <tr>
                            <td>
                               H??? v?? T??n: ${fullname}
                            </td>
                            <td>
                               S??? ??i???n tho???i: ${phone}
                            </td>
                         </tr>
                      </table>
                   </td>
                </tr>
                <tr class="heading">
                   <td class="justify-center">Th??ng tin c?? nh??n:</td>
                   <td class="justify-center">Th??ng tin t????ng ???ng:</td>
                </tr>
                <tr class="item">
                   <td>M?? t??? b???n th??n:</td>
                   <td>${description}</td>
                </tr>
                <tr class="item">
                   <td>?????a ch???:</td>
                   <td>${address}</td>
                </tr>
                <tr class="item">
                   <td>email:</td>
                   <td>${email}</td>
                </tr>
                <tr class="item">
                   <td>Ng??y sinh:</td>
                   <td>${birthday}</td>
                </tr>
                <tr class="item">
                   <td>Gi???i t??nh:</td>
                   <td>${gender}</td>
                </tr>
                <tr class="heading">
                   <td class="justify-center">Th??m h???c v???n:</td>
                   <td class="justify-center">Th??ng tin t????ng ???ng:</td>
                </tr>
                <tr class="item">
                   <td>Tr?????ng:</td>
                   <td>${school}</td>
                </tr>
                <tr class="item">
                   <td>B???ng c???p:</td>
                   <td>${degree}</td>
                </tr>
                <tr class="heading">
                   <td class="justify-center">C??ng vi???c mong mu???n:</td>
                   <td class="justify-center">Th??ng tin t????ng ???ng:</td>
                </tr>
                <tr class="item">
                   <td>C???p b???c mong mu???n:</td>
                   <td>${rank}</td>
                </tr>
                <tr class="item">
                   <td>M???c l????ng mong mu???n (USD/ th??ng):</td>
                   <td>${salary}$</td>
                </tr>
                <tr class="heading">
                   <td class="justify-center">Ngo???i ng???:</td>
                   <td class="justify-center">Th??ng tin t????ng ???ng:</td>
                </tr>
                <tr class="item">
                   <td>Ngo???i ng???:</td>
                   <td>${foreignLanguage}</td>
                </tr>
             </table>
             <br />
             <h1 class="justify-center">Total price: ${
               parseInt(description) + parseInt(email)
             }$</h1>
          </div>
       </body>
    </html>
    `;
};
