#pragma strict

var id :int;
var prefab : GameObject;

function SummonMonster () {
	Instantiate(prefab, GameObject.Find("mySpawnPoint").transform.position, Quaternion.identity);
}