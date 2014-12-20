﻿#pragma strict

var target : Transform;
var distance = -10;
var damping = 10;
var lockRotation : boolean = true;
var leftOffset : float = 19.0f;
function Update () {
	var wantedPosition = target.TransformPoint(leftOffset, 0, -distance);
	transform.position = Vector3.Lerp (transform.position, new Vector3(wantedPosition.x, -1.63, transform.position.z), Time.deltaTime * damping);

	transform.LookAt (target, target.up);
	
	if(lockRotation) {
		transform.localRotation = Quaternion.identity;
	}
}