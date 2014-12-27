#pragma strict

function Start () {

}

function LostHP (amount : int) {
	GameObject.Find("EnemyTowerHP").SendMessage("UI_LostHP",amount);
}