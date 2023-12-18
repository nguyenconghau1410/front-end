// Handle onclick logic
function onclick_js() {
    var k = document.getElementById("k_C").value;
    var n = document.getElementById("n_C").value;
    var result = document.getElementById("result-C");
    if(Number.parseInt(k) > Number.parseInt(n)) {
        result.innerHTML = 
            'N phải lớn hơn hoặc bằng K';
        return
    }
    var C = combination(Number.parseInt(k), Number.parseInt(n));
    result.innerHTML = 
        'Tổ hợp chập ' + k + ' của ' + n + ' là ' + C;
}

function onclick1_js() {
    var k = document.getElementById("k_A").value;
    var n = document.getElementById("n_A").value;
    var result = document.getElementById("result-A");
    if(Number.parseInt(k) > Number.parseInt(n)) {
        result.innerHTML = 
            'N phải lớn hơn hoặc bằng K';
        
        return
    }
    var A = accordant(Number.parseInt(k), Number.parseInt(n));
    result.innerHTML = 
        'Chỉnh hợp chập ' + k + ' của ' + n + ' là ' + A;
}

function onclick2_js() {
    var n = document.getElementById("n").value;
    var P = permutation(Number.parseInt(n));
    var result = document.getElementById("result-P")
    result.innerHTML =
        'Kết quả ' + n + '! = ' + P; 
}

function permutation(n) {
    if(n == 1) return 1;
    return permutation(n - 1) * n;
}

function combination(k, n) {
    if(k == 0 || k == n) return 1;
    if(k == 1) return n;
    return combination(k - 1, n - 1) + combination(k, n - 1);
}

function accordant(k, n) {
    var res = 1
    for(var i = n - k + 1; i <= n; i++) {
        res *= i
    }
    return res
}

const P = document.querySelector('.permutation')
const C = document.querySelector('.combination')
const A = document.querySelector('.accordant')
const info = document.querySelector('.nav-toolbar')

const C_combination = document.querySelector('.C_combination')
const A_accordant = document.querySelector('.A_accordant')
const P_permutation = document.querySelector('.P_permutation')
const js_info = document.querySelector('.info-background')
const page = document.querySelector('.pagehome-content')

function showC() {
    C_combination.classList.add('open')
}

function closeC() {
    C_combination.classList.remove('open')
}

function showA() {
    A_accordant.classList.add('open')
}

function closeA() {
    A_accordant.classList.remove('open')
}

function showP() {
    P_permutation.classList.add('open')
}

function closeP() {
    P_permutation.classList.remove('open')
}

function showInfo() {
    js_info.classList.add('open')
}

function closeInfo() {
    js_info.classList.remove('open')
}

function closePage() {
    page.classList.add('open')
}

function displayC() {
    showC()
    closeA()
    closeP()
    closeInfo()
    closePage()
}

function displayA() {
    showA()
    closeC()
    closeP()
    closeInfo()
    closePage()
}

function displayP() {
    showP()
    closeA()
    closeC()
    closeInfo()
    closePage()
}

function displayInfo() {
    showInfo()
    closeP()
    closeA()
    closeC()
    closePage()
}
C.addEventListener('click', displayC)
A.addEventListener('click', displayA)
P.addEventListener('click', displayP)
info.addEventListener('click', displayInfo)
// C.addEventListener('click', showC)
// C.addEventListener('click', closeA)
// C.addEventListener('click', closeP)

// A.addEventListener('click', showA)
// A.addEventListener('click', closeC)
// A.addEventListener('click', closeP)

// P.addEventListener('click', showP)
// P.addEventListener('click', closeA)
// P.addEventListener('click', closeC)
//////////////////////////////////////////////////////////////

//Processing time display

// var date = new Date()
function time_header() {
    var month_js = document.getElementById("month-js")
    var year_js = document.getElementById("year-js")
    var month_js1 = document.getElementById("month-js-main")
    var year_js1 = document.getElementById("year-js-main")
    var date = new Date()
    month_js.innerHTML = monthArr[date.getMonth()]
    year_js.innerHTML =  `<    ${date.getFullYear()}    >`
    month_js1.innerHTML = monthArr[date.getMonth()]
    year_js1.innerHTML =  `<    ${date.getFullYear()}    >`
}

function displayTime() {
    var date = new Date()
    var hour = date.getHours();
    var minute = date.getMinutes();
    var seconds = date.getSeconds();
    if(hour.toString().length == 1) hour = '0' + hour
    if(minute.toString().length == 1) minute = '0' + minute
    if(seconds.toString().length == 1) seconds = '0' + seconds
    var timeString = `${hour}:${minute}:${seconds}`
    return timeString;
}

function displayDate() {
    var date = new Date()
    var dayString = dateArr[date.getDay()]
    var monthString = monthArr[date.getMonth()]
    var result = `${dayString} - ${monthString} ${date.getDate()}, ${date.getFullYear()}`;
    return result
}
var calendar_body = document.getElementById("calendar-body")
var calendar_body1 = document.getElementById("calendar-body-main")
function displayCar() {
    var date = new Date()
    calendar_body.innerHTML = ""
    calendar_body1.innerHTML = ""
    const DayOfMonth = [31, check(date.getFullYear()), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    var tmp = 0;
    for(var i = 0; i < 6; i++) {
        var row = document.createElement("tr")
        var day = new Date(date.getFullYear(), date.getMonth(), tmp).getDay()
        for(var j = 0; j < 7; j++) {
            if(tmp >= DayOfMonth[date.getMonth()]) break;
            var cell = document.createElement("th")
            if(day === j) {
                cellText = document.createTextNode(tmp + 1)
                cell.appendChild(cellText)
                if(tmp + 1 === date.getDate()) {
                    cell.style.background = "#9796f0"
                    cell.style.borderRadius = "25%"
                }
                ++tmp
                ++day
            }
            else {
                cellText = document.createTextNode("")
                cell.appendChild(cellText)
            }
            row.appendChild(cell)
        }
        var element = document.getElementById("page-js")
        var style = window.getComputedStyle(element)
        var element1 = document.getElementById("calendar-js")
        var style1 = window.getComputedStyle(element1)
        if(style.display !== "none") {
            calendar_body1.appendChild(row)
            element1.style.display = "none"
        }
        else {
            calendar_body.appendChild(row)
            element1.style.display = "inline-block"
        }

    }
}

const monthArr = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]



function check(year) {
    if(year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) return 29;
    return 29;
}


const dateArr = ["Monday", "Tuesday", "Webnesday", "Thurday", "Friday", "Saturday", "Sunday"]

time_header()
setInterval(function() {
    var resultTime = displayTime()
    var resultMonth = displayDate()
    document.getElementById("time-js").innerHTML = resultTime
    document.getElementById("date-js").innerHTML = resultMonth
    document.getElementById("time-js-main").innerHTML = resultTime
    document.getElementById("date-js-main").innerHTML = resultMonth
}, 1000)
setInterval(function() {
    displayCar()
}, 864e10)




////////////////////////////////////////////////////////////////


function icon() {
    var element = document.getElementById("calendar-title-js")
    var change = document.getElementById("calendar-main-js")
    if(window.innerWidth >= 740 && window.innerWidth < 1024) {
        element.innerHTML = '<i class="fa-solid fa-calendar"></i>'
    }

    if(window.innerWidth <= 740) {
        element.innerHTML = '<i class="fa-solid fa-calendar"></i>'
    }

    if(window.innerWidth >= 1024) {
        element.innerHTML = '<i class="fa-solid fa-calendar"></i>' + " Calendar"
    }
}

icon()
window.addEventListener('resize', icon)



