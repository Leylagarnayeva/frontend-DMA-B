// // Task-01
// İkirəqəmli ədədi üçrəqəmli olana qədər artırın.
// İstifadəçidən ikirəqəmli ədəd daxil etməsini xahiş edin.
// Bu rəqəmi üçrəqəmli olana kimi 7 vahid artırın.
// Son dəyəri konsola çıxarın.

// let userNum = +prompt('iki regemli eded daxil edin')
// while (userNum <= 100){
//     userNum +=7;

// }
// consol.log(userNum);


// // Task-02
// Konsola N dəfə «I know how to use cycles» mesajı çıxaran proqram yazın.
// Proqram N ədədini istifadəçidən soruşur.

// let N = +prompt ("say daxil edin")
// let i = 0

// while(i<N){
//     console.log('I know how to use cycles');
//     i++
// }

// // Task-03
// Sonu 0 ilə bitən bütün üçrəqəmli ədədləri konsola çıxaran proqram yazın.

// let i = 10;
// let total = 0

// while (i<=99){
//     if(i%2 ==1){
//         total += i;
//     }
//     i++
//     console.log(total);
// }



// Task-04
// Bütün ikirəqəmli tək ədədlərin cəmini konsola çıxaran proqram yazın.


// let total= 0;

// for (let i = 10; i < 100; i++) {
//     if (i % 2 !== 0) { // 
//         total += i;
//     }
// }

// console.log("İki regemli tek regemlerin toplami:", total);


// // Task-05

// let userVal = +prompt("deyer daxil edin")
// let i = 100
// let total = 0

// while(i<1000){
//     if(i%userVal == 0){
// total +=1
//     }
//     i++
// }
// console.log(total);



// Task-07
// 10-a qədər bütün reqemlerin hasilin tapan proqram tərtib edin
// Alınan dəyəri konsola çıxarın.

// let hasil = 1;

// for (let i = 1; i <= 10; i++) {
//     hasil *= i;
// }

// console.log("1'den 10'a qeder olan reqemlerin hasili:", hasil);

// Task-08
// İstifadəçidən mətn daxil etməsini tələb edən və mətn elementlərini əks qaydada düzən proqram tərtib edin.

// let metn = prompt("Xahish edirik bir metn daxil edin :");
// let eksMetn = "";

// for (let i = metn.length - 1; i >= 0; i--) {
//     eksMetn += metin[i];
// }

// console.log("Metnin eks duzulmush hali :", eksMetn);


// Task-09
// Mətndə "." hərfinin ilk dəfə hansı indeksdə yerləşdiyini tapan proqram tərtib edin.

// let metn = prompt("Xahish olunur metn daxil edin:");
// let tapildi = false;
// let index = -1;

// for (let i = 0; i < metn.length; i++) {
//     if (metn[i] === ".") {
//         tapildi = true;
//         index = i;
//         break;
//     }
// }

// if (tapildi) {
//     console.log("Metnde '.' herfi ilk ", index, "indexinde tapildi.");
// } else {
//     console.log("Metnde '.' herfi tapilmadi.");
// }


// Task-10 (isNaN)
// Mətndə rəqəmlərin olub olmadığını yoxlayan proqram yazın.
// İstifadəçidən mətn daxil etməsini tələb edən və mətndə rəqəmlərin
// olub-olmaması barədə konsola mesaj çıxaran proqram tərtib edin.

// let metn;

// do {
//     metn = prompt("Xahish olunur metn daxil edin:");
//     if (metn === null) {
//         console.log("Emeliyyat legv edildi.");
//         break;
//     }
//     if (/\d/.test(metn)) {
//         console.log("Metnde regem tapilmadi.");
//         break;
//     } else {
//         console.log("Metnde sadece metn var.");
//     }
// } while (true);
