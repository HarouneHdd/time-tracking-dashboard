/* Getting elements */
const workElement = document.getElementById('work');
const playElement = document.getElementById('play');
const studyElement = document.getElementById('study');
const exerciseElement = document.getElementById('exercise');
const socialElement = document.getElementById('social');
const selfCareElement = document.getElementById('self-care');

/* Getting daily, weekly and monthly buttons */
const dailyBtn = document.getElementById('daily');
const weeklyBtn = document.getElementById('weekly');
const monthlyBtn = document.getElementById('monthly');

/* Getting the data to store it in a variable */
const requestAndSet = selectedPeriod => {
    let requestURL = 'data.json';

    let request = new XMLHttpRequest();
    request.open('GET', requestURL);
    
    request.responseType = 'json';
    request.send();
    
    request.onload = () => {
        const response = request.response;
        const data = JSON.stringify(response);
        console.log(data);
    
        if (selectedPeriod === 'daily') {
            dailyBtn.style.color = '#ffffff';
            weeklyBtn.style.color = '#bdc1ff';
            monthlyBtn.style.color = '#bdc1ff';

            workElement.querySelector('p').innerHTML = 'day';
            workElement.querySelector('small').innerHTML = '...';
        }
        else if (selectedPeriod === 'weekly') {
            dailyBtn.style.color = '#bdc1ff';
            weeklyBtn.style.color = '#ffffff';
            monthlyBtn.style.color = '#bdc1ff';

            workElement.querySelector('p').innerHTML = 'week';
            workElement.querySelector('small').innerHTML = '...';
        }
        else if (selectedPeriod === 'monthly') {
            dailyBtn.style.color = '#bdc1ff';
            weeklyBtn.style.color = '#bdc1ff';
            monthlyBtn.style.color = '#ffffff';

            workElement.querySelector('p').innerHTML = 'month';
            workElement.querySelector('small').innerHTML = '...';
        }
    }
}

/* Setting daily, weekly and monthly buttons */
dailyBtn.addEventListener('onClick', requestAndSet('daily'));
weeklyBtn.addEventListener('onClick', requestAndSet('weekly'));
monthlyBtn.addEventListener('onClick', requestAndSet('monthly'));
