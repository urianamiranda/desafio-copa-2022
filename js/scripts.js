const paises = [];
let grupoA = [];
let grupoB = [];
let grupoC = [];
let grupoD = [];
let grupoE = [];
let grupoF = [];
let grupoG = [];
let grupoH = [];

function get_random(list, qtd=1) {
    const result = []

    for (let index = 0; index < qtd; index++) {
        const item = list[Math.floor((Math.random()*list.length))];
        result.push(item);
        list = remove_itens(list,[item]);
    }

    return result;
}

function remove_itens(list, itens) {
    for (let index = 0; index < itens.length; index++) {
        list = list.filter(function(e) {
            return e != itens[index];
        })
    }

    return list;
}

function gera_chaves() {
    let lista = paises;
    grupoA = get_random(lista, 4);
    lista = remove_itens(lista,grupoA)
    grupoB = get_random(lista, 4);
    lista = remove_itens(lista,grupoB)
    grupoC = get_random(lista, 4);
    lista = remove_itens(lista,grupoC)
    grupoD = get_random(lista, 4);
    lista = remove_itens(lista,grupoD)
    grupoE = get_random(lista, 4);
    lista = remove_itens(lista,grupoE)
    grupoF = get_random(lista, 4);
    lista = remove_itens(lista,grupoF)
    grupoG = get_random(lista, 4);
    lista = remove_itens(lista,grupoG)
    grupoH = get_random(lista, 4);
    lista = remove_itens(lista,grupoH)

    let html = "";
    for (let index = 0; index < grupoA.length; index++) {
        item = grupoA[index]
        html += `<tr><td><img src="img/${item["Token"]}.png" class="team-img">${item["Name"]}</td></tr>`
    }
    $("#grupo-a tbody").html(html)

    html = "";
    for (let index = 0; index < grupoB.length; index++) {
        item = grupoB[index]
        html += `<tr><td><img src="img/${item["Token"]}.png" class="team-img">${item["Name"]}</td></tr>`
    }
    $("#grupo-b tbody").html(html)

    html = "";
    for (let index = 0; index < grupoC.length; index++) {
        item = grupoC[index]
        html += `<tr><td><img src="img/${item["Token"]}.png" class="team-img">${item["Name"]}</td></tr>`
    }
    $("#grupo-c tbody").html(html)

    html = "";
    for (let index = 0; index < grupoD.length; index++) {
        item = grupoD[index]
        html += `<tr><td><img src="img/${item["Token"]}.png" class="team-img">${item["Name"]}</td></tr>`
    }
    $("#grupo-d tbody").html(html)
    
    html = "";
    for (let index = 0; index < grupoE.length; index++) {
        item = grupoE[index]
        html += `<tr><td><img src="img/${item["Token"]}.png" class="team-img">${item["Name"]}</td></tr>`
    }
    $("#grupo-e tbody").html(html)

    html = "";
    for (let index = 0; index < grupoF.length; index++) {
        item = grupoF[index]
        html += `<tr><td><img src="img/${item["Token"]}.png" class="team-img">${item["Name"]}</td></tr>`
    }
    $("#grupo-f tbody").html(html)

    html = "";
    for (let index = 0; index < grupoG.length; index++) {
        item = grupoG[index]
        html += `<tr><td><img src="img/${item["Token"]}.png" class="team-img">${item["Name"]}</td></tr>`
    }
    $("#grupo-g tbody").html(html)

    html = "";
    for (let index = 0; index < grupoH.length; index++) {
        item = grupoH[index]
        html += `<tr><td><img src="img/${item["Token"]}.png" class="team-img">${item["Name"]}</td></tr>`
    }
    $("#grupo-h tbody").html(html)
};
$( document ).ready(function() {
    $.ajax({
        type: "GET",
        url: "https://estagio.geopostenergy.com/WorldCup/GetAllTeams",
        headers: {"git-user": "urianamiranda"},
        success: response => {
            for (let index = 0; index < response.Result.length; index++) {
                paises.push(response.Result[index]);               
            }
        },
    }).done(function() {
        //console.log(paises);
    });
});      

