#pragma strict

var hp : int = 500 ;

function Damage (atk : int) {
	hp -= atk;
	}
	
	function Update () {
		if(hp <= 0)Destroy(gameObject);
		
}