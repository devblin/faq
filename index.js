let faqTemplate =
	'<div class="card">' +
	'<div class="card-header" id="headingOne">' +
	'<h5 class="mb-0">' +
	"<button " +
	'class="btn btn-success mybtn p-3"' +
	'type="button"' +
	'data-toggle="collapse"' +
	'data-target="#%ID%"' +
	'aria-expanded="true"' +
	'aria-controls="%ID%"' +
	"	>" +
	"%TITLE%" +
	"</button>" +
	"</h5>" +
	"	</div>" +
	"<div" +
	'	id="%ID%"' +
	'class="collapse"' +
	'	aria-labelledby="headingOne"' +
	'	data-parent="#accordionExample"' +
	">" +
	'<div class="card-body">%CONTENT%</div>' +
	"	</div>" +
	"</div>";

const parentAccordian = document.getElementById("accordionExample");
faqData.forEach((v, i) => {
	var temp = faqTemplate;
	temp = temp.replaceAll("%ID%", "myCollapse" + i);
	temp = temp.replaceAll("%CONTENT%", v.content);
	temp = temp.replaceAll("%TITLE%", v.title);
	parentAccordian.innerHTML += temp;
});
const firstFaq = document.getElementById("myCollapse0");
firstFaq.classList.add("show");

(function () {
	var s1 = document.createElement("script"),
		s0 = document.getElementsByTagName("script")[0];
	s1.async = true;
	s1.src = "https://embed.tawk.to/60b06b73de99a4282a1a055f/1f6oi7fgv";
	s1.charset = "UTF-8";
	s1.setAttribute("crossorigin", "*");
	s0.parentNode.insertBefore(s1, s0);
})();
