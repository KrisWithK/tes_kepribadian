function result() {
  let i;
  
  
  var answer1 = document.querySelectorAll('input[name="content_a"]:checked');
  for(i=0; i < answer1.length; i++)
  answer1 = answer1[i].value
  
  var answer2 = document.querySelectorAll('input[name="content_b"]:checked');
  for(i=0; i < answer2.length; i++)
  answer2 = answer2[i].value
  
  var answer3 = document.querySelectorAll('input[name="content_c"]:checked');
  for(i=0; i < answer3.length; i++)
  answer3 = answer3[i].value
  
  var answer4 = document.querySelectorAll('input[name="content_d"]:checked');
  for(i=0; i < answer4.length; i++)
  answer4 = answer4[i].value
  
  var answer5 = document.querySelectorAll('input[name="content_e"]:checked');
  for(i=0; i < answer5.length; i++)
  answer5 = answer5[i].value
  
  var answer6 = document.querySelectorAll('input[name="content_f"]:checked');
  for(i=0; i < answer6.length; i++)
  answer6 = answer6[i].value
  
  var answer7 = document.querySelectorAll('input[name="content_g"]:checked');
  for(i=0; i < answer7.length; i++)
  answer7 = answer7[i].value
  
  var answer8 = document.querySelectorAll('input[name="content_h"]:checked');
  for(i=0; i < answer8.length; i++)
  answer8 = answer8[i].value
  
  var answer9 = document.querySelectorAll('input[name="content_i"]:checked');
  for(i=0; i < answer9.length; i++)
  answer9 = answer9[i].value
  
  var answer10 = document.querySelectorAll('input[name="content_j"]:checked');
  for(i=0; i < answer10.length; i++)
  answer10 = answer10[i].value
  
  total_result = parseInt(answer1) + parseInt(answer2) + parseInt(answer3) + parseInt(answer4) + parseInt(answer5) + parseInt(answer6) + parseInt(answer7) + parseInt(answer8) + parseInt(answer9) + parseInt(answer10)
  
  const element1 = document.createElement('h3')
  const element2 = document.createElement('p')
  const element3 = document.createElement('p')

  if (total_result >= 10 && total_result <= 17) {
   
   element1.innerText = "CHARM"
   element2.innerText = "Pesona alami membuat kepribadianmu menjadi spesial."
   element3.innerHTML = "&emsp;Begitu menggemaskan dan polos, kamu juga memiliki pesona yang tak terbantahkan, yang bisa membuat orang lain tertarik.<br>&emsp;Kamu pun tidak memerlukan embel-embel atau sensasi heboh untuk dilirik orang,sebab pesona kamu memang sudah alami."
   element1.className = "heading"
   
  } else if (total_result >= 18 && total_result <= 27) {
   
   element1.innerText = "CONFIDENT"
   element2.innerText = "Kepercayaan dirimu membuatmu terlihat unik."
   element3.innerHTML = "&emsp;kamu tidak pernah membiarkan apapun atau siapapun menggoyahkan kepercayaan dirimu. Dan kamu selalu membela apa yang kamu yakini.<br>&emsp;Kamu memiliki rencana tertentu untuk masa depan serta kamu tahu cara mencapainya."
   element1.className = "heading"
   
  } else if (total_result >= 28 && total_result <= 37) {
   
   element1.innerText = "BRILLIANT MIND"
   element2.innerText = "Kecemerlangan dirimu adalah keistimewaan kamu."
   element3.innerHTML = "&emsp;Kamu memiliki pikiran yang hebat, kreatif dalam berfikir, serta pendekatan logis.<br>&emsp;Kamu adalah pemecah masalah yang sangat baik dan pikiranmu dipenuhi dengan ide-ide yang menakjubkan."
   element1.className = "heading"
   
  } else if (total_result >= 38 && total_result <= 44) {
   
   element1.innerText = "GREAT PERSONALITY"
   element2.innerText = "Kepribadian luar biasa kamu membuatmu terlihat sangat spesial."
   element3.innerHTML = "&emsp;Kamu memiliki energi positif dan kamu mampu menularkannya kepada orang lain, sehingga mereka tertarik padamu.<br>&emsp;Sikapmu yang santai membuat kamu mudah diajak berbicara seerta menjalin hubungan."
   element1.className = "heading"
   
  } else if (total_result >= 45 && total_result <= 50) {
   
   element1.innerText = "LOYALTY"
   element2.innerText = "Kesetiaanmu pada teman-temanmu membuatmu jadi spesial"
   element3.innerHTML = "&emsp;Persahabatanmu tidaklah murah,tapi itulah yang membuatnya jadi berharga.<br>&emsp;Kamu sangatlah manis, baik hati, dan selalu siap membantu siapapun yang membutuhkan."
   element1.className = "heading"
   
  } else {
    document.getElementById('show_result').innerHTML = "<i>jawaban anda belum lengkap!</i>"
  }
  
  document.getElementById('show_result').appendChild(element1)
  document.getElementById('show_result').appendChild(element2)
  document.getElementById('show_result').appendChild(element3)

}