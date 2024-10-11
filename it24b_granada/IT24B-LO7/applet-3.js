class DataLogger {
    constructor(buttonId, cardContainerId, clearButtonId, logCountId) {
        this.logButton = document.getElementById(buttonId);
        this.cardContainer = document.getElementById(cardContainerId);
        this.clearButton = document.getElementById(clearButtonId);
        this.logCountElement = document.getElementById(logCountId);
        this.loggedData = [];

        this.logButton.addEventListener('click', () => this.logData());
        this.clearButton.addEventListener('click', () => this.clearLogs());
        
        this.updateUI();  
    }

    logData() {
        const timestamp = new Date().toLocaleString();
        this.loggedData.push(timestamp);
        this.updateUI();
    }

    clearLogs() {
        this.loggedData = [];
        this.updateUI();
    }

    createCard(data) {
        const card = document.createElement('div');
        card.className = 'card mb-2';

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        const title = document.createElement('h5');
        title.className = 'card-title';
        title.textContent = 'Logged Data';

        const content = document.createElement('p');
        content.className = 'card-text';
        content.textContent = data;

        cardBody.appendChild(title);
        cardBody.appendChild(content);
        card.appendChild(cardBody);

        return card;
    }

    updateUI() {
      
        this.cardContainer.innerHTML = '';
        
       
        this.loggedData.forEach(data => {
            this.cardContainer.appendChild(this.createCard(data));
        });

        
        this.updateLogCount();
    }

    updateLogCount() {
        const logCount = this.loggedData.length;
        this.logCountElement.textContent = `Total Logs: ${logCount}`;
        this.clearButton.disabled = logCount === 0;  
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new DataLogger('logButton', 'cardContainer', 'clearButton', 'logCount');
});
