// 找到页面上的按钮和用于显示文字的位置
const studyButton = document.getElementById("studyButton");
const resetButton = document.getElementById("resetButton");
const message = document.getElementById("message");

// 记录已经完成的小目标数量
let goalCount = 0;

// 统一更新页面上的数量文字
function showGoalCount() {
  message.textContent = "今天也要完成一个小目标！你已经完成了 " + goalCount + " 个小目标。";
}

// 页面启动时，从 localStorage 恢复之前保存的数量
const savedGoalCount = localStorage.getItem("goalCount");

if (savedGoalCount !== null) {
  goalCount = Number(savedGoalCount);
}

showGoalCount();

// 点击按钮后，数量增加 1，并保存到 localStorage
studyButton.addEventListener("click", function () {
  goalCount = goalCount + 1;
  localStorage.setItem("goalCount", goalCount);
  showGoalCount();
});

// 点击清零后，数量恢复为 0，并清除保存的数据
resetButton.addEventListener("click", function () {
  goalCount = 0;
  localStorage.removeItem("goalCount");
  showGoalCount();
});
