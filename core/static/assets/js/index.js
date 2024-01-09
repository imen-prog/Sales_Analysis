const total = document.getElementById('total-views');
const client = document.getElementById('client-views');
const country = document.getElementById('country-views');
const produits = document.getElementById('prod');

new Chart(total,{
    type: 'line' ,
    data : {
        labels: ['2021', '2022', '2023'],
        datasets: [{
            label: 'Total ventes',
            data: [14395.475, 37470.476, 20110.015],
            borderwidth: 1
        }]
    }, 
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
})
new Chart(country,{
    type: 'bar' ,
    data : {
        labels: ['USA', 'ESP', 'FRA', 'AUS','UK', 'ITA', 'FIN', 'NOR', 'SGP', 'CAN'],
        datasets: [{
            label: 'Total ventes',
            data: [928, 342, 314, 185, 144, 113, 92, 85, 79, 70]
            
        }]
    }, 
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }

        
    }
})
const chart = new Chart(produits, {
    type: 'bar',
    data: {
        labels: ['Motorcycles', 'Classic Cars', 'Trucks and Buses', 'Vintage Cars', 'Planes', 'Ships', 'Trains'],
        datasets: [{
            label: '2021',
            data: [3.4, 4.1, 3.8, 2.9, 3.2, 3.0, 2.6],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }, {
            label: '2022',
            data: [3.4, 4.0, 3.8, 3.2, 3.1, 3.0, 3.1],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }, {
            label: '2023',
            data: [4.1, 4.2, 3.7, 3.3, 3.3, 3.3, 3.1],
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            borderColor: 'rgba(153, 102, 255, 1)',
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


