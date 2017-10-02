// global variables go here
var menuDisp = document.getElementsByClassName('pure-menu pure-menu-scrollable custom-restricted pure-u-1-3')[0]
var pizza = document.getElementsByClassName('pizza') [0]
var burgers = document.getElementsByClassName('burg')[0]
var pending = document.getElementsByClassName('right')[0]
var pure = document.getElementsByClassName('pure-form pure-form-stacked quantity')[0]

// Menu fetch goes here
fetch('https://galvanize-eats-api.herokuapp.com/menu')
.then((res)=> {
	return res.json();
})
.then ((res) => {
	for (var i = 0; i < res.menu.length; i++) {
		var wrapper = document.createElement('div')
			wrapper.setAttribute('class', 'mItem')
		var name = 	document.createElement('h4')
			name.innerText = res.menu[i].name
		var price = document.createElement('p')
			price.innerText = res.menu[i].price

	if (res.menu[i].type === "burger") {
			wrapper.append(name, price);
			burgers.append(wrapper);
	}
	else {
				wrapper.append(name, price);
				pizza.append(wrapper);
	}
		burgers.children[0].className= 'mItemF'
	}
})

// menu selector styling goes here
menuDisp.addEventListener('click', (event) => {
	event.preventDefault()
	burgers.children[0].className = 'mItem'
	burgers.children[1].className = 'mItem'
	pizza.children[1].className = 'mItem'
	pizza.children[2].className = 'mItem'
	pizza.children[0].className = 'mItem'
	if (event.target.className === 'mItem') {
		event.target.className = 'mItemF'
	} else if (event.target.className === 'mItemF') {
			event.target.className = 'mItem'
		}
})

// adding menu items to order
var currentItemName = document.createElement('div')
var currentItemPrice = document.createElement('div')
menuDisp.addEventListener('click', (event) => {
    event.preventDefault()
    currentItemPrice.innerText = ''
    currentItemName.innerText = ''
    var name = document.createElement('p')
    var price = document.createElement('p')
    name.innerText = event.target.querySelector('h4').innerText
    price.innerText = event.target.querySelector('p').innerText
    currentItemName.append(name)
    currentItemPrice.append(price)
})
pure.addEventListener('submit', (event) => {
		event.preventDefault();
    var amount = event.target["0"].value
    var price = currentItemPrice.innerText
    var name = currentItemName.innerText
        for (var i = 0; i < amount; i++) {
            var wrap = document.createElement('div')
            var pTag = document.createElement('h4')
            var pTag2 = document.createElement('p')
            pTag.innerText = name
            pTag2.innerText = price
            wrap.setAttribute('class', 'wrap')
            wrap.append(pTag, pTag2)
            pending.append(wrap)
        }
})

// order pricing scripting goes here


// post to API call goes here
