const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] },
];

dogs.forEach(dog => {
    dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28);
});

const sarahsDog = dogs.find(dog => dog.owners.includes('Sarah'));
const eatingStatus = sarahsDog.recommendedFood > sarahsDog.curFood ? "eating too little" : "eating too much";
console.log(`Sarah's dog is ${eatingStatus}.`);

const ownersEatTooMuch = dogs.filter(dog => dog.recommendedFood < dog.curFood).flatMap(dog => dog.owners);
const ownersEatTooLittle = dogs.filter(dog => dog.recommendedFood > dog.curFood).flatMap(dog => dog.owners);

console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

const dogEatingRecommendedAmount = dogs.some(dog => dog.recommendedFood === dog.curFood);
console.log(`Any dog eating recommended amount: ${dogEatingRecommendedAmount}`);

const dogEatingOkayAmount = dogs.some(dog => {
    const lowerLimit = dog.recommendedFood * 0.9;
    const upperLimit = dog.recommendedFood * 1.1;
    return dog.curFood >= lowerLimit && dog.curFood <= upperLimit;
});
console.log(`Any dog eating an okay amount: ${dogEatingOkayAmount}`);

const dogsEatingOkayAmount = dogs.filter(dog => {
    const lowerLimit = dog.recommendedFood * 0.9;
    const upperLimit = dog.recommendedFood * 1.1;
    return dog.curFood >= lowerLimit && dog.curFood <= upperLimit;
});

const dogsCopy = [...dogs];
dogsCopy.sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(dogsCopy);

Math.sin()