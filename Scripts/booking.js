// Write All `All Movies`  Page Script Here

let movies= JSON.parse(localStorage.getItem("movie-list"))
let tbody = document.querySelector("tbody");

let count = document.getElementById("movie-count");
count.innerText = movies.length;

let filter = document.getElementById("filter");
filter.addEventListener("change",filterMovies);


let buyMovies= JSON.parse(localStorage.getItem("buy-list")) || []

movieData(movies);

function movieData(res){
    tbody.innerHTML = null;
    
    res.forEach(function (el,i){

        let trow = document.createElement("tr")
    
        let td1 = document.createElement("td")
        td1.innerText = el.name;
    
        let td2 = document.createElement("td")
        td2.innerText = el.mainActor;
    
        let td3 = document.createElement("td")
        td3.innerText = el.desc;
    
        let td4 = document.createElement("td")
        td4.innerText = el.release;
    
        let td5 = document.createElement("td")
        td5.innerText = el.category;
    
        let td6 = document.createElement("td")
        td6.innerText = el.price;
    
        let td7 = document.createElement("td")
        td7.innerText="BUY"

        // td7.addEventListener("click", deleteData )
        td7.style.backgroundColor="green"
        td7.addEventListener("click", function(){
            deleteList(i);
            buy(el);})
    
    
    
        trow.append(td1, td2, td3, td4, td5, td6,td7)
        tbody.append(trow)


        
    });


}

function buy(el){
    buyMovies.push(el);
    // console.log(el)
    localStorage.setItem("buy-list",JSON.stringify(buyMovies))
   
    
}
function deleteList(i){
    movies.splice(i,1);
    localStorage.setItem("movie-list",JSON.stringify(movies))
    window.location.reload();
}

function filterMovies(event) {
    if(filter.value == ""){
        displayData(movies);

    }

    else {
        let filterData = movies.filter(function(el){
            return el.category == filter.value;
         })
         //console.log(filterData)
         movieData(filterData);
    }
}

