const form = document.querySelector(".add-account");
const buttonAdd = document.querySelector(".button-add");
const buttonList = document.querySelector(".button-list");
const buttonClose = document.querySelector(".button-close");
const accountContainer = document.querySelector(".account-container");
accountContainer.style.display = "none";
const formButton = document.querySelector(".form-button-container");
const inputAll = document.querySelectorAll("input");
const containerPagination = document.querySelector(".container-button-pagination");

//открытие окна формы добавления аккаунта

buttonAdd.addEventListener("click", () => {
    form.style.display = "flex";
});

//закрытие окна формы добавления аккаунта

buttonClose.addEventListener("click", (event) => {
    event.preventDefault();
    form.style.display = "none";
});

//показать, скрыть список аккаунтов.

buttonList.addEventListener("click", () => {
    
    if(accountContainer.style.display === "flex") {
        accountContainer.style.display = "none";
        buttonList.innerText = "Список аккаунтов";
    }else
    if(accountContainer.style.display === "none") {
        accountContainer.style.display = "flex";
        buttonList.innerText = "Скрыть список";
    }
});

//массивы записи кнопок, аккаунтов
let buttonDelAll = [];
let accountAll = [];
let buttonEditAll = [];
let containerInput = [];
let paginationButtonAll = [];
//переменная, которая устанавливает число аккаунта в Edit
let accountNumber = 0;
//переменные пагинации
let pagesNumber;
let step = 1;
let page;
let list = 10;

//кнопка добавить 
formButton.addEventListener("click", (event) => {
    event.preventDefault();
    //Редактирование аккаунта
    if(formButton.innerText === "Изменить"){
        accountAll[accountNumber].innerText = `${inputAll[0].value}   ${inputAll[1].value}   ${inputAll[2].value}   ${inputAll[3].value}   ${inputAll[4].value}   ${inputAll[5].value}   ${inputAll[6].value}   ${inputAll[7].value}`;
        containerInput[accountNumber] = [inputAll[0].value, inputAll[1].value, inputAll[2].value, inputAll[3].value, inputAll[4].value, inputAll[5].value, inputAll[6].value, inputAll[7].value];
        const buttonEdit = document.createElement("button");
        const buttonDel = document.createElement("button");
        const divNull = document.createElement("div");
        buttonEdit.innerText = "Редактировать";
        buttonDel.innerText = "Удалить";
        buttonDel.classList = "delete";
        buttonEdit.classList = "edit";
        accountAll[accountNumber].appendChild(divNull);
        divNull.appendChild(buttonEdit);
        divNull.appendChild(buttonDel);
        buttonDelAll[accountNumber] = buttonDel; 
        buttonEditAll[accountNumber] = buttonEdit;
        page = accountAll.slice(0,list);
        accountContainer.innerHTML = page.map((item) => `<li class="acc">${item.innerHTML}</li>`).join('');
        
    } else {
    const account = document.createElement("li");
    account.innerText = `${inputAll[0].value}   ${inputAll[1].value}   ${inputAll[2].value}   ${inputAll[3].value}   ${inputAll[4].value}   ${inputAll[5].value}   ${inputAll[6].value}   ${inputAll[7].value} `;
    const buttonEdit = document.createElement("button");
    const buttonDel = document.createElement("button");
    const divNull = document.createElement("div");
    const inputAllValue = [inputAll[0].value, inputAll[1].value, inputAll[2].value, inputAll[3].value, inputAll[4].value, inputAll[5].value, inputAll[6].value, inputAll[7].value];
    buttonEdit.innerText = "Редактировать";
    buttonDel.innerText = "Удалить";
    buttonDel.classList = "delete";
    buttonEdit.classList = "edit";
    account.appendChild(divNull);
    divNull.appendChild(buttonEdit);
    divNull.appendChild(buttonDel);
    accountAll.push(account);
    buttonDelAll.push(buttonDel); 
    buttonEditAll.push(buttonEdit);
    containerInput.push(inputAllValue);
    page = accountAll.slice(0,list);
    accountContainer.innerHTML = page.map((item) => `<li class="acc">${item.innerHTML}</li>`).join('');
    }
   

        const edit = document.querySelectorAll(".edit")
        const liAll = document.querySelectorAll(".acc");
        const deletes = document.querySelectorAll(".delete")

    //Пагинация
    pagesNumber = Math.ceil(accountAll.length / list);

    if(step === pagesNumber) {
        step = step + 1;
        const paginationButton = document.createElement("button");
        paginationButton.innerText = `${pagesNumber}`;
        paginationButton.classList = "list-number"
        containerPagination.appendChild(paginationButton);
        paginationButtonAll.push(paginationButton);
    }
    for(let i = 0; i < paginationButtonAll.length; i++) {
        paginationButtonAll[i].addEventListener("click", () => {
            page = accountAll.slice(i * list,(i + 1) * list);
            accountContainer.innerHTML = page.map((item) => `<li class="acc">${item.innerHTML}</li>`).join('');
        });
    }

    
    formButton.innerText = "Добавить";
    form.style.display = "none";
    //удаление аккаунта
    for(let i = 0; i < deletes.length; i++) {
        deletes[i].addEventListener("click", () => {
            liAll[i].remove();
        });
        //редактирование аккаунта
        edit[i].addEventListener("click", () => {
            accountNumber = i;
            console.log(inputAll[0])
            form.style.display = "flex";
            formButton.innerText = "Изменить";
            inputAll[0].value = `${containerInput[i][0]}`;
            inputAll[1].value = `${containerInput[i][1]}`;
            inputAll[2].value = `${containerInput[i][2]}`;
            inputAll[3].value = `${containerInput[i][3]}`;
            inputAll[4].value = `${containerInput[i][4]}`;
            inputAll[5].value = `${containerInput[i][5]}`;
            inputAll[6].value = `${containerInput[i][6]}`;
            inputAll[7].value = `${containerInput[i][7]}`;
        });
    };

});