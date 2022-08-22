/*--------------Player Selection----------------*/
document.getElementById('btn-player-select-1').addEventListener("click", function () {
    display('player-name-1', 'btn-player-select-1')
});
document.getElementById('btn-player-select-2').addEventListener("click", function () {
    display('player-name-2', 'btn-player-select-2')
});
document.getElementById('btn-player-select-3').addEventListener("click", function () {
    display('player-name-3', 'btn-player-select-3')
});
document.getElementById('btn-player-select-4').addEventListener("click", function () {
    display('player-name-4', 'btn-player-select-4')
});
document.getElementById('btn-player-select-5').addEventListener("click", function () {
    display('player-name-5', 'btn-player-select-5')
});
document.getElementById('btn-player-select-6').addEventListener("click", function () {
    display('player-name-6', 'btn-player-select-6')
});
document.getElementById('btn-player-select-7').addEventListener("click", function () {
    display('player-name-7', 'btn-player-select-7')
});
document.getElementById('btn-player-select-8').addEventListener("click", function () {
    display('player-name-8', 'btn-player-select-8')
});
document.getElementById('btn-player-select-9').addEventListener("click", function () {
    display('player-name-9', 'btn-player-select-9')
});
/*--------------Budget Calculation---------------*/
document.getElementById('PlayerExpensesCalculate').addEventListener("click", function () {
    const count = document.getElementsByTagName('li').length;
    const input = parseInt(document.getElementById('PerPlayer').value);
    document.getElementById('PlayerExpenses').innerText = input * count;
});

document.getElementById('TotalCostCalculate').addEventListener("click", function () {
    const Coach = parseInt(document.getElementById('coach').value);
    const Manager = parseInt(document.getElementById('manager').value);
    const PlayerExpenses = parseInt(document.getElementById('PlayerExpenses').innerText);
    const TotalCost = PlayerExpenses + Coach + Manager;
    document.getElementById('TotalCost').innerText = TotalCost;
});