console.log("This is my index.js file");
//initialize the news api parameters
country = 'us';
let apiKey = '79a4d0125ea34e6daef7c6182b04e979'

//grab the news container
newsAccordian = document.getElementById('newsAccordian');

//create a ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`, true);
xhr.getResponseHeader('Content-type', 'application/json');

xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(json);

        let newsHtml = "";

        articles.forEach(function (element, index) {
            console.log(element, index)
            // console.log(articles[news]);
            let news = `
                <div class="accordion-item">
                    <h2 class="accordion-header" id="heading${index}">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                           <b>Breaking News ${index + 1}:  </b>
                            ${element["title"]}
                        </button>
                        </h2>
                        <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}"
                            data-bs-parent="#newsAccordian">
                            <div class="accordion-body">
                              
                                ${element["content"]}.<a href= "${element['url']}"  target="_blank">Read more at Inews </a>
                            </div>
                        </div>
                    </div>`
            newsHtml += news;
        });
        newsAccordian.innerHTML = newsHtml;
    }
    else {
        console.log("some error")
    }
}

xhr.send()
// we put it inito string
