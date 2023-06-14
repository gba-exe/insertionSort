const ctx = document.getElementById('myChart');

const carlos = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: numeros,
        datasets: [{
            label: 'Array',
            data: numeros,
            borderWidth: 1
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

function insertionSort(arr) {
    for (i = 0; i < arr.length; i++) {
        let atual = arr[i];
        
        let j = i - 1;
        
        while (j > -1 && atual < arr[j]) {
            arr[j + 1] = arr[j];
            j--;
        }
        carlos.update();
        arr[j + 1] = atual;
    }
    
    return arr;
}
     setTimeout(() => {insertionSort(numeros)}, 5000)





