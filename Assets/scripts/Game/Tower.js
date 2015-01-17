#pragma strict

var hp : int = 500 ;

function Damage (atk : int) {
	hp -= atk;
	}
	
	function Update () {
		if(hp <= 0){
			if(gameObject.tag == "EnemyTower")
				PlayerPrefs.SetString("ResultMessage", "Congratulations! You Win!");
			else if(gameObject.tag == "MyTower")
				PlayerPrefs.SetString("ResultMessage", "Yeah! You Lose!");
			Destroy(gameObject);
			
			Application.LoadLevel(3);
		}
}