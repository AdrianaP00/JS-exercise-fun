const countries = [
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
  ];
  
  function cancel(div_) {
    return div_.remove()
  }
  
  for (const country of countries) {
    const div_ = document.createElement("div");
    const h4_ = document.createElement("h4");
    const img_ = document.createElement("img");
  
    const butt_ = document.createElement("button");
    butt_.addEventListener("click", function () {
      cancel(div_)
    });
    butt_.textContent = "Delete";
  
  
    h4_.textContent = country.title;
    img_.src = country.imgUrl;
  
    div_.appendChild(h4_);
    div_.appendChild(butt_);
    div_.appendChild(img_);
  
    document.body.appendChild(div_);
  }