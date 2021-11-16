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
        const data = request.response;

        if (selectedPeriod === 'daily') {
            dailyBtn.style.color = '#ffffff';
            weeklyBtn.style.color = '#bdc1ff';
            monthlyBtn.style.color = '#bdc1ff';
        }
        else if (selectedPeriod === 'weekly') {
            dailyBtn.style.color = '#bdc1ff';
            weeklyBtn.style.color = '#ffffff';
            monthlyBtn.style.color = '#bdc1ff';
        }
        else if (selectedPeriod === 'monthly') {
            dailyBtn.style.color = '#bdc1ff';
            weeklyBtn.style.color = '#bdc1ff';
            monthlyBtn.style.color = '#ffffff';
        }

        updateStats(workElement, 0, data, selectedPeriod);
        updateStats(playElement, 1, data, selectedPeriod);
        updateStats(studyElement, 2, data, selectedPeriod);
        updateStats(exerciseElement, 3, data, selectedPeriod);
        updateStats(socialElement, 4, data, selectedPeriod);
        updateStats(selfCareElement, 5, data, selectedPeriod);
    }
}

const updateStats = (element, elementIndex, data, selectedPeriod) => {
    let addedText;

    if (selectedPeriod === 'daily') {
        addedText = "Yesterday - ";
    }
    else if (selectedPeriod === 'weekly') {
        addedText = "Last Week - ";
    }
    else if (selectedPeriod === 'monthly') {
        addedText = "Last Month - ";
    }
    else {
        console.error('Unknown selected period!');
    }

    element.querySelector('p').innerHTML = data[elementIndex].timeframes[selectedPeriod].current + "hrs";
    element.querySelector('small').innerHTML = addedText + data[elementIndex].timeframes[selectedPeriod].previous + "hrs";
}

/* Setting daily, weekly and monthly buttons */
dailyBtn.addEventListener('click', () => requestAndSet('daily'));
weeklyBtn.addEventListener('click', () => requestAndSet('weekly'));
monthlyBtn.addEventListener('click', () => requestAndSet('monthly'));

requestAndSet('weekly');