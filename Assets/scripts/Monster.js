#pragma strict
var hp : int = 100;
var award : int = 0;
var speed : float = 8.0f;
var atk : int= 1;
var opponent : GameObject;
var isAttacking : boolean = false;

function Update () {
	
	if(hp <=0) {
		if(gameObject.tag == "enemymon"){
			GameObject.Find("Energy").SendMessage("AddEnergy", award);
		}
		Destroy(gameObject);
	}
	else {
		
		if(opponent == null)
			isAttacking = false;
		else
			opponent.SendMessage("Damage", atk);
			
	if(isAttacking == false)	
		rigidbody2D.velocity = new Vector2(speed, 0);
		//transform.position.x += speed;
	else
		rigidbody2D.velocity = new Vector2(0, 0);	
	}
}
function Damage (atk : int) {
	hp -= atk;
}


function OnTriggerStay2D (other : Collider2D) {
	if(
		(other.tag == "enemymon" && transform.tag == "mymon") ||
		(other.tag == "mymon" && transform.tag == "enemymon") ||
		(other.tag == "EnemyTower" && transform.tag == "mymon") ||
		(other.tag == "MyTower" && transform.tag == "enemymon") 
	) {
		isAttacking = true;
		opponent = other.gameObject;
	}
}	