const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function mul(num1, num2) {
    return num1 * num2;
}

//additon
app.get("/add", (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    if (Number.isNaN(num1) || Number.isNaN(num2)) {
        res.send("Please input valid numbers.");
    } else {
        var sum = add(num1, num2);
        res.send(`The sum of two numbers is : ${sum}`);
    }
});
// subtraction
app.get("/subtract", (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    if (Number.isNaN(num1) || Number.isNaN(num2)) {
        res.send("Please input valid numbers.");
    } else {
        const diff = subtract(num1, num2);
        res.send(`The difference of two numbers is: ${diff}`);
    }
});

// product 
app.get("/mul", (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    if (Number.isNaN(num1) || Number.isNaN(num2)) {
        res.send("Please input valid numbers.");
    } else {
        const product = mul(num1, num2);
        res.send(`The product of two numbers is: ${product}`);
    }
});

app.listen(port, () => {
    console.log("App listening on port: " + port);
});
