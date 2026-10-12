// =====================================
// № 106–109 ТАПСЫРМАЛАРЫ
// =====================================

// Тапсырмалар арасында ауысу
document.querySelectorAll("[data-task]").forEach(button => {
    button.addEventListener("click", () => {
        document.querySelectorAll(".task").forEach(section => {
            section.classList.remove("active");
        });

        document.getElementById(button.dataset.task)
            .classList.add("active");
    });
});

// =====================================
// № 106. Жеңілдік калькуляторы
// =====================================

const priceInput = document.getElementById("price");
const discountInput = document.getElementById("discount");
const calcResult = document.getElementById("calcResult");

document.getElementById("calculate").addEventListener("click", () => {
    const priceText = priceInput.value.trim();
    const discountText = discountInput.value.trim();
    const price = Number(priceText);
    const discount = Number(discountText);

    if (
        priceText === "" ||
        discountText === "" ||
        !Number.isFinite(price) ||
        !Number.isFinite(discount) ||
        price < 0 ||
        discount < 0 ||
        discount > 100
    ) {
        calcResult.textContent =
            "Қате! Бағаны 0 немесе одан жоғары, жеңілдікті 0–100 аралығында енгіз.";
        return;
    }

    const saved = price * discount / 100;
    const finalPrice = price - saved;

    calcResult.textContent =
        `Жеңілдік: ${saved.toFixed(2)} ₸. ` +
        `Төленетін сома: ${finalPrice.toFixed(2)} ₸.`;
});

document.getElementById("clear").addEventListener("click", () => {
    priceInput.value = "";
    discountInput.value = "";
    calcResult.textContent = "";
});

// =====================================
// № 107. Цифрлық сағат
// =====================================

function updateClock() {
    const now = new Date();

    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    document.getElementById("clock").textContent =
        `${hours}:${minutes}:${seconds}`;

    document.getElementById("date").textContent =
        now.toLocaleDateString("kk-KZ", {
            day: "2-digit",
            month: "long",
            year: "numeric"
        });
}

updateClock();
setInterval(updateClock, 1000);

// =====================================
// № 108. "Санды тап" ойыны
// =====================================

let secretNumber;
let attempts;
let gameFinished;

function startNewGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    gameFinished = false;

    document.getElementById("guess").value = "";
    document.getElementById("attempts").textContent = "0";
    document.getElementById("gameResult").textContent =
        "Жаңа сан жасырылды. Тауып көр!";
}

document.getElementById("checkGuess").addEventListener("click", () => {
    const input = document.getElementById("guess");
    const message = document.getElementById("gameResult");

    if (gameFinished) {
        message.textContent = "Жаңа ойынды бастау батырмасын бас.";
        return;
    }

    if (input.value.trim() === "") {
        message.textContent = "Алдымен сан енгіз!";
        return;
    }

    const guess = Number(input.value);

    if (!Number.isInteger(guess) || guess < 1 || guess > 100) {
        message.textContent = "1 мен 100 аралығындағы бүтін сан енгіз.";
        return;
    }

    attempts++;
    document.getElementById("attempts").textContent = attempts;

    if (guess < secretNumber) {
        message.textContent = "Үлкенірек сан!";
    } else if (guess > secretNumber) {
        message.textContent = "Кішірек сан!";
    } else {
        message.textContent =
            `Дұрыс! Сен ${attempts} әрекетте таптың!`;
        gameFinished = true;
    }
});

document.getElementById("newGame").addEventListener("click", startNewGame);

startNewGame();

// =====================================
// № 109. Электрондық дауыс беру
// =====================================

const languages = ["JavaScript", "Python", "Java", "C++"];
const storageKey = "studentLanguageVotes";

function loadVotes() {
    try {
        const saved = localStorage.getItem(storageKey);

        if (saved !== null) {
            const parsed = JSON.parse(saved);

            if (
                parsed &&
                languages.every(language =>
                    Number.isSafeInteger(parsed[language]) &&
                    parsed[language] >= 0
                )
            ) {
                return parsed;
            }
        }
    } catch (error) {
        console.warn("Дауыстарды оқу мүмкін болмады:", error);
    }

    return {
        JavaScript: 0,
        Python: 0,
        Java: 0,
        "C++": 0
    };
}

let votes = loadVotes();

function saveVotes() {
    try {
        localStorage.setItem(storageKey, JSON.stringify(votes));
        return true;
    } catch (error) {
        console.warn("Дауыстарды сақтау мүмкін болмады:", error);
        return false;
    }
}

function renderVotes() {
    const list = document.getElementById("voteResults");
    list.replaceChildren();

    const maxVotes = Math.max(...languages.map(language => votes[language]));

    languages.forEach(language => {
        const item = document.createElement("li");
        item.textContent = `${language}: ${votes[language]} дауыс`;

        if (maxVotes > 0 && votes[language] === maxVotes) {
            item.classList.add("winner");
            item.textContent += " — көшбасшы";
        }

        list.appendChild(item);
    });
}

document.getElementById("voteForm").addEventListener("submit", event => {
    event.preventDefault();

    const selected = document.querySelector(
        'input[name="language"]:checked'
    );

    if (!selected || !languages.includes(selected.value)) {
        document.getElementById("voteMessage").textContent =
            "Алдымен тізімнен тіл таңда!";
        return;
    }

    votes[selected.value]++;
    const saved = saveVotes();

    document.getElementById("voteMessage").textContent = saved
        ? "Дауысың қабылданды!"
        : "Дауыс есептелді, бірақ браузерде сақталмады.";

    renderVotes();
});

document.getElementById("resetVotes").addEventListener("click", () => {
    votes = {
        JavaScript: 0,
        Python: 0,
        Java: 0,
        "C++": 0
    };

    saveVotes();
    document.getElementById("voteMessage").textContent =
        "Дауыстар тазаланды.";
    renderVotes();
});

renderVotes();