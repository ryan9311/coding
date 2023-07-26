// localStorage로 담은 상품 값을 꺼내 html로 표시하기

// 값 추출하여 변수로 담기
let cartList = JSON.parse(localStorage.cart);

// 카드 만들어줄 함수 만들기
function cartCard(data) {
  // p태그 안에 파라이터로 변수 받기
  let card = `
    <p>${data}<p>
    `;
  // cartItem 아래 만든 함수 추가해달라고 하기
  $(".cartItem").append(card);
}
// forEach로 배열안에 갯수 만큼 반복하기
cartList.forEach(cartCard);
