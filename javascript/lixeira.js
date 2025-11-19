const container = document.getElementById("container")

sessionStorage.getItem("lixeiras").split(" ").forEach((el) => {
    $.ajax({
                url: `${el}`, // URL da sua API
                method: "GET",
                dataType: "json",
                success: function (dados) {
                    console.log("Dados recebidos:", dados);
                    container.innerHTML += `<div class="content_container">
                    <aside class="sidecard card">
                        <h3>${dados}</h3>
                        <p><strong>Status de armazenamento:</strong>${dados}</p>
                        <p><strong>Endereço:</strong>${dados}</p>
                    </aside>
                    <section class="details">
                        <div class="card table">
                        <h4>Dashboard</h4>
                        <table>
                            <thead><tr><th>data</th><th>tipo</th><th>hora</th><th>semana</th></tr></thead>
                            <tbody>
                            <tr><td>${dados}</td><td>${dados}</td><td>${dados}</td><td>${dados}</td></tr>
                            </tbody>
                        </table>
                        </div>
                    </section>
                    </div>`
                },
                error: function (xhr, status, erro) {
                    console.error("Erro ao buscar dados:", erro);
                }
            });
})