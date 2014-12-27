#pragma strict
var speed : float = 8.0f;
var amount : int= 1;
function Update () {
	rigidbody2D.velocity = new Vector2(speed, rigidbody2D.velocity.y);
}
function OnCollisionEnter2D (coll : Collision2D) {
	if(coll.collider.tag == "EnemyTower") {
		coll.collider.GetComponent(EnemyTower).LostHP(amount);
		Destroy(gameObject);
		}
	}