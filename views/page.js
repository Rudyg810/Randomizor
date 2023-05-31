


function showPopup() {
	document.getElementById("popup").classList.remove("hide");
	document.querySelector(".main-content").classList.add("enable");
}

function hidePopup() {
	document.getElementById("popup").classList.add("hide");
	document.querySelector(".main-content").classList.remove("enable");
}
array= ["https://instagram.fdel1-5.fna.fbcdn.net/v/t51.2885-15/241824587_308571904401456_9098793943868346007_n.jpg?stp=dst-jpg_e35_s320x320&_nc_ht=instagram.fdel1-5.fna.fbcdn.net&_nc_cat=100&_nc_ohc=kwvzb8DrSVAAX_7vPme&edm=AJXOVykBAAAA&ccb=7-5&ig_cache_key=MjY2MTcwODMzODAwNTQ5Njg3MQ%3D%3D.2-ccb7-5&oh=00_AfA2oKwLGC4GYQrx89mRq8QDMg5aqMf9KvQUqZVyDJ1YwQ&oe=645AD6DE&_nc_sid=9c1db7","https://scontent.cdninstagram.com/v/t1.15752-9/342494689_788086219184790_8244536868771557508_n.jpg?stp=dst-jpg_s320x320&_nc_cat=106&ccb=1-7&_nc_sid=5a057b&_nc_ohc=YpS2-2rUssoAX8LRUc5&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.cdninstagram.com&oh=03_AdSSIxrjsAkX_wUFwfR9k5qhHqC2qwIALiAypCD7XeFI0A&oe=647CCB44","https://scontent.cdninstagram.com/v/t1.15752-9/248619824_1299702690506564_8051308207080941420_n.jpg?stp=dst-jpg_p320x320&_nc_cat=109&ccb=1-7&_nc_sid=5a057b&_nc_ohc=nP6ahWvf0u0AX8ggjJx&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.cdninstagram.com&oh=03_AdSfyWfin8MPjdMqR2m54mRWaK7AUpbi2NO_H-4Jz6spWg&oe=647CCE7A","https://scontent.cdninstagram.com/v/t1.15752-9/345195041_3360032997643048_3510591428246587387_n.jpg?stp=dst-jpg_s480x480&_nc_cat=106&ccb=1-7&_nc_sid=5a057b&_nc_ohc=QRQ4LKzlaPMAX_vV9OP&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.cdninstagram.com&oh=03_AdT6UYqyhDq51loHUaGgL9Hc62NOE4BmaUkKUSLYvtdY1Q&oe=647CA50B"]
function imagegenerator1(){
	image1.src = array[0];
	array.splice(0,1);

};
function imagegenerator2(){
	image2.src = array[0];
	array.splice(0,1);
};

function onclickimg1(){
	imagegenerator2();
};

function onclickimg2(){
	imagegenerator1();
};
imagegenerator1();
imagegenerator2();

