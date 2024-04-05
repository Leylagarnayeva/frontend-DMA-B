

// Task-1
// let aboutObj={
//     username: "Leyla",
//     surname: "Garnayeva",
//     gender: "Female",
//     birthday: "03-08-1995"
// }

// console.log(aboutObj.birthday);

// task-2
// let aboutObj={
//     username: "Leyla",
//     surname: "Garnayeva",
//     gender: "Female",
//     birthday: "03-08-1995"
// }

// delete aboutObj.birthday;
// aboutObj.age = "28"

// console.log(aboutObj);


// Task-04
// Müştəri Kredit kartı ilə işləmək üçün obyekt yaradın.
// Müştərinin hesabı haqqında əsas məlumatları və onunla işləmə metodlarını əhatə edən client obyekti yaradın.
//     =>client obyekti yaradın.
//     Kredit kartı müştərisi üçün aşağıdakı xüsusiyyətlərə malik obyekt yaradın:
//     - Tam adı müştərinin (fullName).
//     - Kredit limiti (creditLimit).
//     - Cari balans (balans).
//     - Minimum ödənişin faizi (precentOfMinPayment).
//     =>Cari balans əldə etmək üçün getBalance metodu əlavə edin.
//     getBalance metodu, balans mənfi olarsa, müştərinin balansı və ya onun borcu haqqında bir mesaj qaytarır.
//     Metodun çağırılma nümunəsi:
//     console.log(client.getBalance()).
//     Mesaj nümunələri:
//     «Balansınız 3000»,
//     «Borcunuz 2000».
//      =>Minimum ödəniş məbləği üçün getMinPaymant metodunu əlavə edin.
//     getMinPaymant metodu borc məbləği və minimum ödəniş faizinə əsasən formalaşan minimum
//     ödəniş məbləği haqqında mesaj qaytarır.
//     Əgər borc yoxdursa, metod müvafiq mesajı qaytarır.
//     Metodun çağırılma nümunəsi:
//     console.log(client.getMinPaymant()).
//     Mesaj nümunələri:
//     «Minimum ödənişiniz 240»,
//     «Sizin borcunuz yoxdur».
//      =>Hesabdan pul silmək üçün withdraw metodu əlavə edin.
//     withdraw metodu cari balansı parametr kimi ötürülən pul məbləği qədər azaldır.
//     Mövcud vəsait kifayət deyilsə (cari balans və kredit limitinin cəmi), metod konsola müvafiq mesajı çıxarır.
// client.widthdraw(900)
//      =>Hesaba pul əlavə etmək üçün refill metodu əlavə edin.
//     refill metodu parametr kimi qəbul edilən məbləğ qədər balansı artırır.

// const creditCard = {
//     fullName: "Leyla",
//     creditLimit: 600,
//     balance: 345,
//     //   precentOfMinPayment: ,
//     getBalance: function () {
//       if (this.balance < 0) {
//         return Borcunuz ${this.balance};
//       } else {
//         return Balansınız ${this.balance};
//       }
//     },
//     getMinPaymant: function () {
//       if (this.precentOfMinPayment > 0) {
//         return Minimum ödənişiniz ${precentOfMinPayment};
//       } else {
//         return "Sizin borcunuz yoxdur";
//       }
//     },
//     withDraw: function (pay) {
//       if (this.balance > pay) {
//         this.balance -= pay;
//         return cari balans ${this.balance};
//       } else if (this.balance + this.creditLimit > pay) {
//         this.creditLimit -= pay - this.balance;
//         this.balance = 0;
//         return balansınız ${this.balance} kredit limitiniz ${this.creditLimit};
//       } else {
//         return ` balansınızda vəsait azdır \r\n Balansınız: ${this.balance + this.creditLimit} `;
//       }
//     },
//     refill: function (pay ) {
//       this.balance += pay;
//     },
//   };
  
//   creditCard.refill(345)
//   console.log(creditCard.getBalance());
//   console.log(creditCard.withDraw(4000));
