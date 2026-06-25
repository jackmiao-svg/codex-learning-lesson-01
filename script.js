// 找到页面上的按钮和用于显示文字的位置
const studyButton = document.getElementById("studyButton");
const resetButton = document.getElementById("resetButton");
const themeButton = document.getElementById("themeButton");
const message = document.getElementById("message");

// 记录已经完成的小目标数量
let goalCount = 0;

// 统一更新页面上的数量文字
function showGoalCount() {
  message.textContent = "今天也要完成一个小目标！你已经完成了 " + goalCount + " 个小目标。";
}

// 根据主题名称切换页面样式和按钮文字
function applyTheme(theme) {
  if (theme === "dark") {
    document.body.classList.add("dark-mode");
    themeButton.textContent = "浅色模式";
  } else {
    document.body.classList.remove("dark-mode");
    themeButton.textContent = "深色模式";
  }
}

// 页面启动时，从 localStorage 恢复之前保存的数量
const savedGoalCount = localStorage.getItem("goalCount");

if (savedGoalCount !== null) {
  goalCount = Number(savedGoalCount);
}

showGoalCount();

// 页面启动时，恢复之前保存的主题
const savedTheme = localStorage.getItem("theme");
applyTheme(savedTheme);

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

// 点击主题按钮后，切换主题并保存选择
themeButton.addEventListener("click", function () {
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "light");
    applyTheme("light");
  } else {
    localStorage.setItem("theme", "dark");
    applyTheme("dark");
  }
});
