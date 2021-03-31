function editMode(){
	var postTitle=document.getElementById('postTitle');
	var postBody=document.getElementById('postContent');
	var editButton=document.getElementById('edit');
	var saveButton=document.getElementById('save');
	
	editButton.style.display='none';
	saveButton.style.display='';
	postTitle.contentEditable ='true';
	postBody.contentEditable ='true';
	postTitle.style.border='1px solid pink';
	postBody.style.border='1px solid pink';
}

var text = document.getElementById('postTitle');
var myData;
var postData = window.localStorage.getItem("save");
var reset = text.innerHTML;
// if no data
if (postData == null || postData == '') {
    myData = text.innerHTML;
    // store default value
    window.localStorage.setItem("save", myData);
} else {
    // if there is a value post it
    text.innerHTML = postData;
}

function saveMode() {
    // store the current value
    myData = text.innerHTML;
    // local store the value
    window.localStorage.setItem("save", myData);
	
	var postTitle=document.getElementById('postTitle');
	var postBody=document.getElementById('postContent');
	var editButton=document.getElementById('edit');
	var saveButton=document.getElementById('save');
	editButton.style.display='';
	saveButton.style.display='none';
	postTitle.contentEditable ='false';
	postBody.contentEditable ='false';
	postTitle.style.border='';
	postBody.style.border='';
}


    var likeCount=0;

function clickLike(){
   
        document.getElementById("likeBlog").innerHTML='<i class="fa fa-thumbs-o-up"> </i> Liked';
        likeCount++;
        document.getElementById("likeCount").innerHTML=likeCount+" person like this!"
    
}

function addComments(id){
        var addEventName = id.value +'<br>';
        var a = document.getElementById('userComments');
        document.getElementById('addEventNames').innerHTML += '<p class="commentList">'+addEventName+'</p>';          
        a.value=a.defaultValue;
    }