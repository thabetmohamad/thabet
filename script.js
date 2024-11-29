function reserveItem(itemName) {
    alert(`تم حجز ${itemName}. سنتواصل معك قريبًا لإتمام التفاصيل.`);
  }
  
  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    alert(`شكرًا لك، ${name}! تم استلام رسالتك وسنرد عليك على ${email}.`);
    
  });
  
  