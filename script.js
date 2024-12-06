// Task 1: Product array
let products = [
    { name: "Laptop", price: 999.99, description: "Powerful computing on the go" },
    { name: "Smartphone", price: 699.99, description: "Stay connected wherever you are" },
    { name: "Headphones", price: 149.99, description: "Immersive audio experience" }
];

// Display products
function showProducts() {
    let productList = document.getElementById('productList');
    products.forEach(product => {
        let div = document.createElement('div');
        div.className = 'product';
        div.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
            <p>${product.description}</p>
        `;
        productList.appendChild(div);
    });
}

// Task 2: Form handling
let form = document.getElementById('contactForm');
let submissions = [];

form.onsubmit = function(e) {
    e.preventDefault();
    
    let formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };
    
    submissions.push(formData);
    showSubmissions();
    form.reset();
};

function showSubmissions() {
    let submissionDiv = document.getElementById('submissions');
    submissionDiv.innerHTML = '';
    
    submissions.forEach(data => {
        let div = document.createElement('div');
        div.className = 'submission';
        div.innerHTML = `
            <p>Name: ${data.name}</p>
            <p>Email: ${data.email}</p>
            <p>Message: ${data.message}</p>
        `;
        submissionDiv.appendChild(div);
    });
}

// Task 3: Styling
// Box 1 - Hover
let box1 = document.getElementById('box1');
box1.onmouseover = function() {
    this.style.backgroundColor = 'lightblue';
};
box1.onmouseout = function() {
    this.style.backgroundColor = '#ddd';
};

// Box 2 - Click
let box2 = document.getElementById('box2');
box2.onclick = function() {
    let colors = ['pink', 'lightgreen', 'lightblue', 'lightyellow'];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    this.style.backgroundColor = randomColor;
};

// Box 3 - Double Click
let box3 = document.getElementById('box3');
box3.ondblclick = function() {
    this.style.transform = this.style.transform === 'rotate(180deg)' ? '' : 'rotate(180deg)';
};

// Box 4 - Right Click
let box4 = document.getElementById('box4');
box4.oncontextmenu = function(e) {
    e.preventDefault();
    this.style.borderRadius = this.style.borderRadius === '50%' ? '0' : '50%';
};

// Box 5 - Key Press
let box5 = document.getElementById('box5');
box5.tabIndex = 0;
box5.onkeydown = function() {
    this.style.fontSize = '24px';
};
box5.onkeyup = function() {
    this.style.fontSize = '16px';
};

// Load everything when page loads
window.onload = function() {
    showProducts();
};
