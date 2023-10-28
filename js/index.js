const category = (e) => {

    let category = document.getElementById("category")
    category.options.selectedIndex =  e;

    /*  let btnText = e.target.id
console.log(btnText) */

/* let categorySelected = category.options[category.selectedIndex].text; */
/* console.log(categorySelected) */
/* let categorySelected = category.options.selectedIndex =  */
/* categorySelected = "Pedro"; */

}



const totalPrice = () =>{
    let amount = Number(document.getElementById("amount").value);
    let category = document.getElementById("category").value
    let discount;
    switch (category) {
        case "stu":
                discount = 80;
            break;
        case "trn":
                discount = 50;
            break;
        case "jnr":
                discount = 15;
            break;
        default:
                discount = 0;
            break;
    }

    /* amount === 0 && amount++ */
    if(amount === 0 || Number.isNaN(amount)){
        alert("La cantidad ingresada no es correcta. Por favor ingresa una cantidad de tickets válida")
        return
    }

    if(amount > 10){
        alert("Lo sentimos, la cantidad máxima de tickets que puedes comprar es 10.")
        return
    }
    
    operation = amount * (200-((200*discount)/100))

    document.getElementById("price").textContent = "Total a Pagar: $ " + operation;
}

const resetForm = () =>{
    /* let category = document.getElementById("category")
    category.options.selectedIndex =  0;
    document.getElementById("price").textContent = "Total a Pagar: $ ";
    document.getElementById("amount").value = 0;
    document.getElementById("name").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("email").value = ""; */
    document.getElementById("formTicket").reset()
    document.getElementById("price").textContent = "Total a Pagar: $ ";
}