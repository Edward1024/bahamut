#pragma strict
var width : float;
var height : float;
var timeLeft : float;
var timeAmount : float;

function Start () {
	
	
	width = GetComponent(RectTransform).sizeDelta.x;
	height = GetComponent(RectTransform).sizeDelta.y;

}

function Update () {
	if(timeLeft > 0) {
		timeLeft -= Time.deltaTime;
		GetComponentInParent(Button).interactable = false;
		}
		else {
			GetComponentInParent(Button).interactable = true;
		}
		var rate : float = timeLeft / timeAmount;
		
		GetComponent(RectTransform).sizeDelta = new Vector2(width * rate, height * rate);
}

function Run () {
	timeLeft = timeAmount;
}