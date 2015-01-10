#pragma strict

var enemySpawnPoint : GameObject;
var prefab : GameObject [];
function Start () {
//	for(var i=0;i<5;i++) {
//		Instantiate(prefab[Random.Range(0, 3)], enemySpawnPoint.transform.position, Quaternion.identity);
//		yield WaitForSeconds(.3);
//	}	
	SpawnMonster(0, 1, 5, 1.2);
		yield WaitForSeconds(10);
		
	SpawnMonster(0, 2, 10, 1.2);
		yield WaitForSeconds(12);
		
	SpawnMonster(0, 3, 15, 1.4);
		yield WaitForSeconds(14);
		
	SpawnMonster(1, 3, 20, 1.4);
		yield WaitForSeconds(16);
	
	SpawnMonster(2, 3, 25, 1.6);
		yield WaitForSeconds(18);
		
	SpawnMonster(3, 3, 30, 1.8);	
}
function SpawnMonster (startIndex : int, endIndex : int, amt : int, wait : float ) {
	for(var i=0;i<amt;i++){
		Instantiate(prefab[Random.Range(startIndex, endIndex)], enemySpawnPoint.transform.position,Quaternion.identity);
		yield WaitForSeconds(wait);
	}
}