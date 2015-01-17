#pragma strict
var hp : int = 100;
var award : int = 0;
var speed : float = 8.0f;
var atk : int= 1;
private var opponent : GameObject;
var isAttacking : boolean = false;
private var anim : Animator;

function Start () {
	anim = GetComponentInChildren(Animator);
}

function Update () {
	
	if(hp <=0) {
		anim.SetTrigger("dead");
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
	if(anim.GetBool("attack") !=isAttacking)
		anim.SetBool("attack", isAttacking);		
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