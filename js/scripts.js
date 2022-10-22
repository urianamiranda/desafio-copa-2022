const paises = [];
let grupoA = [];
let grupoB = [];
let grupoC = [];
let grupoD = [];
let grupoE = [];
let grupoF = [];
let grupoG = [];
let grupoH = [];
let rodadas = 0;
let dadosRodada = [];

function get_random(list, qtd=1) {
    const result = []

    for (let index = 0; index < qtd; index++) {
        const item = list[Math.floor((Math.random()*list.length))];
        result.push(item);
        list = remove_itens(list,[item]);
    }

    return qtd == 1 ? result[0] : result;
}

function remove_itens(list, itens) {
    for (let index = 0; index < itens.length; index++) {
        list = list.filter(function(e) {
            return e != itens[index];
        })
    }

    return list;
}

function gera_grupos() {
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
    $("#grupo-c tbody").html(html);

    html = "";
    for (let index = 0; index < grupoD.length; index++) {
        item = grupoD[index]
        html += `<tr><td><img src="img/${item["Token"]}.png" class="team-img">${item["Name"]}</td></tr>`
    }
    $("#grupo-d tbody").html(html);
    
    html = "";
    for (let index = 0; index < grupoE.length; index++) {
        item = grupoE[index]
        html += `<tr><td><img src="img/${item["Token"]}.png" class="team-img">${item["Name"]}</td></tr>`
    }
    $("#grupo-e tbody").html(html);

    html = "";
    for (let index = 0; index < grupoF.length; index++) {
        item = grupoF[index]
        html += `<tr><td><img src="img/${item["Token"]}.png" class="team-img">${item["Name"]}</td></tr>`
    }
    $("#grupo-f tbody").html(html);

    html = "";
    for (let index = 0; index < grupoG.length; index++) {
        item = grupoG[index]
        html += `<tr><td><img src="img/${item["Token"]}.png" class="team-img">${item["Name"]}</td></tr>`
    }
    $("#grupo-g tbody").html(html);

    html = "";
    for (let index = 0; index < grupoH.length; index++) {
        item = grupoH[index]
        html += `<tr><td><img src="img/${item["Token"]}.png" class="team-img">${item["Name"]}</td></tr>`
    }
    $("#grupo-h tbody").html(html);
};

function inicia_rodada() {
    rodadas++;
    let placar = [];
    let html = "";
    if (rodadas <= 3) {
        //grupoA
        placar = [get_random([0,1,2,3,4,5]),get_random([0,1,2,3,4,5]),get_random([0,1,2,3,4,5]),get_random([0,1,2,3,4,5])];
        if (typeof dadosRodada[grupoA[0].Token] === 'undefined') {
            dadosRodada[grupoA[0].Token] = {nome: grupoA[0].Name, pontos: 0, gols: 0, saldo: 0}
        }
        if (typeof dadosRodada[grupoA[1].Token] === 'undefined') {
            dadosRodada[grupoA[1].Token] = {nome: grupoA[1].Name, pontos: 0, gols: 0, saldo: 0}
        }
        if (typeof dadosRodada[grupoA[2].Token] === 'undefined') {
            dadosRodada[grupoA[2].Token] = {nome: grupoA[2].Name, pontos: 0, gols: 0, saldo: 0}
        }
        if (typeof dadosRodada[grupoA[3].Token] === 'undefined') {
            dadosRodada[grupoA[3].Token] = {nome: grupoA[3].Name, pontos: 0, gols: 0, saldo: 0}
        }

        if (placar[0] > placar[1]) {          
            dadosRodada[grupoA[0].Token].pontos += 3;
            dadosRodada[grupoA[0].Token].gols += placar[0];
            dadosRodada[grupoA[0].Token].saldo += (placar[0] - placar[1]);

            dadosRodada[grupoA[1].Token].gols += placar[1];
            dadosRodada[grupoA[1].Token].saldo += (placar[1] - placar[0]);
        }
        if (placar[0] < placar[1]) {
            dadosRodada[grupoA[0].Token].gols += placar[0];
            dadosRodada[grupoA[0].Token].saldo += (placar[0] - placar[1]);

            dadosRodada[grupoA[1].Token].pontos += 3;
            dadosRodada[grupoA[1].Token].gols += placar[1];
            dadosRodada[grupoA[1].Token].saldo += (placar[1] - placar[0]);
        }
        if (placar[0] == placar[1]) {
            dadosRodada[grupoA[0].Token].pontos += 1;
            dadosRodada[grupoA[0].Token].gols += placar[0];

            dadosRodada[grupoA[1].Token].pontos += 1;
            dadosRodada[grupoA[1].Token].gols += placar[1];
        }

        if (placar[2] > placar[3]) {          
            dadosRodada[grupoA[2].Token].pontos += 3;
            dadosRodada[grupoA[2].Token].gols += placar[2];
            dadosRodada[grupoA[2].Token].saldo += (placar[2] - placar[3]);

            dadosRodada[grupoA[3].Token].gols += placar[3];
            dadosRodada[grupoA[3].Token].saldo += (placar[3] - placar[2]);
        }
        if (placar[2] < placar[3]) {
            dadosRodada[grupoA[2].Token].gols += placar[2];
            dadosRodada[grupoA[2].Token].saldo += (placar[2] - placar[3]);

            dadosRodada[grupoA[3].Token].pontos += 3;
            dadosRodada[grupoA[3].Token].gols += placar[3];
            dadosRodada[grupoA[3].Token].saldo += (placar[3] - placar[2]);
        }
        if (placar[2] == placar[3]) {
            dadosRodada[grupoA[2].Token].pontos += 1;
            dadosRodada[grupoA[2].Token].gols += placar[2];

            dadosRodada[grupoA[3].Token].pontos += 1;
            dadosRodada[grupoA[3].Token].gols += placar[3];
        }
        
        html = `<strong>Rodada ${rodadas}</strong><br>`;
        html += `${grupoA[0].Name} ${placar[0]} x ${placar[1]} ${grupoA[1].Name}<br>`;
        html += `${grupoA[2].Name} ${placar[2]} x ${placar[3]} ${grupoA[3].Name}<br><br>`;
        $("#rodadas-grupo-a div").append(html);
        
        //grupoB
        placar = [get_random([0,1,2,3,4,5]),get_random([0,1,2,3,4,5]),get_random([0,1,2,3,4,5]),get_random([0,1,2,3,4,5])];
        if (typeof dadosRodada[grupoB[0].Token] === 'undefined') {
            dadosRodada[grupoB[0].Token] = {nome: grupoB[0].Name, pontos: 0, gols: 0, saldo: 0}
        }
        if (typeof dadosRodada[grupoB[1].Token] === 'undefined') {
            dadosRodada[grupoB[1].Token] = {nome: grupoB[1].Name, pontos: 0, gols: 0, saldo: 0}
        }
        if (typeof dadosRodada[grupoB[2].Token] === 'undefined') {
            dadosRodada[grupoB[2].Token] = {nome: grupoB[2].Name, pontos: 0, gols: 0, saldo: 0}
        }
        if (typeof dadosRodada[grupoB[3].Token] === 'undefined') {
            dadosRodada[grupoB[3].Token] = {nome: grupoB[3].Name, pontos: 0, gols: 0, saldo: 0}
        }

        if (placar[0] > placar[1]) {          
            dadosRodada[grupoB[0].Token].pontos += 3;
            dadosRodada[grupoB[0].Token].gols += placar[0];
            dadosRodada[grupoB[0].Token].saldo += (placar[0] - placar[1]);

            dadosRodada[grupoB[1].Token].gols += placar[1];
            dadosRodada[grupoB[1].Token].saldo += (placar[1] - placar[0]);
        }
        if (placar[0] < placar[1]) {
            dadosRodada[grupoB[0].Token].gols += placar[0];
            dadosRodada[grupoB[0].Token].saldo += (placar[0] - placar[1]);

            dadosRodada[grupoB[1].Token].pontos += 3;
            dadosRodada[grupoB[1].Token].gols += placar[1];
            dadosRodada[grupoB[1].Token].saldo += (placar[1] - placar[0]);
        }
        if (placar[0] == placar[1]) {
            dadosRodada[grupoB[0].Token].pontos += 1;
            dadosRodada[grupoB[0].Token].gols += placar[0];

            dadosRodada[grupoB[1].Token].pontos += 1;
            dadosRodada[grupoB[1].Token].gols += placar[1];
        }

        if (placar[2] > placar[3]) {          
            dadosRodada[grupoB[2].Token].pontos += 3;
            dadosRodada[grupoB[2].Token].gols += placar[2];
            dadosRodada[grupoB[2].Token].saldo += (placar[2] - placar[3]);

            dadosRodada[grupoB[3].Token].gols += placar[3];
            dadosRodada[grupoB[3].Token].saldo += (placar[3] - placar[2]);
        }
        if (placar[2] < placar[3]) {
            dadosRodada[grupoB[2].Token].gols += placar[2];
            dadosRodada[grupoB[2].Token].saldo += (placar[2] - placar[3]);

            dadosRodada[grupoB[3].Token].pontos += 3;
            dadosRodada[grupoB[3].Token].gols += placar[3];
            dadosRodada[grupoB[3].Token].saldo += (placar[3] - placar[2]);
        }
        if (placar[2] == placar[3]) {
            dadosRodada[grupoB[2].Token].pontos += 1;
            dadosRodada[grupoB[2].Token].gols += placar[2];

            dadosRodada[grupoB[3].Token].pontos += 1;
            dadosRodada[grupoB[3].Token].gols += placar[3];
        }
        
        html = `<strong>Rodada ${rodadas}</strong><br>`;
        html += `${grupoB[0].Name} ${placar[0]} x ${placar[1]} ${grupoB[1].Name}<br>`;
        html += `${grupoB[2].Name} ${placar[2]} x ${placar[3]} ${grupoB[3].Name}<br><br>`;
        $("#rodadas-grupo-b div").append(html);

        //grupoC
        placar = [get_random([0,1,2,3,4,5]),get_random([0,1,2,3,4,5]),get_random([0,1,2,3,4,5]),get_random([0,1,2,3,4,5])];
        if (typeof dadosRodada[grupoC[0].Token] === 'undefined') {
            dadosRodada[grupoC[0].Token] = {nome: grupoC[0].Name, pontos: 0, gols: 0, saldo: 0}
        }
        if (typeof dadosRodada[grupoC[1].Token] === 'undefined') {
            dadosRodada[grupoC[1].Token] = {nome: grupoC[1].Name, pontos: 0, gols: 0, saldo: 0}
        }
        if (typeof dadosRodada[grupoC[2].Token] === 'undefined') {
            dadosRodada[grupoC[2].Token] = {nome: grupoC[2].Name, pontos: 0, gols: 0, saldo: 0}
        }
        if (typeof dadosRodada[grupoC[3].Token] === 'undefined') {
            dadosRodada[grupoC[3].Token] = {nome: grupoC[3].Name, pontos: 0, gols: 0, saldo: 0}
        }

        if (placar[0] > placar[1]) {          
            dadosRodada[grupoC[0].Token].pontos += 3;
            dadosRodada[grupoC[0].Token].gols += placar[0];
            dadosRodada[grupoC[0].Token].saldo += (placar[0] - placar[1]);

            dadosRodada[grupoC[1].Token].gols += placar[1];
            dadosRodada[grupoC[1].Token].saldo += (placar[1] - placar[0]);
        }
        if (placar[0] < placar[1]) {
            dadosRodada[grupoC[0].Token].gols += placar[0];
            dadosRodada[grupoC[0].Token].saldo += (placar[0] - placar[1]);

            dadosRodada[grupoC[1].Token].pontos += 3;
            dadosRodada[grupoC[1].Token].gols += placar[1];
            dadosRodada[grupoC[1].Token].saldo += (placar[1] - placar[0]);
        }
        if (placar[0] == placar[1]) {
            dadosRodada[grupoC[0].Token].pontos += 1;
            dadosRodada[grupoC[0].Token].gols += placar[0];

            dadosRodada[grupoC[1].Token].pontos += 1;
            dadosRodada[grupoC[1].Token].gols += placar[1];
        }

        if (placar[2] > placar[3]) {          
            dadosRodada[grupoC[2].Token].pontos += 3;
            dadosRodada[grupoC[2].Token].gols += placar[2];
            dadosRodada[grupoC[2].Token].saldo += (placar[2] - placar[3]);

            dadosRodada[grupoC[3].Token].gols += placar[3];
            dadosRodada[grupoC[3].Token].saldo += (placar[3] - placar[2]);
        }
        if (placar[2] < placar[3]) {
            dadosRodada[grupoC[2].Token].gols += placar[2];
            dadosRodada[grupoC[2].Token].saldo += (placar[2] - placar[3]);

            dadosRodada[grupoC[3].Token].pontos += 3;
            dadosRodada[grupoC[3].Token].gols += placar[3];
            dadosRodada[grupoC[3].Token].saldo += (placar[3] - placar[2]);
        }
        if (placar[2] == placar[3]) {
            dadosRodada[grupoC[2].Token].pontos += 1;
            dadosRodada[grupoC[2].Token].gols += placar[2];

            dadosRodada[grupoC[3].Token].pontos += 1;
            dadosRodada[grupoC[3].Token].gols += placar[3];
        }
        
        html = `<strong>Rodada ${rodadas}</strong><br>`;
        html += `${grupoC[0].Name} ${placar[0]} x ${placar[1]} ${grupoC[1].Name}<br>`;
        html += `${grupoC[2].Name} ${placar[2]} x ${placar[3]} ${grupoC[3].Name}<br><br>`;
        $("#rodadas-grupo-c div").append(html);

        //grupoD
        placar = [get_random([0,1,2,3,4,5]),get_random([0,1,2,3,4,5]),get_random([0,1,2,3,4,5]),get_random([0,1,2,3,4,5])];
        if (typeof dadosRodada[grupoD[0].Token] === 'undefined') {
            dadosRodada[grupoD[0].Token] = {nome: grupoD[0].Name, pontos: 0, gols: 0, saldo: 0}
        }
        if (typeof dadosRodada[grupoD[1].Token] === 'undefined') {
            dadosRodada[grupoD[1].Token] = {nome: grupoD[1].Name, pontos: 0, gols: 0, saldo: 0}
        }
        if (typeof dadosRodada[grupoD[2].Token] === 'undefined') {
            dadosRodada[grupoD[2].Token] = {nome: grupoD[2].Name, pontos: 0, gols: 0, saldo: 0}
        }
        if (typeof dadosRodada[grupoD[3].Token] === 'undefined') {
            dadosRodada[grupoD[3].Token] = {nome: grupoD[3].Name, pontos: 0, gols: 0, saldo: 0}
        }

        if (placar[0] > placar[1]) {          
            dadosRodada[grupoD[0].Token].pontos += 3;
            dadosRodada[grupoD[0].Token].gols += placar[0];
            dadosRodada[grupoD[0].Token].saldo += (placar[0] - placar[1]);

            dadosRodada[grupoD[1].Token].gols += placar[1];
            dadosRodada[grupoD[1].Token].saldo += (placar[1] - placar[0]);
        }
        if (placar[0] < placar[1]) {
            dadosRodada[grupoD[0].Token].gols += placar[0];
            dadosRodada[grupoD[0].Token].saldo += (placar[0] - placar[1]);

            dadosRodada[grupoD[1].Token].pontos += 3;
            dadosRodada[grupoD[1].Token].gols += placar[1];
            dadosRodada[grupoD[1].Token].saldo += (placar[1] - placar[0]);
        }
        if (placar[0] == placar[1]) {
            dadosRodada[grupoD[0].Token].pontos += 1;
            dadosRodada[grupoD[0].Token].gols += placar[0];

            dadosRodada[grupoD[1].Token].pontos += 1;
            dadosRodada[grupoD[1].Token].gols += placar[1];
        }

        if (placar[2] > placar[3]) {          
            dadosRodada[grupoD[2].Token].pontos += 3;
            dadosRodada[grupoD[2].Token].gols += placar[2];
            dadosRodada[grupoD[2].Token].saldo += (placar[2] - placar[3]);

            dadosRodada[grupoD[3].Token].gols += placar[3];
            dadosRodada[grupoD[3].Token].saldo += (placar[3] - placar[2]);
        }
        if (placar[2] < placar[3]) {
            dadosRodada[grupoD[2].Token].gols += placar[2];
            dadosRodada[grupoD[2].Token].saldo += (placar[2] - placar[3]);

            dadosRodada[grupoD[3].Token].pontos += 3;
            dadosRodada[grupoD[3].Token].gols += placar[3];
            dadosRodada[grupoD[3].Token].saldo += (placar[3] - placar[2]);
        }
        if (placar[2] == placar[3]) {
            dadosRodada[grupoD[2].Token].pontos += 1;
            dadosRodada[grupoD[2].Token].gols += placar[2];

            dadosRodada[grupoD[3].Token].pontos += 1;
            dadosRodada[grupoD[3].Token].gols += placar[3];
        }
        
        html = `<strong>Rodada ${rodadas}</strong><br>`;
        html += `${grupoD[0].Name} ${placar[0]} x ${placar[1]} ${grupoD[1].Name}<br>`;
        html += `${grupoD[2].Name} ${placar[2]} x ${placar[3]} ${grupoD[3].Name}<br><br>`;
        $("#rodadas-grupo-d div").append(html);

        //grupoE
        placar = [get_random([0,1,2,3,4,5]),get_random([0,1,2,3,4,5]),get_random([0,1,2,3,4,5]),get_random([0,1,2,3,4,5])];
        if (typeof dadosRodada[grupoE[0].Token] === 'undefined') {
            dadosRodada[grupoE[0].Token] = {nome: grupoE[0].Name, pontos: 0, gols: 0, saldo: 0}
        }
        if (typeof dadosRodada[grupoE[1].Token] === 'undefined') {
            dadosRodada[grupoE[1].Token] = {nome: grupoE[1].Name, pontos: 0, gols: 0, saldo: 0}
        }
        if (typeof dadosRodada[grupoE[2].Token] === 'undefined') {
            dadosRodada[grupoE[2].Token] = {nome: grupoE[2].Name, pontos: 0, gols: 0, saldo: 0}
        }
        if (typeof dadosRodada[grupoE[3].Token] === 'undefined') {
            dadosRodada[grupoE[3].Token] = {nome: grupoE[3].Name, pontos: 0, gols: 0, saldo: 0}
        }

        if (placar[0] > placar[1]) {          
            dadosRodada[grupoE[0].Token].pontos += 3;
            dadosRodada[grupoE[0].Token].gols += placar[0];
            dadosRodada[grupoE[0].Token].saldo += (placar[0] - placar[1]);

            dadosRodada[grupoE[1].Token].gols += placar[1];
            dadosRodada[grupoE[1].Token].saldo += (placar[1] - placar[0]);
        }
        if (placar[0] < placar[1]) {
            dadosRodada[grupoE[0].Token].gols += placar[0];
            dadosRodada[grupoE[0].Token].saldo += (placar[0] - placar[1]);

            dadosRodada[grupoE[1].Token].pontos += 3;
            dadosRodada[grupoE[1].Token].gols += placar[1];
            dadosRodada[grupoE[1].Token].saldo += (placar[1] - placar[0]);
        }
        if (placar[0] == placar[1]) {
            dadosRodada[grupoE[0].Token].pontos += 1;
            dadosRodada[grupoE[0].Token].gols += placar[0];

            dadosRodada[grupoE[1].Token].pontos += 1;
            dadosRodada[grupoE[1].Token].gols += placar[1];
        }

        if (placar[2] > placar[3]) {          
            dadosRodada[grupoE[2].Token].pontos += 3;
            dadosRodada[grupoE[2].Token].gols += placar[2];
            dadosRodada[grupoE[2].Token].saldo += (placar[2] - placar[3]);

            dadosRodada[grupoE[3].Token].gols += placar[3];
            dadosRodada[grupoE[3].Token].saldo += (placar[3] - placar[2]);
        }
        if (placar[2] < placar[3]) {
            dadosRodada[grupoE[2].Token].gols += placar[2];
            dadosRodada[grupoE[2].Token].saldo += (placar[2] - placar[3]);

            dadosRodada[grupoE[3].Token].pontos += 3;
            dadosRodada[grupoE[3].Token].gols += placar[3];
            dadosRodada[grupoE[3].Token].saldo += (placar[3] - placar[2]);
        }
        if (placar[2] == placar[3]) {
            dadosRodada[grupoE[2].Token].pontos += 1;
            dadosRodada[grupoE[2].Token].gols += placar[2];

            dadosRodada[grupoE[3].Token].pontos += 1;
            dadosRodada[grupoE[3].Token].gols += placar[3];
        }
        
        html = `<strong>Rodada ${rodadas}</strong><br>`;
        html += `${grupoE[0].Name} ${placar[0]} x ${placar[1]} ${grupoE[1].Name}<br>`;
        html += `${grupoE[2].Name} ${placar[2]} x ${placar[3]} ${grupoE[3].Name}<br><br>`;
        $("#rodadas-grupo-e div").append(html);

        //grupoF
        placar = [get_random([0,1,2,3,4,5]),get_random([0,1,2,3,4,5]),get_random([0,1,2,3,4,5]),get_random([0,1,2,3,4,5])];
        if (typeof dadosRodada[grupoF[0].Token] === 'undefined') {
            dadosRodada[grupoF[0].Token] = {nome: grupoF[0].Name, pontos: 0, gols: 0, saldo: 0}
        }
        if (typeof dadosRodada[grupoF[1].Token] === 'undefined') {
            dadosRodada[grupoF[1].Token] = {nome: grupoF[1].Name, pontos: 0, gols: 0, saldo: 0}
        }
        if (typeof dadosRodada[grupoF[2].Token] === 'undefined') {
            dadosRodada[grupoF[2].Token] = {nome: grupoF[2].Name, pontos: 0, gols: 0, saldo: 0}
        }
        if (typeof dadosRodada[grupoF[3].Token] === 'undefined') {
            dadosRodada[grupoF[3].Token] = {nome: grupoF[3].Name, pontos: 0, gols: 0, saldo: 0}
        }

        if (placar[0] > placar[1]) {          
            dadosRodada[grupoF[0].Token].pontos += 3;
            dadosRodada[grupoF[0].Token].gols += placar[0];
            dadosRodada[grupoF[0].Token].saldo += (placar[0] - placar[1]);

            dadosRodada[grupoF[1].Token].gols += placar[1];
            dadosRodada[grupoF[1].Token].saldo += (placar[1] - placar[0]);
        }
        if (placar[0] < placar[1]) {
            dadosRodada[grupoF[0].Token].gols += placar[0];
            dadosRodada[grupoF[0].Token].saldo += (placar[0] - placar[1]);

            dadosRodada[grupoF[1].Token].pontos += 3;
            dadosRodada[grupoF[1].Token].gols += placar[1];
            dadosRodada[grupoF[1].Token].saldo += (placar[1] - placar[0]);
        }
        if (placar[0] == placar[1]) {
            dadosRodada[grupoF[0].Token].pontos += 1;
            dadosRodada[grupoF[0].Token].gols += placar[0];

            dadosRodada[grupoF[1].Token].pontos += 1;
            dadosRodada[grupoF[1].Token].gols += placar[1];
        }

        if (placar[2] > placar[3]) {          
            dadosRodada[grupoF[2].Token].pontos += 3;
            dadosRodada[grupoF[2].Token].gols += placar[2];
            dadosRodada[grupoF[2].Token].saldo += (placar[2] - placar[3]);

            dadosRodada[grupoF[3].Token].gols += placar[3];
            dadosRodada[grupoF[3].Token].saldo += (placar[3] - placar[2]);
        }
        if (placar[2] < placar[3]) {
            dadosRodada[grupoF[2].Token].gols += placar[2];
            dadosRodada[grupoF[2].Token].saldo += (placar[2] - placar[3]);

            dadosRodada[grupoF[3].Token].pontos += 3;
            dadosRodada[grupoF[3].Token].gols += placar[3];
            dadosRodada[grupoF[3].Token].saldo += (placar[3] - placar[2]);
        }
        if (placar[2] == placar[3]) {
            dadosRodada[grupoF[2].Token].pontos += 1;
            dadosRodada[grupoF[2].Token].gols += placar[2];

            dadosRodada[grupoF[3].Token].pontos += 1;
            dadosRodada[grupoF[3].Token].gols += placar[3];
        }
        
        html = `<strong>Rodada ${rodadas}</strong><br>`;
        html += `${grupoF[0].Name} ${placar[0]} x ${placar[1]} ${grupoF[1].Name}<br>`;
        html += `${grupoF[2].Name} ${placar[2]} x ${placar[3]} ${grupoF[3].Name}<br><br>`;
        $("#rodadas-grupo-f div").append(html);

        //grupoG
        placar = [get_random([0,1,2,3,4,5]),get_random([0,1,2,3,4,5]),get_random([0,1,2,3,4,5]),get_random([0,1,2,3,4,5])];
        if (typeof dadosRodada[grupoG[0].Token] === 'undefined') {
            dadosRodada[grupoG[0].Token] = {nome: grupoG[0].Name, pontos: 0, gols: 0, saldo: 0}
        }
        if (typeof dadosRodada[grupoG[1].Token] === 'undefined') {
            dadosRodada[grupoG[1].Token] = {nome: grupoG[1].Name, pontos: 0, gols: 0, saldo: 0}
        }
        if (typeof dadosRodada[grupoG[2].Token] === 'undefined') {
            dadosRodada[grupoG[2].Token] = {nome: grupoG[2].Name, pontos: 0, gols: 0, saldo: 0}
        }
        if (typeof dadosRodada[grupoG[3].Token] === 'undefined') {
            dadosRodada[grupoG[3].Token] = {nome: grupoG[3].Name, pontos: 0, gols: 0, saldo: 0}
        }

        if (placar[0] > placar[1]) {          
            dadosRodada[grupoG[0].Token].pontos += 3;
            dadosRodada[grupoG[0].Token].gols += placar[0];
            dadosRodada[grupoG[0].Token].saldo += (placar[0] - placar[1]);

            dadosRodada[grupoG[1].Token].gols += placar[1];
            dadosRodada[grupoG[1].Token].saldo += (placar[1] - placar[0]);
        }
        if (placar[0] < placar[1]) {
            dadosRodada[grupoG[0].Token].gols += placar[0];
            dadosRodada[grupoG[0].Token].saldo += (placar[0] - placar[1]);

            dadosRodada[grupoG[1].Token].pontos += 3;
            dadosRodada[grupoG[1].Token].gols += placar[1];
            dadosRodada[grupoG[1].Token].saldo += (placar[1] - placar[0]);
        }
        if (placar[0] == placar[1]) {
            dadosRodada[grupoG[0].Token].pontos += 1;
            dadosRodada[grupoG[0].Token].gols += placar[0];

            dadosRodada[grupoG[1].Token].pontos += 1;
            dadosRodada[grupoG[1].Token].gols += placar[1];
        }

        if (placar[2] > placar[3]) {          
            dadosRodada[grupoG[2].Token].pontos += 3;
            dadosRodada[grupoG[2].Token].gols += placar[2];
            dadosRodada[grupoG[2].Token].saldo += (placar[2] - placar[3]);

            dadosRodada[grupoG[3].Token].gols += placar[3];
            dadosRodada[grupoG[3].Token].saldo += (placar[3] - placar[2]);
        }
        if (placar[2] < placar[3]) {
            dadosRodada[grupoG[2].Token].gols += placar[2];
            dadosRodada[grupoG[2].Token].saldo += (placar[2] - placar[3]);

            dadosRodada[grupoG[3].Token].pontos += 3;
            dadosRodada[grupoG[3].Token].gols += placar[3];
            dadosRodada[grupoG[3].Token].saldo += (placar[3] - placar[2]);
        }
        if (placar[2] == placar[3]) {
            dadosRodada[grupoG[2].Token].pontos += 1;
            dadosRodada[grupoG[2].Token].gols += placar[2];

            dadosRodada[grupoG[3].Token].pontos += 1;
            dadosRodada[grupoG[3].Token].gols += placar[3];
        }
        
        html = `<strong>Rodada ${rodadas}</strong><br>`;
        html += `${grupoG[0].Name} ${placar[0]} x ${placar[1]} ${grupoG[1].Name}<br>`;
        html += `${grupoG[2].Name} ${placar[2]} x ${placar[3]} ${grupoG[3].Name}<br><br>`;
        $("#rodadas-grupo-g div").append(html);

        //grupoH
        placar = [get_random([0,1,2,3,4,5]),get_random([0,1,2,3,4,5]),get_random([0,1,2,3,4,5]),get_random([0,1,2,3,4,5])];
        if (typeof dadosRodada[grupoH[0].Token] === 'undefined') {
            dadosRodada[grupoH[0].Token] = {nome: grupoH[0].Name, pontos: 0, gols: 0, saldo: 0}
        }
        if (typeof dadosRodada[grupoH[1].Token] === 'undefined') {
            dadosRodada[grupoH[1].Token] = {nome: grupoH[1].Name, pontos: 0, gols: 0, saldo: 0}
        }
        if (typeof dadosRodada[grupoH[2].Token] === 'undefined') {
            dadosRodada[grupoH[2].Token] = {nome: grupoH[2].Name, pontos: 0, gols: 0, saldo: 0}
        }
        if (typeof dadosRodada[grupoH[3].Token] === 'undefined') {
            dadosRodada[grupoH[3].Token] = {nome: grupoH[3].Name, pontos: 0, gols: 0, saldo: 0}
        }

        if (placar[0] > placar[1]) {          
            dadosRodada[grupoH[0].Token].pontos += 3;
            dadosRodada[grupoH[0].Token].gols += placar[0];
            dadosRodada[grupoH[0].Token].saldo += (placar[0] - placar[1]);

            dadosRodada[grupoH[1].Token].gols += placar[1];
            dadosRodada[grupoH[1].Token].saldo += (placar[1] - placar[0]);
        }
        if (placar[0] < placar[1]) {
            dadosRodada[grupoH[0].Token].gols += placar[0];
            dadosRodada[grupoH[0].Token].saldo += (placar[0] - placar[1]);

            dadosRodada[grupoH[1].Token].pontos += 3;
            dadosRodada[grupoH[1].Token].gols += placar[1];
            dadosRodada[grupoH[1].Token].saldo += (placar[1] - placar[0]);
        }
        if (placar[0] == placar[1]) {
            dadosRodada[grupoH[0].Token].pontos += 1;
            dadosRodada[grupoH[0].Token].gols += placar[0];

            dadosRodada[grupoH[1].Token].pontos += 1;
            dadosRodada[grupoH[1].Token].gols += placar[1];
        }

        if (placar[2] > placar[3]) {          
            dadosRodada[grupoH[2].Token].pontos += 3;
            dadosRodada[grupoH[2].Token].gols += placar[2];
            dadosRodada[grupoH[2].Token].saldo += (placar[2] - placar[3]);

            dadosRodada[grupoH[3].Token].gols += placar[3];
            dadosRodada[grupoH[3].Token].saldo += (placar[3] - placar[2]);
        }
        if (placar[2] < placar[3]) {
            dadosRodada[grupoH[2].Token].gols += placar[2];
            dadosRodada[grupoH[2].Token].saldo += (placar[2] - placar[3]);

            dadosRodada[grupoH[3].Token].pontos += 3;
            dadosRodada[grupoH[3].Token].gols += placar[3];
            dadosRodada[grupoH[3].Token].saldo += (placar[3] - placar[2]);
        }
        if (placar[2] == placar[3]) {
            dadosRodada[grupoH[2].Token].pontos += 1;
            dadosRodada[grupoH[2].Token].gols += placar[2];

            dadosRodada[grupoH[3].Token].pontos += 1;
            dadosRodada[grupoH[3].Token].gols += placar[3];
        }
        
        html = `<strong>Rodada ${rodadas}</strong><br>`;
        html += `${grupoH[0].Name} ${placar[0]} x ${placar[1]} ${grupoH[1].Name}<br>`;
        html += `${grupoH[2].Name} ${placar[2]} x ${placar[3]} ${grupoH[3].Name}<br><br>`;
        $("#rodadas-grupo-h div").append(html);
    }
}

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

