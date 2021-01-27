let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
    };

for (const cat in statistics) {
    if(cat[0].toUpperCase() == 'R' || (statistics[cat]%2) == 1)
    {
        console.log(statistics[cat]);
    }
}
