/* Swal.fire(
  'The Internet?',
  'That thing is still around?',
  'question'
) */
/* Swal.fire({
  title: 'Error!',
  text: 'Do you want to continue?',
  icon: 'error',
  confirmButtonText: 'Cool'
})
 */

const btn = document.querySelector("#myBtn");
/* btn.addEventListener("click", () => {

  //el agregado del producto al carrito


  Swal.fire({
    title: "Genial!",
    text: "Haz agregado al carrito!",
    icon: "success",
    confirmButtonText: "Cool",
  });
});
 */
/* btn.addEventListener("click", () => {
  Swal.fire({
    title: "Error!",
    text: "Error inesperado",
    icon: "error",
    confirmButtonText: " =( ",
  });
}); */

/* btn.addEventListener("click", () => {
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Your work has been saved",
    showConfirmButton: false,
    timer: 5000,
  });
});
 */

/* btn.addEventListener("click", () => {
  Swal.fire({
    title: "Sweet!",
    text: "Modal with a custom image.",
    imageUrl: "https://unsplash.it/400/200",
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: "Custom image",
  });
}); */
/* btn.addEventListener("click", () => {
  Swal.fire({
    title: "Sweet!",
    text: "Modal with a custom image.",
    imageUrl: "https://unsplash.it/400/200",
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: "Custom image",
    background: 'red'
  });
});
 */
/* btn.addEventListener('click', () => {
   
  Swal.fire({
      title: 'Está seguro de eliminar el producto?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, seguro',
      cancelButtonText: 'No, no quiero'
  }).then((result) => {

      if (result.isConfirmed) {
          Swal.fire({
              title: 'Borrado!',
              icon: 'success',
              text: 'El archivo ha sido borrado'
          })
      }
  })
}) */

/* btn.addEventListener("click", () => {
  Toastify({
    text: "Accede a nuestra promoción",
    duration: 1000,
  }).showToast();
}); */

/* btn.addEventListener("click", () => {
  Toastify({
    text: "Probando toast!",
    duration: 3000,
    style: {
      background: "linear-gradient(to left, #00b09b, #96c92d)",
    },
  }).showToast();
}); */

/* btn.addEventListener("click", () => {
  Toastify({
    text: "Probando toast!",
    duration: 3000,
    className: "color",
  }).showToast();
});
 */

/* btn.addEventListener("click", () => {
  Toastify({
    text: "Probando toast!",
    duration: 3000,
    onClick: () => {
      Toastify({
        text: "Clickeaste un Toast!",
        duration: 1500,
      }).showToast();
    },
  }).showToast();
}); */

/* btn.addEventListener("click", () => {
  Toastify({
    text: "Click aquí para ir a Coder!",
    duration: 3000,
    destination: "https://www.coderhouse.com",
  }).showToast();
}); */

const DateTime = luxon.DateTime;

/* const dt = DateTime.local(2022, 1, 25, 12, 10);
console.log(dt); */
/* const dt = DateTime.now()

console.log(dt); */
/* let dt = DateTime.fromISO("2022-8-12");

console.log(dt); */
/* 
const now = DateTime.now()
console.log( now.toString() ) */

/* const dt = DateTime.now();
console.log(dt.year);
console.log(dt.month);
console.log(dt.day);
console.log(dt.second);
console.log(dt.weekday); */
  
/* const dt = DateTime.now();

console.log( dt.zoneName ) 
console.log( dt.daysInMonth ) */

/* const dt = DateTime.now();

console.log(dt.toLocaleString() );
console.log(dt.toLocaleString(DateTime.DATE_FULL));
console.log(dt.toLocaleString(DateTime.TIME_SIMPLE) );
console.log(dt.setLocale('en').toLocaleString(DateTime.DATE_FULL)); */


 
/* const dt = DateTime.now();

console.log( dt.toLocaleString(DateTime.DATETIME_SHORT) )
// 25/1/2022 14:21

const suma = dt.plus({ hours: 5, minutes: 15 })
console.log(suma.toLocaleString(DateTime.DATETIME_SHORT))
// 25/1/2022 19:36

const resta = dt.minus({ month: 2, days: 10 })
console.log(resta.toLocaleString(DateTime.DATETIME_SHORT))
// 15/11/2021 14:21 */

const Interval = luxon.Interval

const now = DateTime.now()
const later = DateTime.local(2022, 4, 24)
const i = Interval.fromDateTimes(now, later)

console.log( i.length('days') )
console.log( i.length('hours') )
console.log( i.length('minutes') )