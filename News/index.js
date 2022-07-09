console.log("This is project 3");

// Api Key 4e31b865b69345e9924af6dddb9bd688

//xhr

const xhr = new XMLHttpRequest();

xhr.open(
  "Get",
  "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=4e31b865b69345e9924af6dddb9bd688",
  true
);

xhr.onload = function () {
    if (this.status==200) {
        let json= JSON.parse(this.responseText)
        // console.log(json);
        populate(json)
        
    }else{
        console.log("Error");
    }
};

xhr.send();

function populate(json){
    
let news = document.getElementById("news");
news.style.margin = ` 10px 115px`;
news.style.listStyle=`none`
let article=json.articles

let newsbody=""
// for (let news in article) {
article.forEach(function(element,index) {

     newsbody += `       
    <div class="accordion-item">
    <h2 class="accordion-header" id="heading${index}">
    <button class="accordion-button " id ="newstitle"
    type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
    ${element.title}
    </button>
    </h2>

    <div id="collapse${index}" class="accordion-collapse collapse " aria-labelledby="heading${index}" data-bs-parent="#news">
    <div class="accordion-body" id="newsdescription">
    ${element.description}.<a href=${element.url} target=_blank> Read More </a> 
    </div>
    </div>
    
    </div>
    
    `
});

news.innerHTML=`<li>${newsbody}</li>  `
}