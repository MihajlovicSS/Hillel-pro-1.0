let getAge = function(){
    let userName = prompt('Введите свое имя');    
    let message = 'Введите свой год рождения';
    let userYear = prompt(message);
    while(1){    
        if(userYear>1900 && userYear < 2022){
            break;
        }
        else{
            alert('Неправильный год рождения!')
            message = 'Введите ВЕРНЫЙ год рождения';
            userYear = prompt(message);
        }
    }
    let userAge = howOld(2022, userYear);
    console.log(userAge);
    confirm(userName + ', вам '+ userAge + ' ' + correctWordOfAge(userAge) + '?');
}
/*функция для расчета возраста*/
let howOld = function(thisYear, yearOfBirthday){
    return thisYear-yearOfBirthday;
}
/*функция для выявления корректного окончания*/
let correctWordOfAge = function(age){
    let result = '';
    if(age%10 == 1 && age != 11){
        result = 'год';
    }
    else if((age>1 && age<5) || (age>20 && (age%10==2 || age%10==3 || age%10==4))){
        result = 'года';
    }
    else{
        result = 'лет';
    }
    return result;
}

getAge();
