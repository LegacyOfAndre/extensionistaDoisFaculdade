const btnDoar = document.querySelector("btn-doar")

btnDoar.addEventListener("click", fazerDoacao())

function fazerDoacao(){
    const nome = document.getElementById("nome");
    const quantia = document.getElementById("quantia");
    const msg = document.getElementById("msg");

    const novaLinha = document.createElement("tr");
    novaLinha.innerHTML = `
                    <td>${nome.value}</td>
                    <td>${quantia.value} R$</td>
                    <td>${msg.value}</td>
    `;

    const corpoTabela = document.getElementById("table-body");
    corpoTabela.appendChild(novaLinha);

    document.querySelector("form").reset();
}