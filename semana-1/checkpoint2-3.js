//Checkpoint de Exercícios 2
//Exercício 3

// 1 - À vista em dinheiro ou cheque, recebe 10% de desconto.
// 2 - À vista no cartão de crédito, recebe 15% de desconto.
// 3 - Em duas vezes, preço normal de etiqueta sem juros.
// 4 - Em três vezes, preço normal de etiqueta mais juros de 10%.

let paymentMethod = "4";
let productPrice = 100;
let finalPrice;

switch (paymentMethod) {
  case "1":
    finalPrice = (productPrice - productPrice * 0.1);
    console.log('Total a pagar: R$' + finalPrice);
    break;
  case "2":
    finalPrice = (productPrice - productPrice * 0.15);
    console.log('Total a pagar: R$' + finalPrice);
    break;
  case "3":
    finalPrice = productPrice;
    console.log('Total a pagar: R$' + productPrice);
    break;
  case "4":
    finalPrice = (productPrice + productPrice * (0.1));
    console.log('Total a pagar: R$' + finalPrice);
    break;
  default:
    console.log('Método de pagamento inválido');
    break;
}
