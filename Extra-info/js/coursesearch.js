//User info
//var access_token = localStorage.getItem("id_token");
//console.log("in reviews");
//console.log(access_token);
//access_token="eyJraWQiOiIrRUlCVHBVTngyeGhcLzg3MEpSUEh0T2QzRUdlRU1wZG1EZ3UxTkpTMWptOD0iLCJhbGciOiJSUzI1NiJ9.eyJhdF9oYXNoIjoiNUN5UEI4Y0RKRmJ0UGNoNGJuNm5iQSIsInN1YiI6IjAwMzI1YWM2LTE5YWQtNGY0MC05MDFhLTBlNjc2ZTkwNmZhMSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9MVDZmT1ZnQ2IiLCJjb2duaXRvOnVzZXJuYW1lIjoiYmFwcGkiLCJhdWQiOiI1NTliMXQ2bWxya2hycDIwdm9uOXE0djJhZCIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjUyNTU1NTAzLCJleHAiOjE2NTI1NTkxMDMsImlhdCI6MTY1MjU1NTUwMywianRpIjoiMmZkYTlkZGMtZTI3Yy00N2RiLTg2M2MtZTcxZGMwM2Q4MzM1IiwiZW1haWwiOiJjaGkuYmhhcmF0aHNhaUBnbWFpbC5jb20ifQ.IDZWeKhWjVwL2Z0wcm1zsP36ApELMQ0vFtAcnJ9wG-6dHOdkvvWPwYddsV-W9ZgMSV76HZrxHn5I9Z3Dx0RICl8k1llF6-IaXyd4Yc3Qj8o7xFZtDg3CYLn-67C9bYg_EE97pIc3rtEJyvS2UOkJxNVpKceAXs-cWaXSWeVY7PaswmVy69yF232gcEdeDORR8NrIzecjhtjP6eBk5lAO_-8Rq8aDyVoJccy7eVgRMSX1mvplXP1yk-294FvzB0Ai2ahrqXaMRKKfjQ382WrBIk3UxWTnRpGSd1ZQxYvatrsMdC02tipPYY_BWfJLCXK9Savjlsl790fXy-5dyMmVPw";
var access_token = "eyJraWQiOiIrRUlCVHBVTngyeGhcLzg3MEpSUEh0T2QzRUdlRU1wZG1EZ3UxTkpTMWptOD0iLCJhbGciOiJSUzI1NiJ9.eyJhdF9oYXNoIjoiN1Z6VHpnZmt2cG1OLTJwMWdEREw3QSIsInN1YiI6ImNiODlhOWY5LTAxYjctNDMxZC05MGFiLWMwZWFkMmU4MGMxZCIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9MVDZmT1ZnQ2IiLCJjb2duaXRvOnVzZXJuYW1lIjoidmcyMjM3IiwiYXVkIjoiNTU5YjF0Nm1scmtocnAyMHZvbjlxNHYyYWQiLCJldmVudF9pZCI6IjVmOTc2NjE3LWFiZTktNDNiMS04NmEyLWEwODhlMTk2YzAzZCIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjUyNjY0MzM2LCJleHAiOjE2NTI2Njc5MzYsImlhdCI6MTY1MjY2NDMzNiwianRpIjoiNDE3NWM1M2QtNDcyNS00NzFkLThkNmQtZDBkNmIwODdhYTVmIiwiZW1haWwiOiJ2ZzIyMzdAbnl1LmVkdSJ9.BRAW-Yc9YLdhh4NKRsDUVMCoaaxJVAkNwNGbDHG99u5l3U9ROoU-xArJs5KQo1wUh4Oq4UZIygRgYgfVMjb0XF68qvfk23GJp7RiPguY_jpj_J1rcjEXsvKM3wcLyG5SgUZS_fRqm_N12C45_QFNRWJlO1Qbfm8hkFCojaRW6Qf-YMYEYO2SAKw4vvD8cFdhhTMtdlDJKlIHe6BsgVdu5WloNfJs69C78uUj4a3YbPP1mooD3oQkTAGOit1CSzu6kcFrfDRwSCTlpZGA2WEmSgX-JGBrM6j5_sMPeP3xCNTJVtmRaMzaI0Z70SragaoKdhDrDvV-gdScX7nNJjxQ_g";
var params = {
  "Authorization": access_token,
  "school": "UC"
}
var body = {
  "Authorization": access_token
}
console.log(params);
console.log(access_token);

var apigClient = apigClientFactory.newClient({});
console.log(apigClient)
apigClient.usersUserGet(params, body, {}).then(function (res) {

  console.log(res["data"]);
  userdata = res["data"];

  document.getElementById("username").innerHTML = userdata["username"];
  document.getElementById("school").innerHTML = userdata["school"];
  document.getElementById("program").innerHTML = userdata["program"] + " Major";
  document.getElementById("semester").innerHTML = userdata["semester"];



}).catch(function (result) {

  console.log("NO RESULT");
});
//get schools from api
//
apigClient.schoolsGet(params, {}, {}).then(function (res) {

  var schools = Object.keys(res['data']);
  var codes = Object.values(res['data'])
  var select = document.createElement("select");
  //class class="form-select"
  //select.className = "list-group-item";
  select.name = "schools";
  select.id = "schoollist"
  for (const val of schools) {
    var option = document.createElement("option");
    option.value = val + " - " + res['data'][val];
    option.text = val.charAt(0).toUpperCase() + val.slice(1);
    select.appendChild(option);
  }
  var label = document.createElement("label");
  label.innerHTML = "School "
  label.htmlFor = "schools";
  document.getElementById("drp").appendChild(label).appendChild(select);
  //console.log(document.getElementById("schoollist").value);
  document.getElementById('schoolz').innerHTML = document.getElementById("schoollist").value;
  params = {
    "Authorization": access_token,
    "school": document.getElementById("schoolz").innerHTML.slice(-2)
  }
}).catch(function (result) {

  console.log("NO RESULT");
});

let values = {}
let values_codes = []

function funct() {

  document.getElementById('schoolz').innerHTML = document.getElementById("schoollist").value;
  console.log(document.getElementById("schoolz").innerHTML.slice(-2));
  params = {
    "Authorization": access_token,
    "school": document.getElementById("schoolz").innerHTML.slice(-2)
  }
  let element = document.getElementById("drppr");
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
  let element2 = document.getElementById("insidecouse");
  while (element2.firstChild) {
    element2.removeChild(element2.firstChild);
  }

  apigClient.schoolsProgramsGet(params, {}, {}).then(function (res) {
    console.log(res['data']);
    values = {};

    values = res['data'];
    values_codes = Object.keys(res['data']);
    console.log(values_codes);
    funcpr();
  }).catch(function (result) {

    console.log("NO RESULT");
  });

  console.log("inside func");

  console.log(values);





}

function funcprogram() {
  document.getElementById('schoolz').innerHTML = document.getElementById("schoollist").value;
  document.getElementById('programz').innerHTML = document.getElementById("programlist").value;




}

//schools end
//console.log(document.getElementById('schoolz').innerHTML);

//get programs from school

function funcpr() {

  var select = document.createElement("select");
  select.name = "programs";
  select.id = "programlist"
  console.log(values_codes);
  for (const val of values_codes) {
    //console.log(values_codes[val]);
    var option = document.createElement("option");
    option.value = val;
    option.text = values[val].charAt(0).toUpperCase() + values[val].slice(1);
    select.appendChild(option);
  }

  var label = document.createElement("label");
  label.innerHTML = "Choose your Program: "
  label.htmlFor = "program";

  document.getElementById("drppr").appendChild(label).appendChild(select);
  document.getElementById('programz').innerHTML = document.getElementById("programlist").value;



}
apigClient.schoolsProgramsGet(params, {}, {}).then(function (res) {

  //console.log(res['data']);
  values = res['data'];
  values_codes = Object.keys(res['data'])
  funcpr();
}).catch(function (result) {

  console.log("NO RESULT");
});

let coursedata = {}

function searchcourse() {
  let element3 = document.getElementById("insidecouse");
  while (element3.firstChild) {
    element3.removeChild(element3.firstChild);
  }
  params = {
    "Authorization": access_token,
    "school": document.getElementById("schoolz").innerHTML.slice(-2),
    "program": document.getElementById('programz').innerHTML,
    "year": document.getElementById('yr').value,
    "semester": document.getElementById('sem').value
  }
  school = document.getElementById('schoolz').innerHTML
  program = document.getElementById('programz').innerHTML;
  //coursesGet()
  apigClient.searchGet(params, {}, {}).then(function (res) {
    coursedata = res['data'];
    console.log(coursedata);


    //console.log(coursedata);
    for (const course in coursedata) {
      var li = document.createElement("li");
      //console.log(coursedata[course]);
      li.className = "list-group-item";
      li.innerHTML = coursedata[course]['name'];
      var anchor = document.createElement("a");
      anchor.href = "/Users/bharath/Desktop/Stuff/SEM-2/CC/Project/GIT/NYU-Smart-Hub/Extra-info/review.html?q=" + coursedata[course]['id'];
      anchor.style.textDecoration = "none";
      //anchor.innerHTML=coursedata[course]['name'];
      anchor.appendChild(li);
      document.getElementById("insidecouse").appendChild(anchor);
    }



  }).catch(function (result) {

    console.log("NO RESULT");
  });




}