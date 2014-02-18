#pragma strict
//a rigid body that links to the sphere prefab
var onesphere:Rigidbody;
var twosphere:Rigidbody;
var threesphere:Rigidbody;
var foursphere:Rigidbody;
//the total number of spheres to generate
var maximumspheres:int;

function generatespheres(){
	var colornumber:int;
	colornumber = Random.Range(1,5);
	Debug.Log(colornumber);
	var xposition:float;
	xposition = Random.Range(-2.5f,2.5f);
	switch(colornumber)
	{
		case 1:
			Instantiate(onesphere,Vector3(xposition,5,0), Quaternion.identity);
			break;
		case 2:
			Instantiate(twosphere,Vector3(xposition,5,0), Quaternion.identity);
			break;
		case 3:
			Instantiate(threesphere,Vector3(xposition,5,0), Quaternion.identity);
			break;
		case 4:
			Instantiate(foursphere,Vector3(xposition,5,0), Quaternion.identity);
			break;
	}
}

function Start () {
	//run the generate sphere method
	//first parameter is the startup delay
	//second paramiter is how often it will run
	InvokeRepeating("generatespheres",1.0,1.0);
}

function Update () {
	
}