#pragma strict

var cost : int= 1;
var prefab : GameObject;

function SummonMonster () {
	if(GameObject.Find("Energy").GetComponent(Energy).SpendEnergy(cost)) {
	Instantiate(prefab, GameObject.Find("mySpawnPoint").transform.position, Quaternion.identity);	
		}
		transform.Find("CDTimer").SendMessage("Run");
}