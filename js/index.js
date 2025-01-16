     //?===========Завдання 1===========//

// Початковий об'єкт user
const user = {
    name: "John",
    age: 30,
    hobby: "reading",
    premium: true
};

// 1. Додати поле mood зі значенням 'happy'
user.mood = "happy";

// 2. Замінити значення hobby на 'skydiving'
user.hobby = "skydiving";

// 3. Замінити значення premium на false
user.premium = false;

// 4. Вивести вміст об'єкта user в форматі ключ:значення
for (const key of Object.keys(user)) {
    console.log(`${key}: ${user[key]}`);
}


     function countProps(obj) {
        return Object.keys(obj).length;
    }


    function findBestEmployee(employees) {
        let bestEmployee = null;
        let maxTasks = 0;
    
        for (const [name, tasks] of Object.entries(employees)) {
            if (tasks > maxTasks) {
                maxTasks = tasks;
                bestEmployee = name;
            }
        }
    
        return bestEmployee;
    }
    

    function countTotalSalary(employees) {
        let totalSalary = 0;
    
        for (const salary of Object.values(employees)) {
            totalSalary += salary;
        }
    
        return totalSalary;
    }
    

    function getAllPropValues(arr, prop) {
        const propValues = [];
    
        for (const obj of arr) {
            if (obj.hasOwnProperty(prop)) {
                propValues.push(obj[prop]);
            }
        }
    
        return propValues;
    }
    

    function calculateTotalPrice(allProducts, productName) {
        let totalPrice = 0;
    
        for (const product of allProducts) {
            if (product.name === productName) {
                totalPrice = product.price * product.quantity;
                break;
            }
        }
    
        return totalPrice;
    }