// Task-01
//console.log  ("My name is Leyla");

//Task-02
//Adı name və adınızın mənimsədildiyi sabit dəyişən təyin edin.
//Bu dəyişənin dəyərini konsolda göstərin.
// const name="Leyla"
// console.log (name);

//Task-03
// Bu adlardan hansının dəyişən üçün istifadə oluna biləcəyini göstərin.
// Birdən çox variant seçin.

// $add
// c@rt

// Task-04
// Depodaki bütün kitabların ümumi dəyərini konsola çıxarın
// Kitab mağazasındaki kitabın qiyməti bookPrice dəyişənində
// və depodaki kitab sayı bookAmount dəyişənində saxlanılır.
// Depodaki bütün kitabların ümumi dəyərini konsola çıxarın.
// =>let bookPrice = 750;
// =>let bookAmount = 14;

// let bookPrice =750;
// let bookAmout=14;
// let total=bookPrice * bookAmout;
// console.log(total);

// Task-05
// Dəyişən dəyərini saniyə metrə çevirin və onu konsola çıxarın.
// kmhSpeed ​​dəyişəni avtomobilin sürətinin «saatda kilometrlərlə»
// dəyərini saxlayır. msSpeed ​​dəyişəni təyin edin və
// ona eyni sürət dəyərini «saniyədə metrə» çevirərək yazın.
// msSpeed dəyişəninin dəyərini konsola çıxarın.
// =>let kmhSpeed = 75;

// let kmhSpeed = 75;
// let kmhSpeedtotal=1000*75/3600;
// console.log(kmhSpeedtotal);

// Task-06
// İstifadəçinin doğum tarixini soruşan və bu günə qədər yaşadığı
// günlərin sayını göstərən proqram yazın.

// let userDate = prompt("Doğum tarixini yaz")
// let thisDate = 2024
// let totalDay = (thisDate - userDate)*365
// console.log("bu günə qədər yaşadığı günlərin sayı",totalDay);
// Task11-12 qalsin yazma

// Task-07
// Ədədlər üzərində əməliyyatları yerinə yetirin.
// num dəyişənində iki rəqəmli ədəd saxlanılır.
// Konsola çıxaran belə proqram yazın:
// - Bu ədədin beşinci dərəcə qüvvətə qaldırılmış vəziyyətini.
// - 3-ə bölünmədən qalan bu ədədin qalığını.

// 
// let num = 45;
// console.log(num**5)
// console.log(num%3)


// Task-08
// Konsola bu növ mesaj çıxarın “Sizin adınız [firstName] [lastName].
// Tanışlığımıza çox şadam!”
// firstName dəyişənində istifadəçinin adı,
// lastName — dəyişənində isə soyadı saxlanır.
// Konsola bu növ mesaj çıxarın “Sizin adınız [firstName] [lastName]. Tanışlığımıza çox şadam!”
// =>let firstName = 'Alan';
// =>let lastName = 'Turing';

// let firstName= ("Leyla")
// let lastName= ("sizin adiniz")
// console.log("Sizin adiniz",firstName,lastName,"Tanışlığımıza çox şadam")

// Task-09
// Şablon mətnlərdən istifadə edərək,
// konsola “Sizi bir daha görməyimizə şadıq, [firstName] [lastName]”.
// firstName dəyişənində istifadəçinin adı, lastName — dəyişənində isə soyadı saxlanır.


// let firstName= prompt("adinizi daxil edin")
// let lastName= prompt("soyadinizi daxil edin")
// alert("sizi gormeyimize cox sadiq " + firstName +" " +lastName)


// Task-10
// Addaki hərflərin sayını konsola çıxarın.
// fullName dəyişənində istifadəçinin tam adı saxlanılır. Addaki hərflərin sayını konsola çıxarın.
// Probel hərf olaraq sayılmır.
// let fullName = "Murad Orucov"

// let fullName= ("Leyla Garnayeva")

// console.log("fullName",)

// Task-15
// 12345 və 98765 ədədlərinin hasilindən alınan nəticənin 6-cı rəqəmini tapan proqram yazın

// let num1= 12345
// let num2= 98765

// let total = num1* num2+ ''
// console.log(total[5]);


let depozit = prompt("depoziti daxil edin")
let faiz = prompt("faizi daxil edin")
let date = prompt("ayi daxil edin")
let menfeet = (depozit*faiz)/100
let qazanc = date * menfeet
console.log(qazanc);
