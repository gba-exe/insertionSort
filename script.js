const ctx = document.getElementById('myChart');

const numeros = []

const carlos = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: numeros,
        datasets: [{
            label: 'Array',
            data: numeros,
            borderWidth: 2,
            borderColor: 'white',
            backgroundColor: 'white',
            color: 'white'
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

function sort(valor) {
    numeros.length = 0
    for(j=0; j < valor; j++) {
        let aleatorio = Math.floor(Math.random() * valor);

        numeros.push(aleatorio);
    }
    carlos.update();
    setTimeout(()=>{insertionSort(numeros)}, 3000)
}


function insertionSort(arr) {
    for (i = 0; i < arr.length; i++) {
        let atual = arr[i];

        let j = i - 1;

        while (j > -1 && atual < arr[j]) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = atual;
    }

    carlos.update();
    return arr;
}




