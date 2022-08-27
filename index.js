const ham = document.querySelector('.ham');
const menu = document.querySelector('.menu')
const lists = document.querySelectorAll('.list')


ham.addEventListener('click', function () {
  ham.classList.toggle('active');
  menu.classList.toggle('in-active');
})

// menu.addEventListener('click', (e) => {
//   ham.classList.toggle('active');
//   menu.classList.toggle('in-active');
// })

for (const list of lists) {
  list.addEventListener('click', function (event) {
    ham.classList.toggle('active');
    menu.classList.toggle('in-active');
  })
}