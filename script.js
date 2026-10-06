// Task #1

function calculateDiscount(price, discount) {
    const discountedPrice = price - (price * discount) / 100;
    return discountedPrice;
}

function checkPrice(price) {
    if (price < 100) {
        return "Cheap product";
    } else {
        return "Expensive product";
    }
}

const finalPrice = calculateDiscount(200, 20);

console.log(checkPrice(finalPrice));

// Task #2

const player = {
    name: "Shadow",
    health: 75,
    level: 12,
};

function getPlayerHealth(health) {
    if (health > 0) {
        return "Player is alive";
    } else {
        return "Player is defeated";
    }
}

function getPlayerInfo(name, level) {
    return `${name} - ${level}`;
}

console.log(
    getPlayerInfo(player.name, player.level) +
        "\n" +
        getPlayerHealth(player.health),
);

//  Task #3

const menu = ["Burger", "Pizza", "Fries", "Cola"];

function getFood(menu, index) {
    return menu[index];
}

function createOrder(food, drink) {
    return `Your order: ${food} + ${drink}`;
}

const food = getFood(menu, 1);
const drink = getFood(menu, 3);

console.log(createOrder(food, drink));

// Task #4

const student = {
    name: "Nika",
    score: 78,
};

function checkScore(score) {
    if (score >= 50) {
        return "Passed";
    } else {
        return "Failed";
    }
}
//                    student.name  checkscore(score)
function createStudentResult(name, result) {
    return `${name}: ${result}`;
}
const name2 = student.name;
const result = checkScore(student.score);

console.log(createStudentResult(name2, result));

// Task #5

const trip = {
    country: "Japan",
    days: 7,
    budget: 2100,
};

function calculateDailyBudget(budget, days) {
    return budget / days;
}
//              calculateDailyBudget(trip.budget, trip.days)
function checkDailyBudget(dailyBudget) {
    if (dailyBudget >= 200) {
        return "Comfortable trip";
    } else {
        return "Budget trip";
    }
}

const budget = trip.budget;
const days = trip.days;

console.log(checkDailyBudget(calculateDailyBudget(budget, days)));
