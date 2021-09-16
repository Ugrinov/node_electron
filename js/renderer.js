const remote= require('@electron/remote')
const math = require("mathjs");
const wnd = remote.getCurrentWindow()


errorMessage = "Введите число"
document.addEventListener('DOMContentLoaded', (event) => {


    let form = document.querySelector('form');
    let input = document.querySelector('.text');
    let number = document.querySelector('.number')
    form.addEventListener('submit', () => {

        try {
            let number_sqrt = (math.sqrt((math.bignumber(input.value))))
            alert(math.round(number_sqrt, number.value));
        } catch (error) {
            try {
                let number_sqrt = math.sqrt(math.complex(input.value));
                alert(math.round(number_sqrt, number.value));
            } catch (error) {
                alert(errorMessage);
            }

        }
    })
    let btnLng = document.querySelector('.btn-lng');
    let labelSqrt = document.querySelector('label[for="text"]')
    let labelRound = document.querySelector('label[for="number"]')
    let btnSbm = document.querySelector('.btn-sbm')
    let copyright = document.querySelector('.copyright')
    let text = document.querySelector('.text')

    btnLng.addEventListener('click', () => {
        if (!labelSqrt.classList.contains('en'))
        {
            labelSqrt.classList.toggle('en')
            labelSqrt.innerHTML = "Find the square root"

            btnSbm.classList.toggle('en')
            btnSbm.innerHTML = "Solve"

            labelRound.classList.toggle('en')
            labelRound.innerHTML = "Round"

            copyright.classList.toggle('en')
            copyright.innerHTML = "<i class=\"fa fa-copyright\" aria-hidden=\"true\"></i> Ugrinov, Kulizhskii, Glavatskikh, Mitiushkina, 2021"

            text.setAttribute('placeholder','number')
            errorMessage = "Enter the number!";
        }
        else {
            labelSqrt.classList.toggle('en')
            labelSqrt.innerHTML = "Найти квадратный корень"

            labelRound.classList.toggle('en')
            labelRound.innerHTML = "Округление"

            btnSbm.classList.toggle('en')
            btnSbm.innerHTML = "Решить"

            copyright.classList.toggle('en')
            copyright.innerHTML = "<i class=\"fa fa-copyright\" aria-hidden=\"true\"></i> Угринов, Кулижский, Главатских, Митюшкина, 2021"

            text.setAttribute('placeholder','число')
            errorMessage = "Введите число!";
        }
    });

    let btnMin = document.querySelector('.btn-min');
    let btnMax = document.querySelector('.btn-max');
    let btnClose = document.querySelector('.btn-close');
    let iconBtnMax = btnMax.children[0];
    btnMin.addEventListener('click', () => {
        wnd.minimize();
    });

    btnMax.addEventListener('click', () => {

        if(!wnd.isMaximized()) {
            wnd.maximize();
            iconBtnMax.classList.remove('fa-window-maximize');
            iconBtnMax.classList.add('fa-window-restore');
        }
        else {
            wnd.unmaximize();
            iconBtnMax.classList.add('fa-window-maximize');
            iconBtnMax.classList.remove('fa-window-restore');
        }
    });

    btnClose.addEventListener('click', () => {
        wnd.close();
    });
});




