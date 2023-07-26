//데이터 저장
localStorage.setItem("이름", "kim");
//데이터 추출
localStorage.getItem("이름");
console.log(localStorage.getItem("이름"));
//데이터 삭제
localStorage.removeItem("이름");

// 데이터 저장2
let arr = [1, 2, 3];
let newArr = JSON.stringify(arr);
localStorage.setItem("num", newArr);
let output = localStorage.getItem("num");
JSON.parse(newArr);
console.log(output);
console.log(JSON.parse(newArr));

// 가격 저렴한 순 정렬
$("#price").click(function (a, b) {
  products.sort(function (a, b) {
    return a.price - b.price;
    console.log(products);
  });
  $(".row").html("");
  products.forEach(productsCard);
});

// 가격 저렴한 순 정렬 끝
// 양수면 a가 오른쪽 음수면 b가 오른쪽
$("#hangle").click(function (a, b) {
  products.sort(function (a, b) {
    if (a.title < b.title) {
      return 1;
    } else if (a.title > b.title) {
      return -1;
    } else {
      return 0;
    }
  });
  $(".row").html("");
  products.forEach(productsCard);
});

$("#max6").click(function (a) {
  let max6 = products.filter(function (a) {
    return a.price <= 60000;
  });
  $(".row").html("");
  max6.forEach(productsCard);
});

let products = [
  { id: 0, price: 70000, title: "가Blossom Dress" },
  { id: 1, price: 50000, title: "나Springfield Shirt" },
  { id: 2, price: 60000, title: "다Black Monastery" },
];

products.sort(function (a, b) {
  return b - a;
});

// 1.자료꺼냄 2 꺼낸자료 수정 3. 다시 넣는다.
// 형제요소 찾기
// 로컬스토리지가 비어있을 때 또는 뭔가 있을때

function productsCard(data) {
  let card = `<div class="col-sm-4">
  <img src="https://via.placeholder.com/600" class="w-100" />
  <h5>${data.title}</h5>
  <p>가격 : ${data.price}</p>
  <button class = "buy">구매</button>
  </div>`;
  $(".row").append(card);
}

// forEach로 만들어 보기
products.forEach(productsCard);

//   클릭 횟수를 저장한다.
let btnCnt = 0;
document.getElementById("more").addEventListener("click", function () {
  btnCnt++;

  if (btnCnt == 0) {
  } else if (btnCnt == 1) {
    $.get("https://codingapple1.github.io/js/more1.json").done((products) => {
      products.forEach(productsCard);
    });
  } else if (btnCnt == 2) {
    $.get("https://codingapple1.github.io/js/more2.json").done((products) => {
      products.forEach(productsCard);
    });
    $("#more").addClass("noMore");
  }
});

//   $("#more").click(function () {
//     $.get("https://codingapple1.github.io/js/more1.json").done(
//       (products) => {
//         products.forEach((data) => {
//           let card = `<div class="col-sm-4">
//         <img src="https://via.placeholder.com/600" class="w-100" />
//         <h5>${data.title}</h5>
//         <p>가격 : ${data.price}</p>
//       </div>`;
//           $(".row").append(card);
//         });
//       }
//     );
//   });

// for 문으로 만들어보기
//   function itemInfo(itemNum) {
//     $(".col-sm-4 h5").eq(itemNum).html(products[itemNum].title);
//     $(".col-sm-4 p")
//       .eq(itemNum)
//       .html(` 가격 : ${products[itemNum].price} `);
//   }

//   for (i = 0; i < products.length; i++) {
//     $(".row").append(card);
//     itemInfo(i);
//   }
