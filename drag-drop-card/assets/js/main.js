
const dropItems = document.getElementById('drag-items');

new Sortable(dropItems, {
    animation: 350,
    chosenClass: "sortable-chosen", 
    dragClass: "sortable-drag",
});