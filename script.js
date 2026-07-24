function newFact() {
    const random = Math.floor(Math.random() * facts.length);
    document.getElementById("fact").textContent = facts[random];
}
