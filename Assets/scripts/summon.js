﻿#pragma strict

var amount : int= 1;
var prefab : GameObject;

function SummonMonster () {
	if(GameObject.Find("Energy").GetComponent(Energy).SpendEnergy(amount)) {
	Instantiate(prefab, GameObject.Find("mySpawnPoint").transform.position, Quaternion.identity);	
		}
}