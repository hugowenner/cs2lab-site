// Aguarda o carregamento completo do documento HTML
document.addEventListener('DOMContentLoaded', () => {

    // Seleciona o botão de copiar pelo seu ID
    const copyButton = document.getElementById('copy-link-btn');

    // Adiciona um "ouvinte" de evento de clique ao botão
    copyButton.addEventListener('click', () => {
        // O link que será copiado. Substitua pelo seu link real!
        const discordLink = "SEU_LINK_DE_CONVITE_AQUI";

        // Usa a API do navegador para copiar o texto
        navigator.clipboard.writeText(discordLink).then(() => {
            // Se a cópia for bem-sucedida, exibe um alerta
            alert("Link do Discord copiado para a área de transferência!");
        }).catch(err => {
            // Se houver um erro, exibe no console
            console.error("Falha ao copiar o link: ", err);
            alert("Não foi possível copiar o link.");
        });
    });
});