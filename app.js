const button = document.getElementById("count-button");

button.addEventListener("click", function () {
  const textarea = document.getElementById("text-input");
  const userInput = textarea.value;

  const wordsArray = userInput.split(" ");

  const wordCount = wordsArray.length;

  console.log("Количество слов:" + wordCount);

  const resultElement = document.getElementById("result");
  resultElement.textContent = "Количество слов: " + wordCount;
  
  const charCount = userInput.length;

  const charCountElement = document.getElementById("char-count");
  charCountElement.textContent = "Количество символов:" + charCount;

  if (userInput.trim() === "") {
    resultElement.textContent = "Введите текст!"
    return;
  }

  



});

