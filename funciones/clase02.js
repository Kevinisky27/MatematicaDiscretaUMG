console.log("hello");

function factorial(A) {
    if (A == 0)
        return 1;
    console.log("A: " + A)
    var list = [A];
    for (var i = 0; i < A; i++) {
        list.push(A - i - 1);
    }
    var value = 1
    for (var r = 0; r < A; r++) {
        value = value * list[r]
    }
    console.log(list)
    console.log(value)
    return value;
}

function combination(A, B) {
    if (A - B - 1 < 0)
        return "invalid result"
    var value = factorial(A) / (factorial(B) * (factorial(A - B)))
    return value
}

function permutation(A, B) {
    if (A - B - 1 < 0)
        return "invalid result"
    var value = factorial(A) / (factorial(A - B))
    return value
}


var submitButton = $(".submit")

submitButton.on("click", onSubmit)


function onSubmit(e) {
    console.log(e.target)
    console.log(e.type)
    e.preventDefault()
    var A = $(".A")[0].value
    var B = $(".B")[0].value

    console.log(A)
    console.log(B)
    C = combination(A, B)
    D = permutation(A, B)
    console.log(C)
    console.log(D)


    var thisguyC = `
	
la combinación de ${A}, ${B} es: ${C}  </div>`
    var thisguyD = `
la permutación de ${A}, ${B} es: ${D}  </div>`
    $(document.body).append(thisguyC)
    $(document.body).append(thisguyD)
}