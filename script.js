// 找到页面上的按钮和用于显示文字的位置
const studyButton = document.getElementById("studyButton");
const message = document.getElementById("message");

// 记录已经完成的小目标数量
let goalCount = 0;

// 点击按钮后，数量增加 1，并显示一句鼓励自己的话
studyButton.addEventListener("click", function () {
  goalCount = goalCount + 1;
  message.textContent = "今天也要完成一个小目标！你已经完成了 " + goalCount + " 个小目标。";
});
