#pragma strict

var hp_ui : GameObject;

function LostHP (amount : int) {
	hp_ui.SendMessage("LostHP",amount);
		
}