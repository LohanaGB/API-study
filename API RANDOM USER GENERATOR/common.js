function getAPI(number){
	let url = `https://randomuser.me/api/?results=${number}`;
	
	const xhttp = new XMLHttpRequest();
	xhttp.open("GET", url, false);
	xhttp.send();
	
	const data = JSON.parse(xhttp.responseText);
	
    const dataResults = data.results;

	console.log(dataResults);

    //HTML
    let resultHTML = '';

    dataResults.map(function(item){
        const avatar = item.picture.large;
        const name = item.name.first;
        const cel = item.cell;
        const email = item.email;
        const login = item.login.username;
    
        resultHTML += `<div class="col-md-4">`;
            resultHTML += `<div class="box">`;
                resultHTML += `<img src="${avatar}" alt="woman">`;
                resultHTML += `<ul>`;
                    resultHTML += `<li>${name}</li>`;
                    resultHTML += `<li>${cel}</li>`;
                    resultHTML += `<li>${email}</li>`;
                    resultHTML += `<li>${login}</li>`;
                resultHTML += `</ul>`;
            resultHTML += `</div>`;
        resultHTML += `</div>`;
    

    })

    const boxContent = document.querySelector('.boxContent');
    boxContent.innerHTML = resultHTML;

}

function find() {
    const findOne = document.querySelector('.find');
    const num = findOne.value;
    console.log(num);

    if(num > 0) {
        getAPI(num);
    } else {
        alert('[ERRO] Sem resultados!');
    }
}




//WINDOW ONLOAD
window.onload = function() {
    
}