// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// poi chiedi la sua età
// Infine scrivi sulla pagina nomecognomecolorepreferito21 (dove il 21 è in questo caso l'età)


let nomeUtente = prompt ("Qual'è il tuo nome?");
console.log (nomeUtente);

let cognomeUtente = prompt ("Qual'è il tuo cognome?");
console.log (cognomeUtente);

let colorePreferito = prompt ("Qual'è il tuo colore preferito?");
console.log (colorePreferito);

let etaUtente = prompt ("Quanti anni hai?");
console.log (etaUtente);

const somma =
`
${nomeUtente}${cognomeUtente}${colorePreferito}${etaUtente}
`;
console.log (somma);

const elemento = document.getElementById('risultato');

elemento.innerHTML = somma;



