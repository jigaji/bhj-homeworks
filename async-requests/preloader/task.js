const items = document.getElementById('items');
const loader = document.getElementById('loader');

let currency = new XMLHttpRequest;
currency.open("get", "https://netology-slow-rest.herokuapp.com");
currency.send();

currency.addEventListener('readystatechange', function() {

    if (this.readyState == currency.DONE && this.status == 200) {
  
      loader.classList.remove('loader_active');
      var data = JSON.parse(this.responseText).response.Valute; 
    
      for (var valute in data) {
          items.innerHTML += `
          <div class="item">
              <div class="item__code">
                  ${data[valute].CharCode}
              </div>
              <div class="item__value">
                  ${data[valute].Value}
              </div>
              <div class="item__currency">
                  руб.
              </div>
          </div>
          `;    
      }          
    }
});  