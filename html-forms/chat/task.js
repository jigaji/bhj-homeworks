const chatWidgetSide = document.querySelector('.chat-widget__side');

const chatWidget = document.querySelector('.chat-widget');

const chatWidgetInput = document.getElementById('chat-widget__input');

const messages = document.querySelector( '.chat-widget__messages' );

const botAnsweres = [
    'Добрый день! До свидания!',
    'Где ваша совесть?',
    'Кто тут?',
    'Вы не купили ни одного товара для того, чтобы так с нами разговаривать!',
    'К сожалению, все операторы сейчас заняты. Не пишите нам больше',
    'Мы ничего не будем вам продавать!',
    'Добрый день, мы ещё не проснулись. Позвоните через 10 лет', 
  ];


chatWidgetSide.addEventListener('click', function() {

	chatWidget.classList.add('chat-widget_active');

});



chatWidget.addEventListener('keydown', function(event) {

	const time = new Date().getHours() + ":" + new Date().getMinutes();
	const message = chatWidgetInput.value;

	if (event.key === "Enter" && chatWidgetInput.checkValidity()) {		

		messages.innerHTML += 

			`<div class="message message_client">
				<div class="message__time"> ${time} </div>
				<div class="message__text">
				  ${message}
				</div>
			</div>
			<div class="message">
				<div class="message__time"> ${time} </div>
				<div class="message__text">
				${getRandomBotAnswer()}
				</div>
			</div>`;

		chatWidgetInput.value = "";

	}

});



function getRandomBotAnswer() {
    return botAnsweres[Math.floor(Math.random() * botAnsweres.length)];

};

