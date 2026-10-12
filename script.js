function task86() {
    let freeSpace = 18;

    if (freeSpace < 0) {
        console.log("Қате: теріс мән!");
    } else if (freeSpace < 5) {
        console.log("Жад өте аз");
    } else if (freeSpace < 20) {
        console.log("Бос орын аз");
    } else if (freeSpace < 100) {
        console.log("Орын жеткілікті");
    } else {
        console.log("Бос орын көп");
    }
}

// № 87. Пайдаланушы деңгейі
function task87() {
    let points = 350;

    if (points < 0) {
        console.log("Қате балл");
    } else if (points < 100) {
        console.log("Жаңадан бастаушы");
    } else if (points < 300) {
        console.log("Пайдаланушы");
    } else if (points < 600) {
        console.log("Жетілдірілген");
    } else {
        console.log("Сарапшы");
    }
}

// № 88. Тұрақ ақысы
function task88() {
    let hours = 5;

    if (!Number.isFinite(hours) || hours <= 0 || hours > 24) {
        console.log("Қате: уақыт 0-ден көп, 24-тен аспауы керек");
        return;
    }

    let roundedHours = Math.ceil(hours);
    let cost = 300 + (roundedHours - 1) * 200;
    cost = Math.min(cost, 2000);

    console.log("Тұрақ ақысы:", cost, "₸");
}

// № 89. Жыл мезгілін анықтау
function task89() {
    let month = 10;

    switch (month) {
        case 12:
        case 1:
        case 2:
            console.log("Қыс");
            break;
        case 3:
        case 4:
        case 5:
            console.log("Көктем");
            break;
        case 6:
        case 7:
        case 8:
            console.log("Жаз");
            break;
        case 9:
        case 10:
        case 11:
            console.log("Күз");
            break;
        default:
            console.log("Қате ай нөмірі");
    }
}

// № 90. Сервер температурасын тексеру
function task90() {
    let temperature = 65;

    if (!Number.isFinite(temperature)) {
        console.log("Температура қате");
    } else if (temperature < 40) {
        console.log("Қалыпты температура");
    } else if (temperature < 70) {
        console.log("Температура жоғары");
    } else {
        console.log("Қауіпті қызып кету!");
    }
}

// № 91. 3-ке бөлінетін сандардың қосындысы
function task91() {
    let sum = 0;
    let count = 0;

    for (let i = 1; i <= 60; i++) {
        if (i % 3 === 0) {
            sum += i;
            count++;
        }
    }

    console.log("Қосынды:", sum);
    console.log("Сандар саны:", count);
}

// № 92. Екінші ең үлкен баға
function task92() {
    let scores = [75, 92, 88, 65, 98, 83];

    let uniqueScores = [...new Set(scores)]
        .sort((a, b) => b - a);

    if (uniqueScores.length < 2) {
        console.log("Екінші ерекше баға жоқ");
    } else {
        console.log("Екінші ең үлкен баға:", uniqueScores[1]);
    }
}

// № 93. 'a' әрпін санау
function task93() {
    let text = "javascript programming";
    let count = 0;

    for (let char of text) {
        if (char === "a") {
            count++;
        }
    }

    console.log("'a' әрпінің саны:", count);
}

// № 94. 10000 теңгеден қымбат тауарлар
function task94() {
    let prices = [5000, 12000, 8000, 25000, 17000, 3000];

    let expensive = prices.filter(price => price > 10000);
    let total = expensive.reduce((sum, price) => sum + price, 0);

    console.log("Қымбат тауарлар:", expensive);
    console.log("Тауар саны:", expensive.length);
    console.log("Жалпы бағасы:", total, "₸");
}

// № 95. 1-ден 15-ке дейінгі сандардың квадраттары
function task95() {
    let squares = [];

    for (let i = 1; i <= 15; i++) {
        squares.push(i ** 2);
    }

    console.log("Квадраттар:", squares);
}

// № 96. Топ бағаларын талдау
function task96() {
    let grades = [95, 78, 45, 88, 67, 92, 35, 74, 81, 50];

    let sum = grades.reduce((a, b) => a + b, 0);
    let average = sum / grades.length;
    let high = grades.filter(grade => grade >= 90).length;
    let low = grades.filter(grade => grade < 50).length;

    console.log("Орташа балл:", average);
    console.log("90 және одан жоғары:", high);
    console.log("50-ден төмен:", low);
    console.log("Ең жоғары баға:", Math.max(...grades));
    console.log("Ең төмен баға:", Math.min(...grades));
}

// № 97. Теріс сандарды алып тастау
function task97() {
    let numbers = [-4, 8, -12, 15, 0, 22, -3, 9];

    let positive = numbers.filter(number => number >= 0);
    let removed = numbers.length - positive.length;

    console.log("Бастапқы массив:", numbers);
    console.log("Жаңа массив:", positive);
    console.log("Алып тасталған элементтер:", removed);
}

// № 98. Екі санының дәрежелері
function task98() {
    for (let power = 0; power <= 10; power++) {
        console.log(`2^${power} = ${2 ** power}`);
    }
}

// № 99. ҚҚС есептеу
function task99() {
    function calculateTax(price, taxRate) {
        if (
            !Number.isFinite(price) ||
            price < 0 ||
            !Number.isFinite(taxRate) ||
            taxRate < 0 ||
            taxRate > 100
        ) {
            throw new Error("Мәндер дұрыс емес");
        }

        return price * taxRate / 100;
    }

    let price = 100000;
    let taxRate = 12;

    try {
        let tax = calculateTax(price, taxRate);

        console.log("ҚҚС:", tax, "₸");
        console.log("ҚҚС-пен баға:", price + tax, "₸");
    } catch (error) {
        console.log(error.message);
    }
}

// № 100. Уақытты түрлендіру
function task100() {
    function convertTime(seconds) {
        if (!Number.isSafeInteger(seconds) || seconds < 0) {
            throw new Error("Секунд саны дұрыс емес");
        }

        return {
            hours: Math.floor(seconds / 3600),
            minutes: Math.floor((seconds % 3600) / 60),
            seconds: seconds % 60
        };
    }

    let time = convertTime(3675);

    console.log(
        `${time.hours} сағ ${time.minutes} мин ${time.seconds} сек`
    );
}

// № 101. Телефондар каталогы
function task101() {
    let phones = [
        { name: "Samsung", price: 280000, stock: 5 },
        { name: "Xiaomi", price: 160000, stock: 12 },
        { name: "Apple", price: 520000, stock: 3 },
        { name: "Honor", price: 190000, stock: 8 }
    ];

    console.table(phones);

    let mostExpensive = phones.reduce((a, b) =>
        a.price > b.price ? a : b
    );

    let affordable = phones.filter(phone => phone.price < 200000);

    let totalStock = phones.reduce((sum, phone) => sum + phone.stock, 0);

    let totalValue = phones.reduce(
        (sum, phone) => sum + phone.price * phone.stock, 0
    );

    console.log("Ең қымбат телефон:", mostExpensive.name);
    console.log("200000 ₸-ден арзан:", affordable);
    console.log("Телефон саны:", totalStock);
    console.log("Қойма құны:", totalValue, "₸");
}

// № 102. Үлгерім статистикасы
function task102() {
    function analyzeScores(scores) {
        if (!Array.isArray(scores)) {
            throw new Error("Массив қажет");
        }

        if (scores.some(score =>
            !Number.isFinite(score) || score < 0 || score > 100
        )) {
            throw new Error("Бағалар 0 мен 100 аралығында болуы керек");
        }

        if (scores.length === 0) {
            return {
                average: 0,
                passed: 0,
                failed: 0,
                successRate: 0
            };
        }

        let sum = scores.reduce((a, b) => a + b, 0);
        let passed = scores.filter(score => score >= 50).length;
        let failed = scores.length - passed;

        return {
            average: sum / scores.length,
            passed,
            failed,
            successRate: passed / scores.length * 100
        };
    }

    console.log(analyzeScores([95, 78, 45, 88, 67, 92, 35, 74, 81, 50]));
}

// № 103. Студент ID генераторы
function task103() {
    let idCounter = 0;

    function generateStudentId() {
        idCounter++;
        return "ST-" + String(idCounter).padStart(4, "0");
    }

    for (let i = 0; i < 5; i++) {
        console.log(generateStudentId());
    }
}

// № 104. Құпиясөз күрделілігін тексеру
function task104() {
    function checkPasswordStrength(password) {
        if (typeof password !== "string") {
            throw new Error("Құпиясөз мәтін болуы керек");
        }

        if (password.length < 8) {
            return "Әлсіз";
        }

        let hasLetters = /[a-zA-Zа-яА-ЯёЁ]/.test(password);
        let hasDigits = /\d/.test(password);
        let hasSpecial = /[^a-zA-Zа-яА-ЯёЁ0-9]/.test(password);

        if (hasLetters && hasDigits && hasSpecial) {
            return "Күрделі";
        }

        if (hasLetters && hasDigits) {
            return "Жақсы";
        }

        if (hasLetters && !hasDigits && !hasSpecial) {
            return "Орташа";
        }

        return "Әлсіз";
    }

    let passwords = [
        "abc123",
        "JavaScript",
        "Student123",
        "Student123!"
    ];

    passwords.forEach(password => {
        console.log(password, "—", checkPasswordStrength(password));
    });
}

// № 105. Кітапхана есебі
function task105() {
    let books = [
        { id: 1, title: "JavaScript", copies: 5 },
        { id: 2, title: "Python", copies: 3 },
        { id: 3, title: "HTML", copies: 7 },
        { id: 4, title: "SQL", copies: 2 }
    ];

    function findBook(id) {
        return books.find(book => book.id === id);
    }

    function borrowBook(id) {
        let book = findBook(id);

        if (!book) {
            console.log("Кітап табылмады");
        } else if (book.copies <= 0) {
            console.log("Кітап жоқ:", book.title);
        } else {
            book.copies--;
            console.log("Кітап берілді:", book.title);
        }
    }

    function returnBook(id) {
        let book = findBook(id);

        if (!book) {
            console.log("Кітап табылмады");
        } else {
            book.copies++;
            console.log("Кітап қайтарылды:", book.title);
        }
    }

    borrowBook(1);
    borrowBook(2);
    returnBook(1);
    borrowBook(99);

    console.table(books);
}

// ==========================================
// ҚАЖЕТТІ ТАПСЫРМАНЫ ОСЫ ЖЕРДЕН ІСКЕ ҚОС
// Мысалы: runTask(86)
// ==========================================

function runTask(number) {
    const tasks = {
        86: task86,
        87: task87,
        88: task88,
        89: task89,
        90: task90,
        91: task91,
        92: task92,
        93: task93,
        94: task94,
        95: task95,
        96: task96,
        97: task97,
        98: task98,
        99: task99,
        100: task100,
        101: task101,
        102: task102,
        103: task103,
        104: task104,
        105: task105
    };

    if (tasks[number]) {
        console.log(`№ ${number} тапсырмасы`);
        tasks[number]();
    } else {
        console.log("Мұндай тапсырма жоқ. № 86–105 аралығын таңда.");
    }
}

// Әдепкіде № 86 тапсырмасы орындалады:
runTask(86);