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
    let j = 0;
    let aleatorio = 0;
    while (j < valor) {
        aleatorio = Math.floor(Math.random() * valor);


        for (let i = 0; i < numeros.length; i++) {
            if (aleatorio == numeros[i]) {
                aleatorio = Math.floor(Math.random() * valor);
            }
        }

        numeros.push(aleatorio);
        j++;

    }
    carlos.update();
    setTimeout(()=>{insertionSort(numeros)}, 2000)
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




