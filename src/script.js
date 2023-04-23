const questions = [
    {
        question: "You receive an email from a bank that looks legitimate, asking you to provide your account details due to a security breach. What do you do?",
        answers: [
            {   text: "Click the link and provide your account details", correct: false},
            {   text: "Ignore the email and delete it", correct: true},
            {   text: "Reply to the email with your account details", correct: false},
            {   text: "Forward the email to all your contacts for their awareness", correct: false},
        ]
   
    },
    {
        question: "You enter a secured building by swiping your access card, and someone you don't recognize asks you to hold the door open for them. What do you do?",
        answers: [
            {   text: "Politely refuse and let the door close", correct: false},
            {   text: "Hold the door open for them without verifying their identity", correct: false},
            {   text: "Ask them to swipe their access card before letting them in", correct: true},
            {   text: "Enter the building without acknowledging their request", correct: false},
        ]
    },
    {
        question: ": You receive a phone call from someone claiming to be from your bank, asking for your social security number to verify your account. What do you do?",
        answers: [
            {   text: "Provide your social security number", correct: false},
            {   text: "Hang up the call without responding", correct: true},
            {   text: "Ask the caller for their name and employee ID for verification", correct: false},
            {   text: "Give them a fake social security number", correct: false},
        ]
    },
    {
        question: ": You receive a text message from a friend's phone number, asking for your personal information urgently. What do you do?",
        answers: [
            {   text: "Reply with your personal information", correct: false},
            {   text: "Ignore the text message", correct: false},
            {   text: "Call your friend to verify if they sent the text message", correct: true},
            {   text: "Reply asking for more details before providing any information", correct: false},
        ]
    },
    {
        question: ": You see someone rummaging through the trash bins near your office, claiming to be a janitor. What do you do?",
        answers: [
            {   text: "Ignore them and continue with your work", correct: false},
            {   text: "Confront them and ask for their identification", correct: true},
            {   text: "Offer them help ", correct: false},
            {   text: "Join them in searching for valuable information", correct: false},
        ]
    },
    {
        question: ": You have an online account with a social media platform. You set your password as 'password123' for easy memorization. What do you do?",
        answers: [
            {   text: "Keep the password as it is", correct: false},
            {   text: "Change the password to a more complex one", correct: true},
            {   text: "Share the password with a close friend", correct: false},
            {   text: "Use the same password for all your online accounts", correct: false},
        ]
    },
    {
        question: ": You receive a notification from an online service that there have been multiple failed login attempts to your account. What do you do?",
        answers: [
            {   text: "Ignore the notification as it may be a mistake", correct: false},
            {   text: "Share your account credentials with the service to investigate", correct: false},
            {   text: "Reset your password to a stronger one", correct: true},
            {   text: "Disable the notification feature to avoid further alerts", correct: false},
        ]
    },
    {
        question: ": After receiving multiple failed login attempts, your online account gets locked. What do you do?",
        answers: [
            {   text: "Keep trying different passwords until the account unlocks", correct: false},
            {   text: "Create a new account with a similar password", correct: false},
            {   text: "Share your account credentials on social media for help", correct: false},
            {   text: "Contact the customer support to report the issue", correct: true},
        ]
    },
    {
        question: ": You have the option to enable two-factor authentication for your online accounts. What do you do?",
        answers: [
            {   text: "Share the authentication code with a colleague", correct: false},
            {   text: "Ignore the option as it seems complicated", correct: false},
            {   text: "Enable two-factor authentication using a trusted device", correct: true},
            {   text: "Disable the feature to avoid additional steps during login", correct: false},
        ]
    },
    {
        question: ": You forget your password for an online account and need to recover it. What do you do?",
        answers: [
            {   text: "Share your account credentials with a stranger for assistance", correct: false},
            {   text: "Use the same password for other accounts to recover it", correct: false},
            {   text: "Provide your personal information to an unknown website for recovery", correct: false},
            {   text: "Follow the account recovery process on the official website", correct: true},
        ]
    },
    {
        question: ": Which of the following is NOT an effective way to mitigate malware attacks?",
        answers: [
            {   text: "Install and update antivirus software", correct: false},
            {   text: "Use strong and unique passwords", correct: false},
            {   text: "Disable all firewalls and security measures", correct: true},
            {   text: "Keep software and operating systems up to date", correct: false},
        ]
    },
    {
        question: ": What is the best way to avoid becoming a victim of phishing attacks that may lead to malware infections?",
        answers: [
            {   text: "Verify the authenticity of the email and the URL before taking any action", correct:  true},
            {   text: "Disable all security measures on the computer", correct: false},
            {   text: "Open all emails from unknown senders", correct: false},
            {   text: "Click on links in emails without verifying the URL", correct: false},
        ]
    },
    {
        question: ": What is the purpose of a software update in the context of malware mitigation?",
        answers: [
            {   text: "To delete all files on the computer", correct:  false},
            {   text: "To add new features to the software", correct: false},
            {   text: "To remove any existing malware from the system", correct: false},
            {   text: "To patch known vulnerabilities and improve security", correct: true},
        ]
    },
    {
        question: ": Which of the following is NOT an effective way to protect against ransomware attacks?",
        answers: [
            {   text: "Regularly backing up important files", correct:  false},
            {   text: "Opening suspicious emails and attachments", correct: true},
            {   text: "Using antivirus software that includes ransomware protection", correct: false},
            {   text: "Avoiding downloading and installing software from untrusted sources", correct: false},
        ]
    },
    {
        question: ": What is the best way to mitigate the risk of malware infections on a network?",
        answers: [
            {   text: "Use network segmentation to limit access to sensitive data", correct:  true},
            {   text: "Provide all employees with administrative privileges", correct: false},
            {   text: "Disable all firewalls and security measures", correct: false},
            {   text: "Implement a strong password policy", correct: false},
        ]
    },
    {
        question: ": What is the most effective way to mitigate the risk of using an obsolete or unsupported operating system?",
        answers: [
            {   text: "Update the operating system to the latest version", correct:  true},
            {   text: "Install antivirus software", correct: false},
            {   text: "Disable all unnecessary features and services", correct: false},
            {   text: "Continue using the obsolete or unsupported operating system", correct: false},
        ]
    },
    {
        question: ": What is the main risk associated with using an obsolete or unsupported operating system?",
        answers: [
            {   text: "Compatibility issues with new hardware and software", correct:  false},
            {   text: "Slow system performance", correct: false},
            {   text: "Increased susceptibility to malware and cyber attacks", correct: true},
            {   text: "High system resource usage", correct: false},
        ]
    },
    {
        question: ": Which of the following is NOT an effective way to mitigate the risk of using an obsolete or unsupported operating system?",
        answers: [
            {   text: "Use a third-party security software", correct:  false},
            {   text: "Implement network segmentation", correct: false},
            {   text: "Continuously monitor the system for threats", correct: false},
            {   text: "Disable all security measures on the system", correct: true},
        ]
    },
    {
        question: ": What is the best way to ensure that an operating system remains supported by the vendor?",
        answers: [
            {   text: "Use the operating system without any updates or patches", correct:  false},
            {   text: "Purchase a new computer every few years", correct: false},
            {   text: "Install all available updates and patches from the vendor", correct: true},
            {   text: "Use only open-source operating systems", correct: false},
        ]
    },
    {
        question: ": What is the best way to migrate from an obsolete or unsupported operating system to a supported operating system?",
        answers: [
            {   text: "Back up all important data and perform a clean install of the new operating system", correct:  true},
            {   text: "Continue using the obsolete or unsupported operating system", correct: false},
            {   text: "Install the new operating system without backing up any data", correct: false},
            {   text: "Install the new operating system without verifying hardware and software compatibility", correct: false},
        ]
    },
    {
        question: ": What is the most effective way to mitigate the risk of inadequate access control for third-party vendors?",
        answers: [
            {   text: "Implement strong password policies for third-party vendors", correct:  false},
            {   text: "Provide all third-party vendors with administrative access", correct: false},
            {   text: "Limit access privileges to only what is necessary for third-party vendors", correct: true},
            {   text: " Ignore third-party vendor access altogether", correct: false},
        ]
    },
    {
        question: ":What is the main risk associated with inadequate access control for third-party vendors?",
        answers: [
            {   text: "Inability to track vendor activity", correct:  false},
            {   text: "Lack of trust in the vendor's ability to perform their function", correct: false},
            {   text: "Unintentional or intentional data breaches", correct: true},
            {   text: "Increased costs associated with managing third-party access", correct: false},
        ]
    },
    {
        question: ":Which of the following is NOT an effective way to mitigate the risk of inadequate access control for third-party vendors?",
        answers: [
            {   text: "Provide all third-party vendors with the same level of access", correct:  true},
            {   text: "Conduct regular audits of third-party vendor activity", correct: false},
            {   text: "Limit access privileges to only what is necessary", correct: false},
            {   text: "Implement a vendor management program", correct: false},
        ]
    },
    {
        question: ":What is the best way to ensure that third-party vendors are complying with access control policies?",
        answers: [
            {   text: "Trust that the vendors are complying with policies", correct:  false},
            {   text: "Perform regular audits of vendor activity", correct: true},
            {   text: "Provide all vendors with administrative access", correct: false},
            {   text: "Limit access privileges to only what is necessary for the vendor's function", correct: false},
        ]
    },
    {
        question: ":What is the best way to manage access control for third-party vendors?",
        answers: [
            {   text: "Ignore third-party vendor access altogether", correct:  false},
            {   text: "Treat third-party vendors as if they are employees", correct: false},
            {   text: "Provide all third-party vendors with the same level of access", correct: false},
            {   text: "Limit access privileges to only what is necessary for the vendor's function", correct: true},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion. 
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display= "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion(); 
    }else{
        showScore();
    }
}


nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();