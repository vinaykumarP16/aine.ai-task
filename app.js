const getdata=async()=>{
	const get=await fetch('https://myfriends-api.herokuapp.com/myfriends');
	const data=await get.json();
	const name=(`hi ${data[0].name}`);
	const email=(`logged ${data[0].email}`);
	const newdata=document.getElementById('second');

	const h1=document.createElement('h2');
	h1.innerHTML=name;
	newdata.appendChild(h1);
	const br=document.createElement('br');
	newdata.appendChild(br);
	const h2=document.createElement('h3');
	h2.innerHTML=email;
	newdata.appendChild(h2);
	 
	
}

