window.addEventListener('load', function() {
    inicio()            
    let now = new Date().getTime();
    time_load_page = now - performance.timing.navigationStart
    document.getElementById('timeLoadPage').innerHTML = 'TEMPO PARA CARREGAMENTO DA PÁGINA: ' + time_load_page + ' (ms)';
    
    let output = ""

    switch(performance.navigation.type) {
        case PerformanceNavigation.TYPE_NAVIGATE:
            output += "Navigation";
            document.getElementById('welcome').innerHTML = 'SEJA BEM VINDO'
        break;
        case PerformanceNavigation.TYPE_RELOAD:
            output += "Reload";
            document.getElementById('welcome').innerHTML = 'SEJA BEM VINDO NOVAMENTE'
        break;
        case PerformanceNavigation.TYPE_BACK_FORWARD:
            output += "History";
            document.getElementById('welcome').innerHTML = 'OBRIGADO POR RETORNAR'
        break;
        default:
            output += "Unknown";
        break;
    }
    document.getElementById('navigationType').innerHTML = 'TIPO DE NAVEGAÇÃO: ' + output;

    console.log(performance.timing) // Objeto Timing
    console.log(performance.navigation) // Objeto Navigation
 });
 
var centesimas = 0;
var segundos = 0;
var minutos = 0;
var horas = 0;

function inicio () {
    control = setInterval(cronometro,10);
}

function cronometro () {
    if (centesimas < 99) {
        centesimas++;
        if (centesimas < 10) { 
            centesimas = "0"+centesimas 
        }
    }
    if (centesimas == 99) {
        centesimas = -1;
    }
    if (centesimas == 0) {
        segundos ++;
        if (segundos < 10) {
            segundos = "0"+segundos 
        }
        Segundos.innerHTML = ":"+segundos;
    }
    if (segundos == 59) {
        segundos = -1;
    }
    if ( (centesimas == 0)&&(segundos == 0) ) {
        minutos++;
        if (minutos < 10) {
            minutos = "0"+minutos 
        }
        Minutos.innerHTML = ":"+minutos;
    }
    if (minutos == 59) {
        minutos = -1;
    }
    if ( (centesimas == 0)&&(segundos == 0)&&(minutos == 0) ) {
        horas ++;
        if (horas < 10) {
            horas = "0"+horas 
        }
        Horas.innerHTML = horas;
    }
}